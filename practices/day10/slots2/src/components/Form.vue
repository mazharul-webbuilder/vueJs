<template>
  <form action="">
    <div class="help">
      <slot name="help"></slot>
    </div>
    <div class="fields">
      <slot name="fields"></slot>
    </div>
    <div class="buttons">
      <slot name="buttons"></slot>
    </div>
    <p>this is from Form component</p>
  </form>
</template>

<script>
  export default {
    name: 'FormComponent'
  }
</script>