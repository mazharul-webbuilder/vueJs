<template>
  <h2>I am from Cart Component</h2>
  <button type="button" >{{product}}</button>
  <button type="button" >Double: {{doubleOfProduct}}</button>
  <div class="">
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import {mapState, mapActions} from "pinia";
import {useCartStore} from "@/stores/CartStore.js";

export default {
  name: "CartComponent",
  computed: {
    ...mapState(useCartStore,{
      product: "product",
      doubleOfProduct: "doubleOfProduct"
    }),
  },
  methods: {
    ...mapActions(useCartStore,{
      increment: 'increment',
      decrement: 'decrement'
    })
  }

}
</script>


<style scoped>
button{
  color: orange;
  padding: 10px 25px;
  font-weight: bolder;
  font-size: 25px;
  border-radius: 10px;
}
</style>