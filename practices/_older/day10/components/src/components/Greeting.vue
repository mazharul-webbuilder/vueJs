<template>
  <p v-if="age > 25">{{age}}</p>
  <p v-else>You must 25 or older to view this</p>
  <button type="button" @click="updateAge">Dec age</button>
</template>

<script>
export default {
  name: "GreetingComponent",
  props: {
    age:{
      type: Number
    }
  },
  emits: ['age-change'],
  methods: {
    updateAge(){
      this.$emit('age-change', 2)
    }
  }
}
</script>