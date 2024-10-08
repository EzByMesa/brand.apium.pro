import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home.view.vue'
import ColorPickerView from '@/views/c.view.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/c/:color',
    name: 'color',
    component: ColorPickerView
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
