<template>
  <h1>{{message}}</h1>
</template>

<script>
export default {
  name: "Greeting-component",
  data(){
    return{
      message: "Hello From single component"
    }
  }
}
</script>

<style scoped>
  h1{
    color: #15b298;
  }
</style>