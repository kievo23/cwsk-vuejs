import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import Dashboard from '@/components/Dashboard';
import Assets from '@/components/assets/All';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/assets',
      name: 'Assets',
      component: Assets,
      children: [
            { name: 'NewAssets', path: 'new' },
            { name: 'UpdateAssets', path: 'update' }
          ]
    },
    {
      path: '/tps',
      name: 'Tps',
      children: [
            { name: 'NewTps', path: 'new' },
            { name: 'UpdateTps', path: 'update' }
          ]
    },
  ],
});
