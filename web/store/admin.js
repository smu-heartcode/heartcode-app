export const state = () => ({
  password: ""
})

export const getters = {
  isLoggedIn: state => !!state.password,
}

export const mutations = {
  setPassword(state, password) {
    state.password = password
  },
}

export const actions = {
  login({commit}, {password}) {
    commit('setPassword', password)
  },
}
