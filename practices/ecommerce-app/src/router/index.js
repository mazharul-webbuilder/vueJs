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
      component: () => import('@/views/CategoryProduct.vue')
    },
    {
      path: '/product/:slug',
      name: 'product.details',
      component: () => import('@/views/ProductDetailView.vue')
    },
    {
      path: '/carts',
      name: 'cart.show',
      component: () => import('@/views/CartView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/RegisterView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/LoginView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/CheckoutView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/DashboardView.vue'),
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('accessToken');
  if (to.meta.requiresAuth) {
    if (token && token !== '') {
      // User is authenticated, proceed to the route
      next();
    } else {
      // User is not authenticated, redirect to login
      next('/login');
    }
  } else if (to.name === 'login' || to.name === 'register') {
    // If user is authenticated, prevent access to login and register routes
    if (token && token !== '') {
      next('/dashboard'); // Redirect to home or dashboard route
    } else {
      next(); // Allow access to login and register routes
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});

export default router
