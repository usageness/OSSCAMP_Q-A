import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store/';
import ElementUI from 'element-ui';
import VModal from 'vue-js-modal';


import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VModal, { dynamic: true })

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')