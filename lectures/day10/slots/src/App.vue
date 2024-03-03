<template>
  <app-form>
    <div class="help">
      <p>This is some help</p>
    </div>
    <div class="fields">
      <input type="text" placeholder="email">
      <input type="text" placeholder="username">
      <input type="password" placeholder="password">
    </div>
    <div class="buttons">
      <button type="submit">Submit</button>
    </div>
  </app-form>
  <app-form>
    <div class="help">
      <p>This is some help</p>
    </div>
    <div class="fields">
      <input type="text" placeholder="name">
      <input type="text" placeholder="message">
    </div>
    <div class="buttons">
      <button type="submit">Submit</button>
    </div>
  </app-form>
</template>

<script>
import AppForm from "@/components/Form.vue";
export default {
  name: 'App',
  components: { AppForm }
}
</script>

<style>
body{
  background: black;
  color: yellow;
}
</style>

