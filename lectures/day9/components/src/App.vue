<template>
  <greeting :age="age"></greeting>
  <button type="button" @click.prevent="age++">Update Age</button>
  <user :age="age"></user>
</template>

<script>
import Greeting from "@/components/Greeting.vue";
import User from "@/components/User.vue";
export default {
  name: 'App',
  components: {Greeting, User},
  data(){
    return{
      age: 20
    }
  }
}
</script>

<style>
body{
  background: black;
  color: white;
}
</style>
