// Code reference: https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart

import Vue from 'vue';
import Vuex from 'vuex';
import user from '.modules/user'

export default new Vuex.Store({
  modules: {
    user
  }
});
