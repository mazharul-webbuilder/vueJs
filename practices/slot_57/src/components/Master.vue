<template>
  <div class="header">
    <slot name="header"></slot>
  </div>
  <slot>This is defalut slot value</slot>
  <p>I am from own compoent</p>
  <div class="footer">
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'MasterComponent'
}
</script>