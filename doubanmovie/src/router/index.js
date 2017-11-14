import Vue from 'vue'
import Router from 'vue-router'

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

import HotPlay from '../pages/HotPlay'
import FindMovie from '../pages/FindMovie'
import Mine from '../pages/Mine'
import Nowing from '../pages/nowing'
import Loading from '../pages/loading'
// 正在热映详情
import movxiangqing from '../components/movxiangqing'
import ping from '../components/ping'
import lun from '../components/lun'
import ying from '../components/ying'
import pingpage from '../components/pingpage'
import wantSee from '../pages/wantSee'
import nowSee from '../pages/nowSee'
import sew from '../pages/sew'
import seeSpeak from '../pages/seeSpeak'
import movieMen from '../pages/movieMen'
import shezhi from '../pages/shezhi'
import login from '../pages/login'
import zhuantiremen from '../pages/zhuantiremen'
import suggest from '../pages/suggest'
import howSee from '../pages/howSee'

import why from '../pages/why'
import howWatch from '../pages/howWatch'
import feedBack from '../pages/feedBack'
import aboutdb from '../pages/aboutdb'
import whyOpendb from '../pages/whyOpendb'

import Search from '../pages/Search'
import LocalCity from '../pages/LocalCity'
import Citys from '../components/Citys'

Vue.use(VueAwesomeSwiper)
Vue.use(Router)
const routes = [


    {
        path: '/',
        component: HotPlay,
        children: [
            { path: '/', component: Nowing },
            { path: '/HotPlay', component: Nowing },
            { path: '/HotPlay/nowing', component: Nowing },
            { path: '/HotPlay/loading', component: Loading }
        ]
    },
    { path: '/Search', component: Search },
    {
        path: '/HotPlay',
        component: HotPlay,
        children: [
            { path: '/', component: Nowing },
            { path: '/HotPlay/nowing', component: Nowing },
            { path: '/HotPlay/loading', component: Loading }
        ]
    },
    { path: '/FindMovie', component: FindMovie },
    { path: '/Mine', component: Mine },

    {
        path: '/movxiangqing/:id',
        component: movxiangqing,
        children: [
            { path: '/movxiangqing/:id', component: ping },
            { path: '/movxiangqing/ping/:id', component: ping },
            { path: '/movxiangqing/lun/:id', component: lun }
        ]
    },
    { path: '/pingpage/:id', component: pingpage },
        {path:'/ying/:id',component:ying},
    {
        path: '/Mine',
        component: Mine,
        children: [
            { path: '/', component: wantSee },
            { path: '/Mine/wantSee', component: wantSee },
            { path: '/Mine/nowSee', component: nowSee },
            { path: '/Mine/sew', component: sew },
            { path: '/Mine/seeSpeak', component: seeSpeak },
            { path: '/Mine/movieMen', component: movieMen }
        ]
    },
    { path: '/Local', component: LocalCity },
    {
        path: '/Citys/:id',
        component: Citys,
        children: [
            { path: '/Citys/index', redirect: '/HotPlay' }
        ]
    },
    { path: '/shezhi', component: shezhi },
    { path: '/login', component: login },
    { path: '/zhuantiremen', component: zhuantiremen },
    { path: '/suggest', component: suggest },
    { path: '/howSee', component: howSee },




  {path:'/why',component:why},
  {path:'/howWatch',component:howWatch},
  {path:'/feedBack',component:feedBack},
  {path:'/aboutdb',component:aboutdb},
  {path:'/whyOpendb',component:whyOpendb},

]

const router = new Router({
    routes
})

export default router
