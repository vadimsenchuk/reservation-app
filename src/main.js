import Vue from 'vue';
import App from './App.vue';

import fb from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

import ElementUI from 'element-ui';
import Locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI, { Locale });

new Vue({
  router,
  store,
  // при создании приложения, передаем в fb конструктор нашего приложения
  created() {
    fb.initializeApp({
      apiKey: 'AIzaSyAdCp_J1eIu6wsEW9zSJgp2ZjtIHAc0bgY',
      authDomain: 'reservation-app-from-dreamteam.firebaseapp.com',
      databaseURL: 'https://reservation-app-from-dreamteam.firebaseio.com',
      projectId: 'reservation-app-from-dreamteam',
      storageBucket: 'reservation-app-from-dreamteam.appspot.com',
      messagingSenderId: '666013380353',
      appId: '1:666013380353:web:7c811c20e4eb303d6a7500',
      measurementId: 'G-PRZW82Z7Q9'
    });
  },
  render: h => h(App)
}).$mount('#app');
