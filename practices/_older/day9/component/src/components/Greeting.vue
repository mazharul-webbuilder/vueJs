<template>
  <p>{{msg}}</p>
  <p v-if="age >= 25">{{age}}</p>
  <p v-else>You must 25 or older to view this</p>
  <button @click.prevent="ageDecrementFn">Decrement Age</button>
</template>
<script>
export default {
  name: 'GreetingComponent',
  data(){
    return {
      msg: 'Welcome to Vue World'
    }
  },
  props: {
    age:{
      type: Number,
      required: true,
      default: 20
    },
    ageDecrementFn: Function
  }
}
</script>

<style scoped>
p{
  color: #a13eda;
}
</style>