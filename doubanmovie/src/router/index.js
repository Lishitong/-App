import Vue from 'vue'
import Router from 'vue-router'
import HotPlay from '../pages/HotPlay'
import FindMovie from '../pages/FindMovie'
import Mine from '../pages/Mine'


Vue.use(Router)

const routes = [
    { path: '/', component: HotPlay },
    { path: '/HotPlay', component: HotPlay },
    { path: '/FindMovie', component: FindMovie },
    { path: '/Mine', component: Mine },
]

const router = new Router({
    routes
})

export default router