<template>
  <div class="col-md-3 mb-4" v-for="product in products" :key="product.id">
    <div class="card">
      <img :src="product.image" class="card-img-top" alt="Basic Product" height="250" width="300">
      <div class="card-body">
        <h5 class="card-title text-truncate">{{ product.name }}</h5>
        <p class="card-text text-truncate">{{ paddedShortDescription(product.short_description) }}</p>
        <div class="btn-group d-flex" role="group">
          <!-- Details Button -->
          <router-link type="button" class="btn btn-outline-dark" :to="{name: 'product.details', params: {slug: product.slug}}">Details</router-link>
          <!-- Add to Cart Button -->
          <button type="button" class="btn btn-outline-dark" @click.prevent="addToCartButtonClicked(product.id)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useCartStore} from "@/stores/CartStore.js";
import {mapActions} from "pinia";

export default {
  name: "AppProduct",
  props: ["products"],
  methods: {
    ...mapActions(useCartStore, {
      addToCart: "addToCart"
    }),
    addToCartButtonClicked(productId){
      this.addToCart({
        product_id: productId,
        qty: 1

      })
    },
    paddedShortDescription(shortDescription) {
      const desiredLength = 50; // Adjust as needed
      if (shortDescription.length <= desiredLength) {
        return shortDescription;
      } else {
        return shortDescription.substring(0, desiredLength) + '...'; // Add ellipsis if truncated
      }
    }
  }
};
</script>

<style scoped>
.card-title,
.card-text {
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide any overflowing text */
  
  text-overflow: ellipsis; /* Add ellipsis to indicate truncation */
}
</style>
