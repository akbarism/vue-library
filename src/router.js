import vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from './view/Main/Dashboard.vue'
import Register from './view/Main/Register.vue';
import Login from './view/Main/Login.vue';
import Detail from './view/Main/Detail.vue';

vue.use(VueRouter);


const routes = [
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Book/:IdBook',
    name: 'Detail',
    component: Detail,
    props: true
  }
  // redirect: { name: 'Home' },
  // children: [
  //   {
  //     path: '/Register',
  //     name: 'Register',
  //     component: Register,
  //   },
  //   {
  //     path: '/about',
  //     name: 'About',
  //     component: About,
  //   },
  // ],
  //},
];
const router = new VueRouter({
  mode: 'history',
  routes
});
export default router