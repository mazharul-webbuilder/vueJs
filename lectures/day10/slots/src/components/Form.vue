<template>
  <form>
    <div class="help">
      <slot name="help"></slot>
    </div>
    <div class="fields">
      <slot name="fields"></slot>
    </div>
    <div class="buttons"></div>

  </form>
</template>
<script>
  export default {
    name: 'FormComponent'
  }
</script>