import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

//css
import './assets/css/normalize.css'
//引入字体
import './assets/font/iconfont.css'
//js(解决移动端延迟300s)
import FastClick from 'fastclick'
FastClick.attach(document.body)
//vant插件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

//swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
//vuex
import store from './store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
