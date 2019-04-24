import vehicleService from '@/sdk/vehicleService'
import inspectionService from '@/sdk/inspectionService'
import issueService from '@/sdk/issueService'
import quoteService from '@/sdk/quoteService'

const CLEAN_STATE = {
  own: {
    active: 0,
    service: 0,
    out: 0,
    cost: { today: 0, month: 0 },
  },
  rental: {
    active: 0,
    service: 0,
    out: 0,
    cost: { today: 0, month: 0 },
  },
  costList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  pending: 0,
  quoted: 0,
  confirm: 0,
  scheduled: 0,
  complete: 0,
  overdue: 0,
  inspectionList: [],
  issueList: [],
}

const state = { ...CLEAN_STATE }

const actions = {
  async countVehicle({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await vehicleService.count(payload)
    commit(payload.commit, rest.data)
  },
  async countByStatus({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest1 = await inspectionService.count({ status: payload.toUpperCase() })
    let rest2 = await issueService.count({ status: payload.toUpperCase() })
    commit(payload, rest1.data + rest2.data)
  },
  async load({ commit, dispatch, state, rootState }, payload, config = {}) {
    let vehicleFilter = [
      { status: 'ACTIVE', rental: false, commit: 'ownActive' }, { status: 'ACTIVE', rental: true, commit: 'rentalActive' },
      { status: 'STORAGE', rental: false, commit: 'ownStorage' }, { status: 'STORAGE', rental: true, commit: 'rentalStorage' },
      { status: 'DOWN', rental: false, commit: 'ownDown' }, { status: 'DOWN', rental: true, commit: 'rentalDown' },
    ]
    vehicleFilter.forEach(e => {
      dispatch('countVehicle', e)
    })
    let statusList = ['pending', 'quoted', 'confirm', 'scheduled', 'complete', 'overdue']
    statusList.forEach(e => {
      dispatch('countByStatus', e)
    })

    let now = new Date()
    let minDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
    let rest = await quoteService.loadCostByOwnVehicle({ minDate: minDate })
    commit('ownCostToday', rest.data)
    rest = await quoteService.loadCostByRentalVehicle({ minDate: minDate })
    commit('rentalCostToday', rest.data)
    minDate = new Date(now - 1000 * 60 * 60 * 24 * 30)
    rest = await quoteService.loadCostByOwnVehicle({ minDate: minDate })
    commit('ownCostMonth', rest.data)
    rest = await quoteService.loadCostByRentalVehicle({ minDate: minDate })
    commit('rentalCostMonth', rest.data)
    let costList = []
    for (let i = 0; i < 12; i++) {
      let month = now.getUTCMonth() - i
      if (month === -1) break
      minDate = new Date(now.getUTCFullYear(), month, now.getUTCDate())
      let maxDate = new Date(now.getUTCFullYear(), month + 1, 1)
      rest = await quoteService.loadCost({ minDate, maxDate })
      costList.push(rest.data)
    }
    commit('costList', rest.data)
  },
  async loadInspection({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await inspectionService.load({ name: '', start: 0, limit: 10 })
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('inspectionList', rest.data)
  },
  async loadIssue({ commit, dispatch, state, rootState }, payload, config = {}) {
    let rest = await issueService.load({ name: '', start: 0, limit: 10 })
    if (rest.code !== 'SUCCESS') {
      dispatch('failBox/onRest', rest, { root: true })
      return
    }
    commit('issueList', rest.data)
  },
}

const mutations = {
  ownActive(state, e) {
    state.own.active = e
  },
  rentalActive(state, e) {
    state.rental.active = e
  },
  ownStorage(state, e) {
    state.own.storage = e
  },
  rentalStorage(state, e) {
    state.rental.storage = e
  },
  ownDown(state, e) {
    state.own.down = e
  },
  rentalDown(state, e) {
    state.rental.down = e
  },
  ownCostToday(state, e) {
    state.own.cost.today = e
  },
  ownCostMonth(state, e) {
    state.own.cost.Month = e
  },
  rentalCostToday(state, e) {
    state.rental.cost.today = e
  },
  rentalCostMonth(state, e) {
    state.rental.cost.Month = e
  },
  pending(state, e) {
    state.pending = e
  },
  quoted(state, e) {
    state.quoted = e
  },
  confirm(state, e) {
    state.confirm = e
  },
  scheduled(state, e) {
    state.scheduled = e
  },
  complete(state, e) {
    state.complete = e
  },
  overdue(state, e) {
    state.overdue = e
  },
  costList(state, e) {
    state.costList = e
  },
  inspectionList(state, e) {
    state.inspectionList = e
  },
  issueList(state, e) {
    state.issueList = e
  },
}

export default {
  namespaced: true, state, actions, mutations,
}
