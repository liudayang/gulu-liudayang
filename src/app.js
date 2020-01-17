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
import chai from 'chai';
import spies from 'chai-spies';
const expect=chai.expect
chai.use(spies)

{
  // const Construtor=Vue.extend(Button)
  // const button=new Construtor({
  //   propsData:{
  //     icon:'settings',
  //     loading:true
  //   }
  // })
  // button.$mount('#test')
  // const useElement=button.$el.querySelector('use')
  // const href=useElement.getAttribute('xlink:href')
  // expect(href).to.eq('#ldy-settings')
// console.log(button.$el);
//   console.log(button);
}

{
  const Construtor=Vue.extend(Button)
  const vm=new Construtor({
    propsData:{
      icon:'settings',
      loading:true
    }
  })
  vm.$mount('#test')
  const svg=vm.$el.querySelector('svg')
  const {order}=window.getComputedStyle(svg)
  expect(order).to.eq('1')
  // console.log(order);
}

{
  const Construtor=Vue.extend(Button)
  const vm=new Construtor({
    propsData:{
      icon:'settings',
    }
  })
  vm.$mount()
  const spy=chai.spy(function () {})
  vm.$on('click',spy)
  const gButton=vm.$el;
  gButton.click()
  expect(spy).to.have.been.called()
}