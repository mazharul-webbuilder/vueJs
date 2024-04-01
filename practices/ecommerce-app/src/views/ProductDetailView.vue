<template>
  <!-- Categories -->
  <section class="py-5">
    <div class="container">
      <div class="">
        <button @click="goBack" class="btn btn-outline-dark mb-3 px-3">Back</button>
      </div>
      <div class="row">
        <!-- Product Image -->
        <div class="col-md-6">
          <img :src="product.image" class="img-fluid" alt="Product Image">
        </div>

        <!-- Product Details -->
        <div class="col-md-6">
          <h2>Name: {{product.name}}</h2>
          <p><strong>Category: </strong>{{ getCategoryName }}</p>
          <p><strong>Short Description:</strong> {{product.short_description}}</p>
          <p><strong>Full Description:</strong> {{product.long_description}}</p>
          <p><strong>Price:</strong> ${{product.price}}</p>
          <!-- Add to Cart Button -->
          <div class="flex justify-content-between">
            <input type="number" class="form-control w-50" v-model="model.product.qty" min="1" value="1" step="1">
            <button class="btn btn-success mt-2" @click.prevent="addToCartButtonClicked">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "@/axios.js";
import {mapActions} from "pinia";
import {useCartStore} from "@/stores/CartStore.js";

export default {
  name: "ProductDetailView",
  data(){
    return{
      product: '',
      model: {
        product:{
          product_id: '',
          qty: 1
        }
      }
    }
  },
  computed: {
    getCategoryName(){
      if (this.product.category) {
        return this.product.category.name
      }
    }
  },
  mounted() {
    this.getProduct(this.$route.params.slug)
  },
  methods:{
    ...mapActions(useCartStore, {
      addToCart: "addToCart"
    }),
    getProduct(slug){
      axios.get(`product/${slug}`).then(res => {
        this.product = res.data
        this.model.product.product_id = res.data.id
      })
    },
    goBack() {
      window.history.back();
    },
    addToCartButtonClicked(){
      this.addToCart(this.model.product)
    }
  }
}
</script>