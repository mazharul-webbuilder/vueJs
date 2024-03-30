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
  ]
})

export default router
