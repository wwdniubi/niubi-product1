import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations"
import state from "./state"
import actions from "./actions"
import getters from "./getters"

import cart from "./modules/cart"
import product from "./modules/product"

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
  modules: {
    cart,
    product
  }
});