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
                <a class="nav-link active" aria-current="page" href="#">Home</a>
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
                  <li><router-link v-for="category in categories" :key="category.id" :to="{name: 'category.product', params: {slug: category.slug}}" class="dropdown-item" href="#">
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
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="cartDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fas fa-shopping-cart text-dark"></i> Cart
                  <span class="badge rounded-circle bg-dark">3</span>
                </a>

                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="cartDropdown">
                  <!-- Cart items -->
                  <div class="dropdown-header">Shopping Cart</div>
                  <!-- Example Cart Item -->
                  <div class="dropdown-item">
                    <img src="https://e7.pngegg.com/pngimages/646/822/png-clipart-quality-label-warranty-trademark-warranty-emblem-text.png" class="img-fluid" alt="Product Image">
                    <div class="cart-item-details">
                      <h6 class="card-subtitle mb-2 text-muted">Product Name</h6>
                      <p class="card-text">Quantity: 1</p>
                      <p class="card-text">Price: $XX.XX</p>
                    </div>
                  </div>
                  <!-- Add more cart items here -->
                  <!-- End Cart items -->
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">View Cart</a>
                </div>
              </li>
              <!-- End Shopping Cart Dropdown -->
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import axios from "@/axios.js";
export default {
  name: "Header",
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
