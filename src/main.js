// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VeeValidate from 'vee-validate';
import CxltToastr from 'cxlt-vue2-toastr';
import VueTreeNavigation from 'vue-tree-navigation';
import { store } from './store/store.js';

//import BootstrapVue from 'bootstrap-vue'

//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'


import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css';

import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
Vue.component('v-icon', Icon);


Vue.use(CxltToastr, toastrConfigs);
Vue.use(VeeValidate);
Vue.use(VueTreeNavigation);
//Vue.use(BootstrapVue);

const http = axios.create({
  baseURL: store.state.baseURL
  //baseURL: 'http://localhost:8080/'
});



Vue.prototype.$http = http;

var toastrConfigs = {
    position: 'top center',
    showDuration: 2000
};

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
