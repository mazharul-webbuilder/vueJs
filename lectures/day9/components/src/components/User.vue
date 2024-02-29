<template>
  <p>You are {{age}} years old</p>
</template>

<script>
export default {
  name: 'UserComponent',
  props: ['age']
}
</script>


<style scoped lang="scss">
$color: yellow;
p{
  color: $color;
}
</style>
