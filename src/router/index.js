import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/Login';
import Dashboard from '@/components/Dashboard';
import Assets from '@/components/assets/All';
import NewAsset from '@/components/assets/Create';
import EditAsset from '@/components/assets/Edit';
import Tps from '@/components/tps/All';
import NewTps from '@/components/tps/Create';

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
      component: Assets
    },
    {
      path: '/assets/new',
      name: 'New Asset',
      component: NewAsset
    },
    {
      path: '/assets/edit',
      name: 'Edit Asset',
      component: EditAsset
    },
    {
      path: '/tps',
      name: 'Tps',
      component: Tps
    },
    {
      path: '/tps/new',
      name: 'Tps',
      component: NewTps
    },
  ],
});
