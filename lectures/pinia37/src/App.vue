<template>
  <div>
    <h2>{{ userName }}</h2>
    <h2>{{ isUserLoggedInText }}</h2>
    <button style="color: red; background-color: whitesmoke; border: 1px solid white; padding: 10px; border-radius: 10px; float: right; display: block" type="button">{{product}}</button>
    <hr>
    <Cart></Cart>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useUserStore } from "@/stores/UserStore.js";
import {useCartStore} from "@/stores/CartStore.js";
import Cart from '@/components/Cart.vue'

export default {
  name: 'App',
  data() {
    return {
      isUserLoggedInText: ''
    };
  },
  components: {
    Cart
  },
  computed: {
    ...mapState(useUserStore, {
      userName: "userName",
      isLoggedIn: "isLoggedIn"
    }),
    ...mapState(useCartStore, {
      product: "product"
    })
  },
  methods: {
    ...mapActions(useUserStore,{
      setUserName: "setUserName"
    }),
    updateIsUserLoggedIn() {
      this.isUserLoggedInText = this.isLoggedIn ? 'User is logged in' : 'User is not logged in';
    }
  },
  created() {
    this.updateIsUserLoggedIn();
    this.setUserName("Mazharul")
  }
}
</script>
