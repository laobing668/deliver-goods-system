import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import( '@/views/login.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/layout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = store.state.token || localStorage.getItem('gsuToken')
  if(!token){
    if(to.path === '/login'){
      next()
    }else {
      next({path: '/login'})
    }
  }else {
    next()
  }
})

export default router
