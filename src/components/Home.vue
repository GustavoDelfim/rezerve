<style lang="sass">
  body
    background: #fff

</style>

<template>
  <div>
    <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
    <br>
    {{ users }}
  </div>
</template>

<script>
import Config from '../config'

export default {
  name: 'home',

  mounted () {
    window.axios.get(Config.API_URL + 'user?token=' + localStorage.getItem('token')).then(data => {
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
  }
}
</script>
