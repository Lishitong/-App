// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
// 引入jsonp模块
import JSONP from 'jsonp'
// 引入axios模块
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false
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
