

require('./bootstrap');

// Importando o VUE
window.Vue = require('vue');
import VueRouter from 'vue-router';


// Components Globais
import Pagelogin from './components/PageLogin.vue';
import Home from './components/Home.vue';

// uses
Vue.use(VueRouter);


// Array de Rotas
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Pagelogin
  }

]

// Instancia do vue-route
const router = new VueRouter({
  routes
})


// Instancia do vue
const app = new Vue({
    router
}).$mount('#app')
