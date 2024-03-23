import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: () => (import('@/views/StudentView.vue'))
    },
    {
      path: '/student/create',
      name: 'student.create',
      component: () => (import('@/views/StudentCreate.vue'))
    },
    {
      path: '/students/:id',
      name: 'student.edit',
      component: () => (import('@/views/StudentEdit.vue'))
    },
  ]
})

export default router
