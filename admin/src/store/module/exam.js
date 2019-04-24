import examService from '@/sdk/examService'

const CLEAN_STATE = {
  total: 0,
  list: [],
  page: { curr: 1, max: 0 },
  filter: { name: '', start: 0, limit: 10 },
}

const state = { ...CLEAN_STATE }

const actions = {
  async save({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await examService.save(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
    }
  },
  goPage({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('page', payload)
  },
  reset({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('reset', 'REMOVE')
  },
  changeFilter({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('page', 1)
    commit('filter', state.filter)
  },
  async count({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await examService.count(state.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('total', rest.data)
  },
  async load({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await examService.load({ ...state.filter })
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('list', rest.data)
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
  filter(state, e) {
    state.filter = e
  },
  reset(state, e) {
    state.filter = { name: '', start: 0, limit: 10 }
  },
}

export default {
  namespaced: true, state, actions, mutations,
}
