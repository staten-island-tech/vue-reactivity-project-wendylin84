import { createRouter, createWebHistory } from 'vue-router'
import FindNails from '@/views/FindNails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FindNails,
    },
  ],
})

export default router
