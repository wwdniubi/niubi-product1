<template>
  <div>
    <h1>商品</h1>
    <ul>
      <li v-for="item in product" :key="item.id">
        <span>商品：{{item.title}}</span>
        <span>价格：{{item.price}}美元</span>
        <span>剩余数量：{{item.inventory}}</span>
        <button @click="ADD_TO_CART(item)">添加</button>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapActions,mapMutations,mapState} from "vuex"
export default {
  computed: {
    ...mapState('product',['product'])
  },
  methods:{
    ...mapActions("product",['GET_PRODUCT']),
    ...mapMutations('cart',['ADD_TO_CART'])
  },
  created() {
    this.GET_PRODUCT()
  }
}
</script>
<style>
li {
  display: flex;
  justify-content: space-between;
  list-style: none;
  background-color: hotpink;
  border: 1px solid #000;
  height: 50px;
  line-height: 50px;
}
button {
  background-color: rgb(61, 235, 38);
  width: 80px;
  border: 1px solid #000;
  border-radius: 10px;
}
span {
  display: block;
  width: 200px;

}
</style>