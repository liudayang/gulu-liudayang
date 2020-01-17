import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';

Vue.component('ldy-button',Button)
Vue.component('ldy-icon',Icon)
Vue.component('ldy-button-group',ButtonGroup)

new Vue({
  el: '#app',
  data:{
    loading1: false,
    loading2: true,
    loading3: false
  }
});