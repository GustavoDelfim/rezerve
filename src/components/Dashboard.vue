<style lang="sass">
  body
    background: #fff

</style>

<template>
  <div>
    <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
    <br>
    {{ users }}
    <button @click="logout()"> Sair </button>
  </div>
</template>

<script>
import Config from '../config'
import Auth from './auth/index'

export default {
  name: 'home',

  mounted () {
    window.axios.get(Config.API_URL + 'user').then(data => {
      this.users = data.data
    }).catch(err => {
      console.log(err)
    })
  },

  data () {
    return {
      msg: 'Teste',
      users: []
    }
  },

  components: {
    Auth
  },

  methods: {
    logout () {
      Auth.logout()
      this.$router.push({path: '/home'})
    }
  }
}
</script>
