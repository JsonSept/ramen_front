import { createRouter, createWebHistory } from 'vue-router'
import SignupView from '../views/SignupView.vue'
import bootsrap from 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
const routes = [
  
  {
    path: '/',
    name: 'start',
    component: () => import('../views/StartingView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import('../views/LandingView.vue')
  },

  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/item',
    name: 'item',
    component: () => import('../views/ItemView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
