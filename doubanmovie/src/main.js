import Vue from 'vue'
import App from './App'
// 引入jsonp模块
import JSONP from 'jsonp'
// 引入axios模块
import axios from 'axios'
// 引入懒加载模块
import VueLazyload from 'vue-lazyload'
import router from './router'
import VueResource from 'vue-resource'

window.yubus = new Vue()
//安装
Vue.use(VueResource)
Vue.use(VueLazyload, {
  preload:1,
  try: 2 // 这个是加载图片数量
})
Vue.config.productionTip = true
// 把两个方法放入原型
Vue.prototype.JSONP = JSONP
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
