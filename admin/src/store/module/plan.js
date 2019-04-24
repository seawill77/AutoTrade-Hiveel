import planService from '@/sdk/planService'
import inspectionService from '@/sdk/inspectionService'
import problemService from '@/sdk/problemService'
import vehicleService from '@/sdk/vehicleService'

const CLEAN_STATE = {
  total: 0,
  list: [],
  page: { curr: 1, max: 0 },
  filter: { name: '', start: 0, limit: 10 },
  inspection: {
    list: [],
    filter: { name: '', start: 0, limit: 12 },
    page: { curr: 1, max: 0 },
  },
  vehicle: {
    list: [],
    filter: { name: '', start: 0, limit: 12 },
    page: { curr: 1, max: 0 },
  },
}

const state = { ...CLEAN_STATE }

const actions = {
  async count({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await planService.count(state.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('total', rest.data)
  },
  async load({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await planService.load(state.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('list', rest.data)
  },

  async loadInspectionList({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('inspectionFilter', { ...state.inspection.filter, minDate: payload, maxDate: payload })
    let rest = await inspectionService.load(state.inspection.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    await Promise.all(rest.data.map(async(e, i) => {
      let problemRest = await problemService.countByInspection({ start: 0, limit: 100 }, { id: e.id })
      if (problemRest.code !== 'SUCCESS') {
        dispatch('failBox/onRest', problemRest, { root: true })
        return
      }
      e.problem = problemRest.data
    }))
    commit('inspectionList', rest.data)
  },

  async loadVehicleList({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await vehicleService.load(state.vehicle.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('vehicleList', rest.data)
  },
}

const mutations = {
  list(state, e) {
    state.list = e
  },
  total(state, e) {
    state.total = e
    state.page.max = e / state.filter.limit + (e % state.filter.limit === 0 ? 0 : 1)
  },
  page(state, e) {
    state.page.curr = e
    state.filter.start = (e - 1) * state.filter.limit
  },
  inspectionList(state, e) {
    state.inspection.list = e
  },
  inspectionFilter(state, e) {
    state.inspection.filter = e
  },
  vehicleList(state, e) {
    state.vehicle.list = e
  },
}

export default {
  namespaced: true, state, actions, mutations,
}
