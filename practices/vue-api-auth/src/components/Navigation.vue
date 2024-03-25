<template>
  <header class="bg-white h-16 flex items-center border-b-2 border-gray-300 shadow">
    <nav class="container mx-auto flex items-center justify-between text-lg">
      <router-link to="/" class="flex items-center font-medium text-gray-900">
        <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <!-- Locker body -->
          <rect x="6" y="9" width="12" height="12" fill="#999999"/>
          <!-- Locker door -->
          <path stroke-linecap="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0V3.75"/>
          <!-- Locker handle -->
          <circle cx="18" cy="12" r="1.5" fill="#333333"/>
        </svg>
        Laravel Vue Api Authentication
      </router-link>
      <div class="flex items-center justify-center space-x-6 text-gray-600">
        <router-link to="/" class="hover:text-gray-900">Home</router-link>
        <template v-if="isAuthenticated">
          <router-link  to="/dashboard" class="hover:text-gray-900"> Dashboard</router-link>
          <router-link  to="/dashboard" class="hover:text-gray-900">Logout</router-link>
        </template>
        <template v-else>
          <router-link to="/login" class="hover:text-gray-900">Login</router-link>
          <router-link  to="/register" class="hover:text-gray-900">Register</router-link>
        </template>
      </div>
    </nav>
  </header>
</template>

<script>
import {useAuthStore} from "@/stores/AuthStore.js";
import {mapState} from "pinia";

export default {
  name: "NavigationComponent",
  computed: {
    ...mapState(useAuthStore, {
      isAuthenticated: "authenticate"
    })
  }
}
</script>