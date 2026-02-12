import { createRouter, createWebHistory } from 'vue-router'
import IllusionHall from '@/views/IllusionHall.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IllusionHall,
    },
  ],
})

export default router
