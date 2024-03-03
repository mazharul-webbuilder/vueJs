<template>
  <p v-if="age > 25">{{age}}</p>
  <p v-else>You must 25 or older to view this</p>
</template>

<script>
export default {
  name: "GreetingComponent",
  props: {
    age:{
      type: Number
    }
  }
}
</script>