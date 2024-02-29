<template>
  <p>You are {{age}} years old</p>
  <button type="button" @click="ageUpdate">Update Age</button>
</template>

<script>
export default {
  name: 'UserComponent',
  props: ['age'],
  methods: {
    ageUpdate(){
      this.$emit('age-change')
    }
  }
}
</script>


<style scoped lang="scss">
$color: yellow;
p{
  color: $color;
}
</style>
