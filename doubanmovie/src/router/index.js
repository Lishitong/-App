import Vue from 'vue'
import Router from 'vue-router'

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

import HotPlay from '../pages/HotPlay'
import FindMovie from '../pages/FindMovie'
import Mine from '../pages/Mine'
import Nowing from '../pages/nowing'
import Loading from '../pages/loading'
import wantSee from '../pages/wantSee'
import nowSee from '../pages/nowSee'
import sew from '../pages/sew'
import seeSpeak from '../pages/seeSpeak'
import movieMen from '../pages/movieMen'
import LocalCity from '../pages/LocalCity'
import Citys from '../components/Citys'


Vue.use(VueAwesomeSwiper)
Vue.use(Router)

const routes = [{
        path: '/',
        component: HotPlay,
        children: [
            { path: '/', component: Nowing },
            { path: '/HotPlay', component: Nowing },
            { path: '/HotPlay/nowing', component: Nowing },
            { path: '/HotPlay/loading', component: Loading }
        ]
    },
    {
        path: '/HotPlay',
        component: HotPlay,
        children: [
            { path: '/', component: Nowing },
            { path: '/HotPlay/nowing', component: Nowing },
            { path: '/HotPlay/nowing', component: Nowing },
            { path: '/HotPlay/loading', component: Loading }
        ]
    },
    { path: '/FindMovie', component: FindMovie },
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

]

const router = new Router({
    routes
})

export default router