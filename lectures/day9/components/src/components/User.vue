<template>
  <p>You are {{age}} years old</p>
  <button type="button" @click="ageUpdate">Update Age</button>
  <p>Double of your age {{ ageDoubled }}</p>
</template>

<script>
export default {
  name: 'UserComponent',
  props: ['age'],
  emits: ['age-change'],
  methods: {
    ageUpdate(){
      this.$emit('age-change', 2)
    }
  },
  computed:{
    ageDoubled(){
      return this.age * 2
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
