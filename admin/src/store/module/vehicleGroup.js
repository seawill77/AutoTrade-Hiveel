import vehicleGroupService from '@/sdk/vehicleGroupService'

const CLEAN_STATE = {
  list: [],
  filter: { name: '', start: 0, limit: 100 },
  detail: {},
}

const state = { ...CLEAN_STATE }

const actions = {
  async save({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await vehicleGroupService.save(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
    }
    dispatch('load')
  },
  async delete({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await vehicleGroupService.delete(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('list', state.list)
  },
  async update({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await vehicleGroupService.update(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
    }
  },
  async loadById({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await vehicleGroupService.loadById(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('detail', rest.data)
  },
  async load({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await vehicleGroupService.load(state.filter)
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
  detail(state, e) {
    state.list = e
  },
}

export default {
  namespaced: true, state, actions, mutations,
}
