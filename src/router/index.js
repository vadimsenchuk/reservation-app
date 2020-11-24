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
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/politics',
    name: 'Politics',
    component: () => import('../views/Politics.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
