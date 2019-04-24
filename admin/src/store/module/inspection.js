import inspectionService from '@/sdk/inspectionService'
import problemService from '@/sdk/problemService'
const CLEAN_STATE = {
  total: 0,
  list: [],
  page: { curr: 1, max: 0 },
  filter: { name: '', start: 0, limit: 10, type: '', group: '', status: '' },
  plan: {
    filter: { name: '', start: 0, limit: 10 },
  },
}

const state = { ...CLEAN_STATE }

const actions = {
  changeFilter({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('page', 1)
    commit('filter', state.filter)
  },
  reset({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('reset', 'REMOVE')
  },
  async countByVehicle({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await inspectionService.countByVehicle(state.filter, payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('total', rest.data)
  },
  async count({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await inspectionService.count(state.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('total', rest.data)
  },
  async load({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await inspectionService.load(state.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    await Promise.all(rest.data.map(async e => {
      let countRest = await problemService.countByInspection(state.filter, e)
      if (countRest.code !== 'SUCCESS') {
        dispatch('failBox/onRest', countRest, { root: true })
        return
      }
      e.problemCount = countRest.data
    }))
    commit('list', rest.data)
  },
  goPage({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('page', payload)
  },
}

const mutations = {
  filter(state, e) {
    state.filter = e
  },
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
}

export default {
  namespaced: true, state, actions, mutations,
}
