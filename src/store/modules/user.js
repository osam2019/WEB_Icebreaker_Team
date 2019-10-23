// initial state
var state = {
  user: ''
};

// getters
var getters = {
  getUsername(state) {
    return state.user;
  }
};

// mutations
var mutations = {
  setUsername(state, username) {
    state.user = username;
  }
};

export default {
  state,
  getters,
  mutations
};
