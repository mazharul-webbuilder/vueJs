<template>
  <greeting :age="age"></greeting>
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
