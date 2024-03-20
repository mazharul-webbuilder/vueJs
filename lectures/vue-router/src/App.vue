<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: destination.show, params: {id: destination.id, slug: destination.slug}}"
    >{{destination.name}}</router-link>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  name: "App",
  data(){
    return{
      destinations: sourceData.destinations
    }
  }
}
</script>