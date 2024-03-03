<template>
  <app-form>
    <template v-slot:help>
      <p>This is from help</p>
    </template>
    <template v-slot:fields>
      <input type="text">
      <input type="text">
      <input type="text">
      <input type="text">
    </template>
    <template v-slot:buttons>
      <button>Help button</button>
    </template>
  </app-form>
</template>

<script>
import AppForm from './components/Form.vue'
export default {
  name: 'App',
  components: {
      AppForm
  }
}
</script>

