import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/Menu.vue'),
  },
  {
    path: '/product',
    component: () => import('../views/Procduct.vue'),
  },
  {
    path: '/favorite',
    component: () => import('../views/Favorite.vue'),
  },
  {
    path: '/cart',
    component: () => import('../views/Cart.vue'),
  },
  {
    path: '/cart-check',
    component: () => import('../views/Cart-check.vue'),
  },
  {
    path: '/cart-ok',
    component: () => import('../views/Cart-ok.vue'),
  },
  {
    path: '/order',
    component: () => import('../views/Order.vue'),
  },
  {
    path: '/contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
