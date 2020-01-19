<template>
  <div class="col" :class="[`col-${span}`, offset && `offset-${offset}`]">
    <div style="border: 1px solid #333333;height: 100%">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GuluCol',
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    }
  }
</script>
<style scoped lang="scss">
  .col {
    height: 100px;
    background: grey;
    border: 1px solid red;
    padding: 0 10px;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>