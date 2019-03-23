import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token: '',
    isAuth: false,
    test: 'testing'
  },
  mutations: {
    updateKey(state , newKey) {
      state.token = newKey;
    },
    updateAuth(state, status) {
      state.isAuth = status;
    }
  }
});
