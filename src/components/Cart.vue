<template>
  <div>
    <h1>购物车</h1>
    <ul>
      <li v-for="item in cart" :key="item.id">
        <span>商品：{{item.title}}</span>
        ----
        <span>价格：{{item.price}}美元</span>
        ----
        <span>数量：{{item.count}}</span>
      </li>
    </ul>
    <h1>总价：{{totalPrice.toFixed(2)}}美刀</h1>
  </div>
</template>
<script>
import {mapState,mapGetters} from "vuex"
export default {
  computed: {
    ...mapState("cart",['cart']),
    ...mapGetters("cart",['totalPrice'])
  }
}
</script>