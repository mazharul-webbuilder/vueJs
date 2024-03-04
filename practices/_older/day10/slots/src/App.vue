<template>
  <app-form>
    <template v-slot:help>
      <p>This is help from first form</p>
    </template>
    <template v-slot:fields>
      <input type="text">
      <input type="text">
      <input type="text">
      <input type="text">
    </template>
    <template v-slot:buttons>
      <button>fucdk</button>
    </template>
  </app-form>
</template>

<script>
import AppForm from './components/Form.vue'
export default {
  name: 'App',
  components: {AppForm}

}
</script>

<style>
body{
  background: black;
  color: yellow;
}
</style>

