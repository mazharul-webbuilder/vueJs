<template>
  <section class="destination">
      <!--    <h2>Hello Destination {{ $route.params.id}}</h2>-->
      <h1>{{destination.name}}</h1>
      <div class="destination-details">
        <img :src="`/images/${destination.image}`">
        <p>{{destination.description}}</p>
      </div>
  </section>
</template>

<script>
import sourceData from '@/data.json'
export default {
  name: "DestinationShow",
  data(){
    return{
      destinations: sourceData.destinations
    }
  },
  computed: {
    destinationId(){
      return parseInt(this.$route.params.id)
    },
    destination(){
      return this.destinations.find(destination => this.destinationId === destination.id)
    }
  }
}
</script>