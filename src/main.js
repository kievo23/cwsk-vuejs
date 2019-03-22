// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import VeeValidate from 'vee-validate';
import CxltToastr from 'cxlt-vue2-toastr'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css';


const http = axios.create({
  baseURL: 'http://localhost:3000'
  //baseURL: 'http://cwsk-api.herokuapp.com'
});

var toastrConfigs = {
    position: 'top center',
    showDuration: 2000
};

Vue.use(CxltToastr, toastrConfigs);
Vue.prototype.$http = http;
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
