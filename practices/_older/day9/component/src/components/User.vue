<template>
  <p>You are {{age}} years old</p>
  <button @click.prevent="updateAge">Increment Age</button>
</template>

<script>
export default {
  name: 'UserComponent',
  props: {
    age: Number
  },
  emits: ['age-change'],
  methods:{
    updateAge(){
      this.$emit('age-change', 2)
    }
  }
}
</script>

<style scoped>
p{
  color: brown;
}
</style>