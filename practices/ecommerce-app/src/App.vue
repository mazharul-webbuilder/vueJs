<template>
  <app-header></app-header>
  <div class="container">
    <router-view></router-view>
  </div>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from "@/components/layout/Header.vue";
import AppFooter from "@/components/layout/Footer.vue"
export default {
  name: "App",
  data(){
    return {

    }
  },
  components: {
    AppHeader,
    AppFooter
  }
}
</script>