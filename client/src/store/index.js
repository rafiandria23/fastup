import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quotes: null
  },
  mutations: {
    saveQuotes(state, payload) {
      state.quotes = payload;
    }
  },
  actions: {},
  modules: {}
});
