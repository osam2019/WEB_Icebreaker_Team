import db from '../../api/db'

// initial state
var state = {
  user: '',
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
  },
  setData(state, data) {
    state.data = data;
  }
};

export default {
  state,
  getters,
  mutations,
};
