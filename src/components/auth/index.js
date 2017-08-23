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
      localStorage.setItem('user', JSON.stringify(data.data.user))
      self.setAuthHeader(data.data.token)

      if (redirect) {
        Router.push({name: redirect})
      }
    }).catch(err => {
      context.error = err
      context.logando = false
      this.logout()
    })
  },

  logarFacebook (context, user, redirect) {
    var self = this
    window.FB.api('/me', dude => {
      var data = {
        name: dude.name,
        userID: user.authResponse.userID
      }
      window.axios.post(Config.API_URL + 'login-facebook', data).then(data => {
        if (data.data.success) {
          localStorage.setItem('user', JSON.stringify(data.data.user))
          self.setAuthHeader(data.data.token)

          if (redirect) {
            Router.push({name: redirect})
          }
        }
      })
    })
  },

  register (context, creds, redirect) {
    const self = this
    window.axios.post(Config.API_URL + 'register', creds).then(data => {
      localStorage.setItem('user', JSON.stringify(data.data.user))
      self.setAuthHeader(data.data.token)

      if (redirect) {
        Router.push({name: redirect})
      }
    }).catch(err => {
      context.error = err
      context.registrando = false
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
    this.user.authenticated = false
    if (jwt) {
      this.user.authenticated = true
    }
    return this.user.authenticated
  },

  checkName () {
    var user = localStorage.getItem('user')
    if (user === 'undefined') {
      this.logout()
      Router.push({name: 'home'})
    }
    user = JSON.parse(user)
    if (!user.name) {
      return false
    } else {
      return true
    }
  },

  authUser (context) {
    var self = this
    window.axios.get(Config.API_URL + 'auth/user').then(data => {
      if (data.data.token === false) {
        context.userAuthenticated = false
        self.logout()
        Router.push({name: 'login'})
      }

      context.hideLoader()
      context.userAuthenticated = true
    }).catch(function () {
      context.userAuthenticated = false
      context.autenticando = false
      self.logout()
      Router.push({name: 'login'})
      context.hideLoader()
    })
  },

  setAuthHeader (data) {
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + data
    localStorage.setItem('token', data)
    this.user.authenticated = true
  }
}
