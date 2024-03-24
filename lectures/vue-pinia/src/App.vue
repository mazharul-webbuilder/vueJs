<template>
  <h1>Ecommerce Home page</h1>
  <button>{{productQuantity}}</button>
  <button>{{doubleOfProductQuantity}}</button>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

<script>
import {mapState, mapActions} from "pinia";
import {useCartStore} from "@/stores/CartStore.js";
export default {
  name: "App",
  computed: {
    ...mapState(useCartStore, {
      productQuantity: "productQuantity",
      doubleOfProductQuantity: "doubleOfProductQuantity"
    })
  },
  methods: {
    ...mapActions(useCartStore, {
      increment: "increment",
      decrement: "decrement",
    })
  }
}
</script>