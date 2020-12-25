import Vue from 'vue';
import VueRouter from 'vue-router';
// import Dashboard from '../views/Dashboard.vue';
import { auth } from '../firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */'../views/Login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next('/login');
  } else {
    next();
  }
});

export default router;
