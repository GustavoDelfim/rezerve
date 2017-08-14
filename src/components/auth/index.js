import Router from '../../router'
import Config from '../../config'

// URL and endpoint constants
const SIGNUP_URL = Config.API_URL + 'user/'

export default {
  user: {
    authenticated: false
  },

  login (context, creds, redirect) {
    const self = this
    window.axios.post(Config.API_URL + 'login', creds).then(data => {
      localStorage.setItem('user', data.data.user)
      self.setAuthHeader(data.data.token)

      if (redirect) {
        Router.push({name: redirect})
      }
    }).catch(err => {
      context.error = err
      this.logout()
    })
  },

  signup (context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      this.setAuthHeader(data.data.token)
      if (redirect) {
        Router.go(redirect)
      }
    })
  },

  logout () {
    localStorage.removeItem('token')
    window.axios.defaults.headers.common['Authorization'] = false
    this.user.authenticated = false
  },

  checkAuth () {
    var jwt = localStorage.getItem('token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  setAuthHeader (data) {
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + data
    localStorage.setItem('token', data.data.token)
    this.user.authenticated = true
  }
}
