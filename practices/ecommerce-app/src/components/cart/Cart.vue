<template>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="cartDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="fas fa-shopping-cart text-dark"></i> Cart
      <span class="badge rounded-circle bg-dark">{{countCart}}</span>
    </a>

    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="cartDropdown">
      <!-- Cart items -->
      <div class="dropdown-header">Shopping Cart</div>
      <!-- Example Cart Item -->
      <div class="dropdown-item" v-for="(cart, index) in cartProducts" :key="index">
        <button @click="removeFromCart(cart.id)" class="btn btn-danger btn-sm">x</button>
        <img :src="cart.product.image" class="img-fluid" alt="Product Image" height="50" width="50">
        <div class="cart-item-details">
          <p class="card-text">Quantity: (1 x {{cart.qty}})</p>
          <p class="card-text">Price: ({{cart.product.price}} = {{cart.product.price * cart.qty}})</p>
        </div>
      </div>

      <!-- End Cart items -->
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">View Cart</a>
    </div>
  </li>
</template>
<script>
import axios from "@/axios.js";
import { mapState, mapActions } from "pinia";
import { useCartStore } from "@/stores/CartStore.js";

export default {
  name: "CartComponent",
  props: ['countCart'],
  computed: {
    ...mapState(useCartStore, {
      cartProducts: "cartProducts"
    })
  },
  mounted() {
    this.getCartProduct()
  },
  methods: {
    ...mapActions(useCartStore, {
      setCartProducts: "setCartProducts",
      setNumberOfProductInCart: "setNumberOfProductInCart"
    }),
    getCartProduct() {
      return axios.get('/get-cart-products').then((res) => {
        this.setCartProducts(res.data);
      });
    },
    removeFromCart(cartId) {
      axios.post(`/cart-remove/${cartId}`)
          .then((res) => {
            this.setCartProducts(res.data.products);
            this.setNumberOfProductInCart(res.data.countCart);
          })
    }
  }
}
</script>
