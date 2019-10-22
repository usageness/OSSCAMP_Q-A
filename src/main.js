import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

import { Login, main } from './components';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/main',
    component: main
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
