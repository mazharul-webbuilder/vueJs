<template>
  <app-navigation></app-navigation>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script>
import AppNavigation from "@/components/AppNavigation.vue";
export default {
  name: "App",
  components: {
    AppNavigation
  },
}
</script>