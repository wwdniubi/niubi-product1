import {shop} from "@/api"
export default {
  namespaced: true,
  state: {
    product:[]
  },
  mutations: {
    SET_PRODUCT(state,payload) {
      state.product = payload
    }
  },
  actions: {
    GET_PRODUCT({commit}) {
      shop()
          .then(res=>{
            // console.log(res);
           
            commit("SET_PRODUCT",res.data.data)
          })
    }
  },
  getters: {},

}