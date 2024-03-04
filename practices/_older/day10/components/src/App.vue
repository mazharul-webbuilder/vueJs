<template>
<greeting :age="age" @age-change="ageDec"></greeting>
<user :age="age" @age-change="age++"></user>
</template>

<script>
import Greeting from "@/components/Greeting.vue";
import User from "@/components/User.vue";
export default {
  name: 'App',
  components: {
    Greeting, User
  },
  data(){
    return {
      age: 20
    }
  },
  methods: {
    ageDec(value){
      this.age -= value
    }
  }
}
</script>