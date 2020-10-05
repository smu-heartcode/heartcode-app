export const state = () => ({
  control: {
    active: false,
    connected: true,
  },
  content: []
})

export const getters = {
  isControlActive: state => state.control.active,
  isContentActive: state => (id) => {
    return state.content.includes(id)
  },
  isContentAvailable: state => (id) => {
    if (!state.control.connected) {
      return true
    }

    return state.content.includes(id)
  }
}

export const mutations = {
  setControlActive(state, active) {
    state.control.active = active
  },
  setControlConnected(state, connected) {
    state.control.connected = connected
  },
  setContent(state, content) {
    state.content = content
  },
  toggleContent(state, id) {
    const index = state.content.indexOf(id)
    if (index > -1) {
      state.content.splice(index, 1)
    } else {
      state.content.push(id)
    }
  },
  disableAll(state) {
    state.content = []
  }
}

export const actions = {
  toggleControl({commit, state}) {
    if (state.control.active) {
      return this.$api.$put('/control/learn', {
        content: state.content
      }).finally(() => {
        return commit('setControlActive', false)
      })
    } else {
      return commit('setControlActive', true)
    }
  },
  refreshContent({commit, state}) {
    return this.$api.$get('/control/learn')
      .then(({content}) => {
        commit('setControlConnected', true)
        return commit('setContent', content || [])
      })
      .catch(() => {
        commit('setControlConnected', false)
        return commit('setContent', [])
      })
  }
}
