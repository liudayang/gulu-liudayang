<template>
  <button class="ldy-button" @click="$emit('click')" :class="{[`icon-${iconPosition}`]:true}">
    <ldy-icon class="icon" v-if="icon && !loading" :name="icon"></ldy-icon>
    <ldy-icon class="loading icon" v-if="loading" name="loading"></ldy-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import ldyIcon from './icon';

  export default {
    name: 'ldy_button',
    components:{
      ldyIcon
    },
    mounted(){

    },
    props: {
      icon: {
        type: String,
        default: '',
      },
      loading: {
        type: Boolean,
        default: false,
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(v) {
          return !(v !== 'left' && v !== 'right');
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  @keyframes spin {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  .loading{
    animation: spin 1s infinite linear;
  }
  .ldy-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    > .content {
      order: 2;
    }

    > .icon {
      order: 1;
      margin-right: .3em;
    }

    &.icon-right {
      > .content {
        order: 1;
      }

      > .icon {
        order: 2;
        margin-left: .3em;
        margin-right: 0;
      }
    }

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }
  }


</style>

