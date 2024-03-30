<template>
  <!-- Categories -->
  <section class="py-3">
    <div class="container">
      <h4 class="pb-2">{{(this.$route.params.slug).toLocaleUpperCase()}}</h4>
      <!-- Your basic product content goes here -->
      <div class="row">
        <!-- Example basic product card -->
        <AppProduct :products="categoryProducts"></AppProduct>
        <!-- Add more basic product cards here if needed -->
      </div>
    </div>
  </section>
</template>

<script>
import AppProduct from "@/components/product/Product.vue";
import axios from "@/axios.js";

export default {
  name: "CategoryProductView",
  data() {
    return {
      categoryProducts: ''
    }
  },
  components: {
    AppProduct
  },
  watch: {
    '$route.params.slug': function(newSlug, oldSlug) {
      // Fetch category products when slug changes
      this.fetchCategoryProducts(newSlug);
    }
  },
  mounted() {
    // Initial data fetch when component is mounted
    this.fetchCategoryProducts(this.$route.params.slug);
  },
  methods: {
    fetchCategoryProducts(slug) {
      axios.get(`/category-products/${slug}`).then(res => {
        this.categoryProducts = res.data;
      }).catch(error => {
        console.error('Error fetching category products:', error);
      });
    }
  }
}
</script>
