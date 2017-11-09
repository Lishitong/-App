// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
<<<<<<< HEAD
// import router from './router'
// 引入jsonp模块
import JSONP from 'jsonp'
// 引入axios模块
import axios from 'axios'
=======
import router from './router'
import jsonp from 'jsonp'
>>>>>>> b6257552898b830fff05c2e3a52ee9d3a395049e

Vue.prototype.jsonp = jsonp
Vue.config.productionTip = false
// 把两个方法放入原型
Vue.prototype.JSONP = JSONP
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
<<<<<<< HEAD
  el: '#app',
  // router,
  template: '<App/>',
  components: { App }
})
=======
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
>>>>>>> b6257552898b830fff05c2e3a52ee9d3a395049e
