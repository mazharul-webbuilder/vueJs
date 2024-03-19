<template>
  <ul>Products
    <li v-for="(product, index) in products" :key="index">
      {{product.title}}
    </li>
  </ul>

</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data(){
    return {
      products: []
    }
  },
  async mounted() {
    await axios.get('https://dummyjson.com/products').then(res =>{
      this.products = res.data.products
    })
  }
}
</script>