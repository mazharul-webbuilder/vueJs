<template>
  <app-form>
    <template v-slot:help>
      <p>{{ help }}</p>
    </template>
    <template v-slot:fields>
      <input type="text">
      <input type="email">
      <input type="text">
    </template>
    <template v-slot:buttons>
      <button>First form button</button>
    </template>
    <p>This is default text</p>
  </app-form>
<!-- Second form -->
  <app-form>
    <template v-slot:help>
      <p>Contact Form Help center</p>
    </template>
    <template v-slot:fields>
      <input type="email" placeholder="email">
      <input type="text" placeholder="message">
    </template>
  </app-form>
</template>

<script>
import AppForm from "@/components/Form.vue";
export default {
  name: 'App',
  components: { AppForm },
  data(){
    return {
      help: "This is some help text."
    }
  }
}
</script>

<style>

</style>

