<template>
    <svg class="g-icon">
      <use :xlink:href="`#ldy-${name}`"></use>
    </svg>
</template>

<script>
  export default {
    name: 'ldy_icon',
    props: {
      name: {
        type: String,
        default: '',
      },
    }
  };
</script>

<style scoped lang="scss">
  .g-icon {
    width: 1em;
    height: 1em;
  }
</style>

