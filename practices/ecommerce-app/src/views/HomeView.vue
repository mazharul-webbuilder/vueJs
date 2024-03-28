<template>
  <div>
    <!-- Section One: Basic Products -->
    <section class="py-3">
      <div class="container">
        <h4 class="pb-2">Basic Products</h4>
        <!-- Your basic product content goes here -->
        <div class="row">
          <!-- Example basic product card -->
          <AppProduct :products="basicProduct"></AppProduct>
          <!-- Add more basic product cards here if needed -->
        </div>
      </div>
    </section>

    <!-- Section Two: Trending Products -->
    <section class="py-3">
      <div class="container">
        <h4 class="pb-2">Trending Products</h4>
        <!-- Your trending product content goes here -->
        <div class="row">
          <!-- Example trending product card -->
          <AppProduct :products="trendingProduct"></AppProduct>
          <!-- Add more trending product cards here if needed -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppProduct from "@/components/product/Product.vue"
import axios from "@/axios.js";
export default {
  name: "HomeView",
  data(){
    return{
      trendingProduct: '',
      basicProduct: ''
    }
  },
  components: {
    AppProduct
  },
  mounted() {
    this.getProduct()
  },
  methods: {
    getProduct(){
      axios.get('get-products?filter=basic').then(res => {
        this.trendingProduct = res.data
      })
      axios.get('get-products?filter=trending').then(res => {
        this.basicProduct = res.data
      })
    }
  }
}
</script>
