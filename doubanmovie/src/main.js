import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import route from './router/index'

//安装
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  route
})
