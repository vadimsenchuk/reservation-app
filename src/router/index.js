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
    path: '/auth',
    name: 'Authorisation',
    // lazy loading component
    component: () => import('../views/Authorisation.vue')
  },
  {
    path: '/reg',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('../views/Company.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/politics',
    name: 'Politics',
    component: () => import('../views/Politics.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
