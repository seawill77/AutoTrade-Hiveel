import vehicleService from '@/sdk/vehicleService'
import inspectionService from '@/sdk/inspectionService'
import problemService from '@/sdk/problemService'
import issueService from '@/sdk/issueService'
import vehicleDriverRelateService from '@/sdk/vehicleDriverRelateService'

const CLEAN_STATE = {
  list: [],
  page: { curr: 1, max: 0 },
  filter: { name: '', start: 0, limit: 12, group: '', status: '' },
  detail: {},
  inspection: {
    list: [],
    page: { curr: 1, max: 0 },
    filter: { name: '', start: 0, limit: 0 },
  },
  issue: {
    total: 0,
    list: [],
    page: { curr: 1, max: 0 },
    filter: { name: '', start: 0, limit: 0 },
  },
  vehicleDriverRelate: {
    list: [],
    page: { curr: 1, max: 0 },
    filter: { name: '', start: 0, limit: 0 },
  },
}

const state = { ...CLEAN_STATE }

const actions = {
  changeFilter({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('page', 1)
    commit('filter', state.filter)
  },

  async save({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await vehicleService.save(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
    }
  },
  async delete({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await vehicleService.save(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('list', rest.data)
  },
  async update({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await vehicleService.save(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
    }
  },
  async loadById({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await vehicleService.loadById(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('detail', rest.data)
  },
  async count({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await vehicleService.count(state.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('total', rest.data)
  },
  async load({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await vehicleService.load(state.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('list', rest.data)
  },

  async countInspection({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await inspectionService.countByVehicle(state.inspection.filter, payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('inspectionTotal', rest.data)
  },
  async loadInspection({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await inspectionService.loadByVehicle(state.inspection.filter, payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    await Promise.all(rest.data.map(async(e, i) => {
      let problemRest = await problemService.countByInspection({ }, e)
      e.problem = problemRest.data
    }))
    commit('inspectionList', rest.data)
  },
  async countIssue({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await issueService.countByVehicle(state.issue.filter, payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('issueTotal', rest.data)
  },
  async loadIssue({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await issueService.loadByVehicle(state.issue.filter, payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    await Promise.all(rest.data.map(async(e, i) => {
      let problemRest = await problemService.countByIssue({}, e)
      e.problem = problemRest.data
    }))
    commit('issueList', rest.data)
  },

  async loadVehicleDriverRelate({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await vehicleDriverRelateService.loadByVehicle(state.issue.filter, payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    await Promise.all(rest.data.map(e => {
      let onDate = new Date(e.onDate)
      let offDate = new Date(e.offDate)
      e.dayDiff = Math.ceil((offDate.getTime() - onDate.getTime()) / (1000 * 3600 * 24))
    }))
    commit('vehicleDriverRelateList', rest.data)
  },

  goPage({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('page', payload)
  },
}
const mutations = {
  page(state, e) {
    state.page.curr = e
    state.filter.start = (e - 1) * state.filter.limit
  },
  list(state, e) {
    state.list = e
  },
  detail(state, e) {
    state.detail = e
  },
  filter(state, e) {
    state.filter = e
  },
  total(state, e) {
    state.total = e
    state.page.max = e / state.filter.limit + (e % state.filter.limit === 0 ? 0 : 1)
  },
  inspectionTotal(state, e) {
    state.inspection.total = e
  },
  inspectionList(state, e) {
    state.inspection.list = e
  },
  issueTotal(state, e) {
    state.issue.total = e
  },
  issueList(state, e) {
    state.issue.list = e
  },
  vehicleDriverRelateList(state, e) {
    state.vehicleDriverRelate.list = e
  },
}

export default {
  namespaced: true, state, actions, mutations,
}
