<template>
 <section class="destination">
   <div class="">
     <!--    <h2>Hello Destination {{ $route.params.id}}</h2>-->
     <h1>{{destination.name}}</h1>
     <div class="destination-details">
       <img :src="`/images/${destination.image}`">
       <p>{{destination.description}}</p>
     </div>
   </div>
 </section>
</template>

<script>
import sourceData from '@/data.json'
  export default {
    name: "DestinationShow",
    computed: {
      destinationId(){
        return parseInt(this.$route.params.id)
      },
      destination(){
        return sourceData.destinations.find(destination => destination.id === this.destinationId)
      }
    },
  }
</script>