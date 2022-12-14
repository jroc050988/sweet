import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/Admin.vue'),
    redirect: {
      name: 'login',
    },
    children: [
      {
        path: '/admin/login',
        name: 'login',
        component: () => import('../views/adminViews/Login.vue'),
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
        path: '/admin/coupons',
        component: () => import('../views/adminViews/Coupons.vue'),
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
        component: () => import('../views/userViews/Home.vue'),
      },
      {
        path: '/menu/:category',
        name: 'menu',
        component: () => import('../views/userViews/Menu.vue'),
      },
      {
        path: '/product/:id',
        component: () => import('../views/userViews/Procduct.vue'),
      },
      {
        path: '/favorite',
        component: () => import('../views/userViews/Favorite.vue'),
      },
      {
        path: '/cart',
        component: () => import('../views/userViews/Cart.vue'),
      },
      {
        path: '/cart-check',
        component: () => import('../views/userViews/Cart-check.vue'),
      },
      {
        path: '/cart-ok',
        component: () => import('../views/userViews/Cart-ok.vue'),
      },
      {
        path: '/order',
        component: () => import('../views/userViews/Order.vue'),
      },
      {
        path: '/contact',
        component: () => import('../views/userViews/Contact.vue'),
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
