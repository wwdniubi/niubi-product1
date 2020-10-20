<template>
  <div id="app">
    <Product></Product>
    <hr />
    <Cart></Cart>
  </div>
</template>
<script>
import Cart from "./components/Cart";
import Product from "./components/Product";

export default {
  components: {
    Cart,
    Product
  }
};
</script>