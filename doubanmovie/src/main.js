import Vue from 'vue'
import App from './App'
// 引入jsonp模块
import JSONP from 'jsonp'
// 引入axios模块
import axios from 'axios'
import router from './router'
import VueResource from 'vue-resource'

//安装
Vue.use(VueResource)

Vue.config.productionTip = true

// 把两个方法放入原型
Vue.prototype.JSONP = JSONP
Vue.prototype.axios = axios

/* eslint-disable no-new */
const vm = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})