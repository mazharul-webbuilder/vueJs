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
      component: () => import('../views/StudentsView.vue')
    },
    {
      path: '/student/create',
      name: 'student.create',
      component: () => import('../views/StudentCreateView.vue')
    },
    {
      path: '/student/edit/:id',
      name: 'student.edit',
      component: () => import('../views/StudentEditView.vue')
    },
  ]
})

export default router
