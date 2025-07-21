import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('../views/Join.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../components/Card.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderForm.vue'),
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/Orders.vue'),
    },
    {
      path: '/orders/:id',
      name: 'orderdetail',
      component: () => import('../views/OrderDetail.vue'),
    },
    {
      path: '/addproduct',
      name: 'addproduct',
      component: () => import('../views/ProductForm.vue'),
    },

    // {
    //   path: '/header',
    //   name: 'header',
    //   component: () => import('../components/Header.vue'),
    // },
  ],
});

export default router;
