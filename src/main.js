require('./assets/js/bootstrap')

import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'
import FBSignInButton from 'vue-facebook-signin-button'

Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(VeeValidate)
Vue.use(FBSignInButton)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: {
    App
  }
})
