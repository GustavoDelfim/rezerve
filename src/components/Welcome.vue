
<template>
  <div>
    <header>
      <div class="logo">
        <a href="javascript:;" @click="go('home')"><img src="../assets/img/logo-black.png" alt="Rezerve"></a>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col l4 m5 s12 offset-l1 hide-on-small-only">
          <img src="../assets/img/person-sombra.png" alt="" class="avatar">
        </div>
        <div class="col l5 m7 s12">
          <h2>Olá!</h2>
          <p>Agora Falta pouco para<br> reservar sua grana</p>
          <h5>Como quer se chamado?</h5>
          <div class="input-field input">
            <input v-bind:id="'nome'" type="text" name="nome" v-model="nome">
            <label for="nome">Nome</label>
          </div>
          <div class="botao">
            <button class="waves-effect waves-light btn-large" v-bind:class="{disabled: !nome || salvando}" @click="submit()">
              <span v-show="!salvando">Continuar</span>
              <span v-show="salvando">Salvando ...</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Config from '../config'

export default {
  data () {
    return {
      nome: null,
      salvando: false
    }
  },
  methods: {
    submit () {
      var self = this
      this.salvando = true
      var data = {name: this.nome}
      window.axios.post(Config.API_URL + 'user/edit-name', data).then(data => {
        if (data.data.success) {
          var user = localStorage.getItem('user')
          user = JSON.parse(user)
          user.name = self.nome
          localStorage.setItem('user', JSON.stringify(user))
          this.$router.push({name: 'home'})
        }
      })
    }
  }
}
</script>

<style scoped lang="sass">
  header
    width: 100%
    float: left
    clear: both
    .logo
      width: 100%
      padding: 30px 30px 0
      img
        max-width: 110px
        opacity: .4

  .avatar
    max-height: 550px
    float: left
    max-width: 100%
    float: right
    margin-right: 15%

  h2
    font-weight: bold
    margin-top: 5%
    color: #03cccb
    font-size: 4.2em
    margin-bottom: 0
  h5
    color: #777
    font-size: 2em
    margin: 30px 0
    font-weight: 100
  p
    color: #bbb

  .input
    margin-top: 55px
    input
      color: #03cccb
      font-size: 2em !important
      font-weight: 100

  .botao
    width: 100%
    float: left
    clear: both
    margin-top: 70px

  @media(max-width: 992px)
    .avatar
      margin-top: 30px

    h2
      margin-top: 70px

  @media(max-width: 600px)
    h2
      margin-top: 50px
      text-align: center
    h5, p
      text-align: center

    .botao
      text-align: center
      margin-top: 30px
      button
        margin: 0 auto
        float: none
</style>
