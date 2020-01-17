<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ldy_button_group',
    props: {
      icon: {
        type: String,
        default: '',
      }
    }
  };
</script>

<style scoped lang="scss">

</style>

