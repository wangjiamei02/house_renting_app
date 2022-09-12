import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入注册全局的Vant组件
import './vant/vant'
//引入桌面端适配
//Vant 是一个面向移动端的组件库，因此默认只适配了移动端设备，
//这意味着组件只监听了移动端的 touch 事件，没有监听桌面端的 mouse 事件。
//如果你需要在桌面端使用 Vant，可以引入我们提供的 @vant/touch-emulator，
//这个库在桌面端自动将 mouse(鼠标) 事件转换成对应的 touch(触摸) 事件，使得组件能够在桌面端使用。
import '@vant/touch-emulator'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
