<template>
  <form action="">
    <div class="help">
      <slot name="help"></slot>
    </div>
    <div class="field">
      <slot name="fields"></slot>
    </div>
    <div class="buttons">
      <slot name="buttons"></slot>
    </div>
    <h2>This are the defatult data</h2>
  </form>
</template>
<script>
export default {
  name: 'FormComponent',
}
</script>