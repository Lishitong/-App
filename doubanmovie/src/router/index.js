import Vue from 'vue'
import Router from 'vue-router'

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

import HotPlay from '../pages/HotPlay'
import FindMovie from '../pages/FindMovie'
import Mine from '../pages/Mine'

// 正在热映
import Nowing from '../pages/nowing'
import Loading from '../pages/loading'
// 正在热映详情
import movxiangqing from '../components/movxiangqing'

Vue.use(VueAwesomeSwiper)

Vue.use(Router)

const routes = [
    { path: '/', component: HotPlay ,children:[
      {path:'/',component:Nowing},
      {path:'/HotPlay',component:Nowing},
      {path:'/HotPlay/nowing',component:Nowing},
      {path:'/HotPlay/loading',component:Loading}
    ]},
    { path: '/HotPlay', component: HotPlay ,children:[
      {path:'/',component:Nowing},
      {path:'/HotPlay/nowing',component:Nowing},
      {path:'/HotPlay/loading',component:Loading}
    ]},
    { path: '/FindMovie', component: FindMovie },
    { path: '/Mine', component: Mine },
    { path: '/movxiangqing:id', component:movxiangqing}
]

const router = new Router({
    routes
})

export default router
