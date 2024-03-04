<template>
  <p>You are {{age}} years old</p>
  <button type="button" @click="updateAge">Inc Age</button>
</template>

<script>
export default {
  name: "UserComponent",
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