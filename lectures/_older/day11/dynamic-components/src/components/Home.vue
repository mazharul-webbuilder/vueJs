<template>
  <h1>Home Page</h1>
</template>

<script>
export default {
  name: "HomeComponent",
  unmounted(){
    console.log('Home component was unmounted')
  },
  activated()
  {
    console.log('Home component active')
  },
  deactivated(){
    console.log('Home component deactivated')
  }
}
</script>