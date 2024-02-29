<template>
  <h1>Hey</h1>
  <p>{{msg}}</p>
  <p v-if="age >= 25">{{age}}</p>
  <p v-else>You must 25 or older to view this.</p>
</template>
<script>
export default {
  name: 'Greeting-component',
  props: ['age'],
  data(){
    return {
      msg: 'Hello world!'
    }
  }
}
</script>
