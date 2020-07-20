import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'at-ui-style'
import AtUI from 'at-ui'

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(AtUI);
Vue.use(BootstrapVue);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});