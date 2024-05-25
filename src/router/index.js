import { createRouter, createWebHistory } from 'vue-router'
import DefaultResume from '../views/DefaultResume.vue'
import BolognaUnlimited from '@/views/BolognaUnlimited.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'defaultResume',
      component: DefaultResume
    },
    {
      path: '/bologna-ultd/:cover?',
      name: 'bolognaUltd',
      component: BolognaUnlimited
    }
  ]
})

export default router
