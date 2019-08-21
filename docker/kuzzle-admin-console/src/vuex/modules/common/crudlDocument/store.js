import * as types from './mutation-types'

const state = {
  basicFilter: null
}

export const mutations = {
  [types.SET_BASIC_FILTER](state, value) {
    state.basicFilter = value
  }
}

export default {
  state,
  mutations
}
