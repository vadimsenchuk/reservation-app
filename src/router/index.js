import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // lazy loading component
    component: () => import('../views/About.vue')
  },
  {
    path: '/auth',
    name: 'Authorisation',
    component: () => import('../views/Authorisation.vue')
  },
  {
    path: '/reg',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
