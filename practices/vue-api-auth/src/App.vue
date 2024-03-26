<template>
  <div class="bg-gray-200 h-screen">
    <navigation></navigation>

    <main class="mt-20 bg-white max-w-lg w-full mx-auto rounded shadow p-6">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  name: "App",
  components: {
    Navigation
  }
}
</script>