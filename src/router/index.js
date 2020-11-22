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
    path: '/contacts',
    name: 'Contacts',
    // lazy loading component
    component: () => import('../views/Contacts.vue')
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
  },
  {
    path: '/modal',
    name: 'Modal',
    component: () => import('../views/Modal.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
