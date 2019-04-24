import invoiceService from '@/sdk/invoiceService'
const CLEAN_STATE = {
  total: 0,
  list: [],
  platformList: [],
  examList: [],
  page: { curr: 1, max: 0 },
  filter: { name: '', start: 0, limit: 10 },
}

const state = { ...CLEAN_STATE }

const actions = {
  changeFilter({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('page', 1)
    commit('filter', { ...state.filter, ...payload })
  },
  async countPlateform({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await invoiceService.countPlatform(state.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('total', rest.data)
  },
  async loadPlatform({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await invoiceService.loadPlatform(state.filter)
    console.log(rest.data)

    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('platformList', rest.data)
  },
  async countExam({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await invoiceService.countExam(state.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('total', rest.data)
  },
  async loadExam({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await invoiceService.loadExam(state.filter)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('examList', rest.data)
  },
  async loadPlatformById({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await invoiceService.loadPlatformById({ ...payload })
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('detail', rest.data)
  },
  async loadExamById({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await invoiceService.loadExamById({ ...payload })
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('detail', rest.data)
  },
  goPage({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('page', payload)
  },
}

const mutations = {
  platformList(state, e) {
    state.platformList = e
    console.log(e)
  },
  examList(state, e) {
    state.examList = e
  },
  list(state, e) {
    state.list = e
  },
  total(state, e) {
    state.total = e
    state.page.max = e / state.filter.limit + (e % state.filter.limit === 0 ? 0 : 1)
  },
  filter(state, e) {
    state.filter = e
  },
  page(state, e) {
    state.page.curr = e
    state.filter.start = (e - 1) * state.filter.limit
  },
  detail(state, e) {
    state.detail = e
  },
}

export default {
  namespaced: true, state, actions, mutations,
}
