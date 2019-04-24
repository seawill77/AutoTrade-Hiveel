import personGroupService from '@/sdk/personGroupService'

const CLEAN_STATE = {
  list: [],
  filter: { name: '', start: 0, limit: 0 },
  detail: {},
}

const state = { ...CLEAN_STATE }

const actions = {
  async save({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await personGroupService.save(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
    }
    dispatch('load')
  },
  async delete({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await personGroupService.delete(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('list', state.list)
  },
  async update({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await personGroupService.update(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
    }
  },

  async load({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await personGroupService.load({ start: 0, limit: 100 })
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('list', rest.data)
  },
  async loadById({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await personGroupService.loadById(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('detail', rest.data)
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
