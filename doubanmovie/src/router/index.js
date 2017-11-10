import Vue from 'vue'
import Router from 'vue-router'
import HotPlay from '../pages/HotPlay'
import FindMovie from '../pages/FindMovie'
import Mine from '../pages/Mine'
import wantSee from '../pages/wantSee'
import nowSee from '../pages/nowSee'
import sew from '../pages/sew'
import seeSpeak from'../pages/seeSpeak'
import movieMen from'../pages/movieMen'

Vue.use(Router)

const routes = [
    { path: '/', component: HotPlay },
    { path: '/HotPlay', component: HotPlay },
    { path: '/FindMovie', component: FindMovie },
    { path: '/Mine', component: Mine,
    children:[{path:'/',component:wantSee},
      {path:'/Mine/wantSee',component:wantSee},
    {path:'/Mine/nowSee',component:nowSee},
    {path:'/Mine/sew',component:sew},
    {path:'/Mine/seeSpeak',component:seeSpeak},
    {path:'/Mine/movieMen',component:movieMen}]
     }
]

const router = new Router({
    routes
})

export default router
