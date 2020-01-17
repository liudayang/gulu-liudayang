<template>
  <div class="ldy-button-group">
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
    },
    mounted() {
      for (const node of this.$el.children) {
        const name=node.nodeName.toLocaleLowerCase()
        if(name!=='button'){
          console.warn(`请传入ldy-button 组件而不是${name}`);
        }
      }
    }
  };
</script>

<style scoped lang="scss">
.ldy-button-group{
  display: inline-flex;
  vertical-align: middle;

  > .ldy-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
      /*border: 1px solid #000;*/
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>

