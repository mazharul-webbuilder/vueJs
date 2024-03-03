<template>
  <p v-if="age > 25">{{message}}</p>
  <p v-else>You must be 25 years or older to view the message</p>
</template>

<script>
export default {
  name: 'Greeting-component',
  props: ["age"],
  data(){
    return {
      message: 'Hello world'
    }
  }
}
</script>

<style scoped lang="scss">
$color: red;
p{
  color: $color;
}
</style>