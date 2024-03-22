import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsList from '../views/NewsList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'list',
    component: NewsList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
