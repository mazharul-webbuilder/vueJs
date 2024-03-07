<template>
  <h2>Using Slot</h2>
  <master>
    <template v-slot:header>
      <p>This is header</p>
    </template>
    <template v-slot:footer>
      <p>This is footer</p>
    </template>
    <p>Content for defautl slot</p>
  </master>
</template>

<script>
import Master from "@/components/Master.vue";
export default {
  name: 'App',
  components: {
    Master
  }
}
</script>