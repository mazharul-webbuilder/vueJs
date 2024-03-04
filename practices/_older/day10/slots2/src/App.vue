<template>
  <app-form>
    <template v-slot:help>
      <p>{{ help }}</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="enter name">
      <br>
      <br>
      <input type="email" placeholder="Enter email">
      <br>
      <br>
    </template>
    <template v-slot:buttons>
      <button>My buttons</button>
    </template>
  </app-form>

  <app-form>
    <template v-slot:help>
      <p>This is another help</p>
    </template>
    <template v-slot:fields>
      <input type="text"> <br><br>
      <input type="text">
      <br>
      <br>
    </template>

    <template v-slot:buttons>
      <button>Second button</button>
    </template>
  </app-form>
</template>

<script>
import AppForm from './components/Form.vue'
  export default {
    name: 'App',
    components: {AppForm},
    data(){
      return{
        help: "This is helped data from Parent components"
      }
    }
  }
</script>
