<template>
    <svg class="ldy-icon">
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
  .ldy-icon {
    width: 1em;
    height: 1em;
  }
</style>

