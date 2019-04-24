import personService from '@/sdk/personService'
import inspectionService from '@/sdk/inspectionService'
import problemService from '@/sdk/problemService'
import issueService from '@/sdk/issueService'
import vehicleDriverRelateService from '@/sdk/vehicleDriverRelateService'

const CLEAN_STATE = {
  list: [],
  page: { curr: 1, max: 0 },
  filter: { name: '', start: 0, limit: 0 },
  detail: {},
  inspection: {
    list: [],
    page: { curr: 1, max: 0 },
    filter: { name: '', start: 0, limit: 0 },
  },
  issue: {
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
    let rest = await personService.save(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
    }
  },
  async delete({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await personService.save(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('list', rest.data)
  },
  async update({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await personService.save(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
    }
  },
  async loadById({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await personService.loadById(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    let relateRest = await vehicleDriverRelateService.loadByDriver({ start: 0, limit: 12 }, payload)
    if (relateRest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', relateRest, { root: true })
      return
    }
    let relateResData = relateRest.data
    rest.data.status = !relateResData[0].offDate ? 'Active' : 'Inactive'
    rest.data.vehicle = !relateResData[0].offDate ? relateResData[0].vehicle : {}
    commit('detail', rest.data)
  },
  async count({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await personService.count(state.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('total', rest.data)
  },
  async load({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await personService.load(state.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('list', rest.data)
  },

  async loadInspection({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await inspectionService.loadByDriver(state.inspection.filter, payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    await Promise.all(rest.data.map(async(e, i) => {
      let countRest = await problemService.countByInspection({ start: 0, limit: 100 }, { id: e.id })
      if (countRest.code !== 'SUCCESS') {
        dispatch('failBox/onRest', countRest, { root: true })
        return
      }
      e.problemCount = countRest.data
    }))
    commit('inspectionList', rest.data)
  },
  async countIssue({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await issueService.countByDriver(state.issue.filter, payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('page', rest.data)
  },

  async loadIssue({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await issueService.loadByDriver(state.issue.filter, payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('issueList', rest.data)
  },

  async loadVehicleDriverRelate({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await vehicleDriverRelateService.loadByDriver({ start: 0, limit: 12 }, payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    let onDate = new Date(rest.data.onDate)
    let offDate = new Date(rest.data.offDate)
    rest.data.dayDiff = Math.ceil((offDate.getTime() - onDate.getTime()) / (1000 * 3600 * 24))
    commit('vehicleDriverRelateList', rest.data)
  },

  goPage({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('page', payload)
  },
}

const mutations = {
  total(state, e) {
    state.total = e
    state.page.max = e / state.filter.limit + (e % state.filter.limit === 0 ? 0 : 1)
  },
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
  inspectionList(state, e) {
    state.inspection.list = e
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
