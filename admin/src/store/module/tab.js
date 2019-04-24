const CLEAN_STATE = {
  home: '1',
  service: '1',
  invoice: '1',
  personDetail: '2',
  vehicleAdd: '1',
  vehicleDetail: '1',
  inspection: '2',
}

const state = { ...CLEAN_STATE }

const actions = {
  changeHome({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('home', payload)
  },
  changeService({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('service', payload)
  },
  changeInvoice({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('invoice', payload)
  },
  changePersonDetail({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('personDetail', payload)
  },
  changeVehicleDetail({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('vehicleDetail', payload)
  },
  changeVehicleAdd({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('vehicleAdd', payload)
  },
  changeInspection({ commit, dispatch, state, rootState }, payload, config = {}) {
    commit('inspection', payload)
  },
}

const mutations = {
  home(state, e) {
    state.home = e
  },
  inspection(state, e) {
    state.inspection = e
  },
  service(state, e) {
    state.service = e
  },
  invoice(state, e) {
    state.invoice = e
  },
  personDetail(state, e) {
    state.personDetail = e
  },
  vehicleDetail(state, e) {
    state.vehicleDetail = e
  },
  vehicleAdd(state, e) {
    state.vehicleAdd = e
  },
}

export default {
  namespaced: true, state, actions, mutations,
}
