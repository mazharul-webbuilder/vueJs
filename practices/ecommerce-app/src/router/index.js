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
      path: '/category/product/:slug',
      name: 'category.product',
      component: () => (import('@/views/CategoryProduct.vue'))
    },
    {
      path: '/product/:slug',
      name: 'product.details',
      component: () => (import('@/views/ProductDetailView.vue'))
    },
    {
      path: '/carts',
      name: 'cart.show',
      component: () => (import('@/views/CartView.vue'))

    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => (import('@/views/CheckoutView.vue'))

    },
    {
      path: '/register',
      name: 'register',
      component: () => (import('@/views/auth/RegisterView.vue'))
    },
    {
      path: '/login',
      name: 'login',
      component: () => (import('@/views/auth/LoginView.vue'))
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => (import('@/views/dashboard/DashboardView.vue'))
    },
  ]
})

export default router
