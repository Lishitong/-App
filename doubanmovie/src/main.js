import Vue from 'vue'
import App from './App'
// 引入jsonp模块
import JSONP from 'jsonp'
// 引入axios模块
import axios from 'axios'
// 引入懒加载模块
// 图片懒加载  在终端 npm install vue-lazyload --save
// 使用方法：把图片的src属性改为v-lazy即可
// 有很多配置参数，在网上可以搜到
import VueLazyload from 'vue-lazyload'
import router from './router'
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import store from './vuexx'

// databus
window.databus = new Vue()

//安装
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)
Vue.use(VueLazyload, {
    preload: 1,
    try: 2 // 这个是加载图片数量
})
Vue.config.productionTip = true

// 把两个方法放入原型
Vue.prototype.JSONP = JSONP
Vue.prototype.axios = axios
    /* eslint-disable no-new */
const vm = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
