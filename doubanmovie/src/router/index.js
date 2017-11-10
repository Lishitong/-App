import Vue from 'vue'
import Router from 'vue-router'

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'


// 正在热映
import now from '../pages/now'
import Nowing from '../pages/nowing'
import Loading from '../pages/loading'

Vue.use(Router)

Vue.use(VueAwesomeSwiper)

export default new Router({
  routes: [
    {path:'/',component:now},
    {path:'/now',component:now,children:[
      {path:'/',component:Nowing},
      {path:'/now/nowing',component:Nowing},
      {path:'/now/loading',component:Loading}
    ]}
  ]
})
