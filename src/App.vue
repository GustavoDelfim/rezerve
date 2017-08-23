<template>
  <div id="app">
    <span class="loader-site" v-bind:class="{ hide: !autenticando }"><img src="./assets/img/loader.gif" alt=""></span>
    <div v-if="user.auth && menu">
      <header id="header">
        Menu
      </header>
    </div>

    <router-view></router-view>

    <footer id="footer">
    </footer>
  </div>
</template>

<script>
import Auth from './components/auth/index'

export default {
  name: 'app',
  mounted () {
    if (!this.$router.history.current.meta.logout) {
      this.autenticando = true
      this.authUser()
    }

    this.toogleMenu()
    this.checkAuth()
    this.$router.afterEach((to, from, next) => {
      this.toogleMenu()
      this.checkAuth()
    })
  },
  data () {
    return {
      user: {
        auth: false
      },
      menu: true,
      userAuthenticated: false,
      autenticando: false
    }
  },
  methods: {
    toogleMenu () {
      if (this.$router.history.current.name === 'welcome') {
        this.menu = false
      } else {
        this.menu = true
      }
    },
    checkAuth () {
      this.user.auth = Auth.checkAuth()
    },
    authUser () {
      Auth.authUser(this)
    },
    hideLoader () {
      var loader = window.$('.loader-site')
      setTimeout(function () {
        loader.fadeOut(300, function () {
          loader.hide()
        })
      }, 500)
    }
  },
  components: {
    Auth
  }
}
</script>

<style scoped lang="sass">
  .loader-site
    width: 100%
    height: 100%
    position: fixed
    top: 0
    left: 0
    z-index: 999999
    float: left
    background: #fff
    text-align: center
    img
      max-width: 100px
      float: left
      position: absolute
      top: 50%
      left: 50%
      margin-top: -50px
      margin-left: -50px

  .loader-site.none
    display: none !important
</style>
