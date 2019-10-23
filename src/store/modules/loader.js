import db from '../../api/db'

// initial state
var state = {
  questions: [],
  answers: [],
  users: [],
  pair : {}
}

// getters
var getters = {
  getQuestions(state) {
    return state.questions;
  },
  getAnswers(state) {
    return state.answers;
  },
  getUsers(state) {
    return state.users;
  },
  getPairs(state) {
    return state.pair;
  }
}

// mutations
var mutations = {
  setData(state, data) {
    state.answers = [];
    state.users = [];
    state.pair = {};
    for (var pair of data) {
      var ans = pair.answer;
      var user = pair.user;

      state.answers.push(ans);
      state.users.push(user);
      state.pair[ans] = [user];
    }
  },
  setQuestions(state, questions) {
    state.questions = [];
    for (var q of questions) {
      state.questions.push(q.question);
    }
  }
}

// actions
var actions = {
  loadRoomData({ commit }) {
    db.getData(data => {
      commit('setData', data);
    });
  },
  loadQuestions({ commit }) {
    db.getQuestions(questions => {
      commit('setQuestions', questions);
    });
  }
}

export default {
  state,
  getters,
  mutations,
  actions
};
