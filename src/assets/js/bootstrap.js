
try {
  window.$ = window.jQuery = require('jquery')
  require('materialize-css')
} catch (err) {}

window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

var jwt = localStorage.getItem('token')
if (jwt) {
  window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwt
}
