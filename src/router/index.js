import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: '/admin/login',
        component: () => import('../views/adminViews/Login.vue'),
      },
      {
        path: '/admin/image',
        component: () => import('../views/adminViews/Image.vue'),
      },
      {
        path: '/admin/products',
        component: () => import('../views/adminViews/Products.vue'),
      },
      {
        path: '/admin/order',
        component: () => import('../views/adminViews/Order.vue'),
      },
      {
        path: '/admin/cupons',
        component: () => import('../views/adminViews/Cupons.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: () => import('../views/User.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
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
    ],
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
