<template>
  <section class="bg-light">
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">LOGO</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blogs</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul class="dropdown-menu">
                  <li><router-link v-for="category in categories" :key="category.id"
                                   :to="{name: 'category.product', params: {slug: category.slug}}" class="dropdown-item">
                    {{ category.name }}</router-link></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Dashboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Register</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
              </li>
              <!-- Shopping Cart Dropdown -->
              <app-cart :countCart="numberOfProductInCart"></app-cart>
              <!-- End Shopping Cart Dropdown -->
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import AppCart from "@/components/cart/Cart.vue"
import axios from "@/axios.js";
import {useCartStore} from "@/stores/CartStore.js";
import {mapState} from "pinia";

export default {
  name: "Header",
  components: {
    AppCart
  },
  computed: {
    ...mapState(useCartStore, {
      numberOfProductInCart: "numberOfProductInCart"
    })
  },
  data(){
    return {
      categories: ''
    }
  },
  mounted() {
    this.getCategories()
  },
  methods:{
    getCategories(){
      axios.get('/categories').then(res => {
        this.categories = res.data
      })
    }
  }
}
</script>
