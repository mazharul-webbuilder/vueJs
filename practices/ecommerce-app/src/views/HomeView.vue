<template>
  <div>
    <!-- Section One: Basic Products -->
    <section class="py-3">
      <div class="container">
        <h4 class="pb-2">Basic Products</h4>
        <!-- Your basic product content goes here -->
        <div class="row">
          <!-- Example basic product card -->
          <AppProduct></AppProduct>
          <AppProduct></AppProduct>
          <AppProduct></AppProduct>
          <AppProduct></AppProduct>
          <AppProduct></AppProduct>
          <AppProduct></AppProduct>
          <AppProduct></AppProduct>
          <AppProduct></AppProduct>
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
          <AppProduct></AppProduct>
          <AppProduct></AppProduct>
          <AppProduct></AppProduct>
          <AppProduct></AppProduct>
          <AppProduct></AppProduct>
          <AppProduct></AppProduct>
          <AppProduct></AppProduct>
          <AppProduct></AppProduct>
          <!-- Add more trending product cards here if needed -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppProduct from "@/components/product/Product.vue"
export default {
  name: "HomeView",
  components: {
    AppProduct
  }
}
</script>
