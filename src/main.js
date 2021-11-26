import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//css
import './assets/css/normalize.css'
//引入字体
import './assets/font/iconfont.css'
//js(解决移动端延迟300s)
import FastClick from 'fastclick'
FastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
