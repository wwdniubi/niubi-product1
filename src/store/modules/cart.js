export default {
  namespaced: true,
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, payload) {//点击加入购物车，购物车组件进行判断，如果有该商品，那就数量加一，没有就渲染该商品，同时让product里面的剩余数量减一
      // console.log(payload);  
      if( payload.inventory ===1 ){
        alert("最后一件，手慢无")
      }else{
        payload.inventory--;
      };
      
      let result = state.cart.find(item =>
        item.id === payload.id)
      if (result) {
        //存在数量加1
        result.count++
      } else {
        let cartObj = {
          id: payload.id,
          title: payload.title,
          price: payload.price,
          count: 1
        }
        state.cart.push(cartObj)
  }

}
  },
actions: { },
getters: {
  totalPrice(state){
    return state.cart.reduce(function(total,item){
      return total += item.price*item.count
    },0)
  }
},

}