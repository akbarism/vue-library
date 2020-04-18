import vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from './view/Main/Dashboard.vue'
import Register from './view/Main/Register.vue';
import Login from './view/Main/Login.vue';
import Detail from './view/Main/Detail.vue';
import Activation from './components/_bash/Activation.vue'

vue.use(VueRouter);

const routes = [
  {
    path: '/',
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
    path: '/auth',
    name: 'Activation',
    component: Activation,
  },
  {
    path: '/Book/:IdBook',
    name: 'Detail',
    component: Detail,
    props: true
  },
  {
    path: '/History',
    name: 'History',
    component: History,
  },
];
const router = new VueRouter({
  mode: 'history',
  routes
});
export default router