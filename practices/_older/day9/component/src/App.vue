<template>
  <h3>Hey!</h3>
  <greeting :age="age" :ageDecrementFn="decrementAge"></greeting>
  <user :age="age" @age-change="updateAge"></user>
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
  },
  methods:{
    updateAge(value){
      this.age += value
    },
    decrementAge(){
      this.age--
    }
  }
}
</script>

<style>
  body{
    background: black;
    color: yellow;
  }
</style>