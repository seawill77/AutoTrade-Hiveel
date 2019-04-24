import accountService from '@/sdk/accountService'
import personService from '@/sdk/personService'
import router from '@/router'
const CLEAN_STATE = {
  auth: false,
  user: {},
}

const state = { ...CLEAN_STATE }

const actions = {
  async updatePassword({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await accountService.updatePassword(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
    }
  },
  async login({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await accountService.login(payload)
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    rest = await personService.me()
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('auth', true)
    commit('user', rest.data)
    router.replace({ name: 'refresh' })
  },

  async logout({ commit, dispatch, state, rootState }, payload, config = {}) {
    accountService.logout()
    sessionStorage.clear()
    commit('logout')
  },
}

const mutations = {
  auth(state, e) {
    state.auth = e
  },
  user(state, e) {
    state.user = e
  },
  logout(state) {
    initState(state)
  },
}

function initState(s) {
  Object.keys(CLEAN_STATE).forEach(key => {
    s[key] = CLEAN_STATE[key]
  })
}

export default {
  namespaced: true, state, actions, mutations,
}
