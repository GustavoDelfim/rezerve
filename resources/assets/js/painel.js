

require('./bootstrap');

// Importando o VUE
window.Vue = require('vue');
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';


// Components Globais
import Pagelogin from './components/PageLogin.vue';
import Home from './components/Home.vue';

// uses
Vue.use(VueRouter);
Vue.use(VueResource);


Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content');
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
// Vue.http.options.root = 'http://localhost:8000';


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

];

// Instancia do vue-route
const router = new VueRouter({
  routes
});


// Instancia do vue
const app = new Vue({
    router
}).$mount('#app');
