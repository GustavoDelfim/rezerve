
<template>
  <div class="corpo">
    <header>
      <div class="logo">
        <a href="javascript:;" @click="go('home')"><img src="../assets/img/logo-black.png" alt="Rezerve"></a>
      </div>
    </header>

    <div class="content">
      <div class="icon">
        <img src="../assets/img/money.png" alt="Rezerve">
      </div>
      <h1> Vamos Reservar dinheiro? </h1>
      <div class="botoes">
        <button class="waves-effect waves-light btn-large" @click="go('register')">Começar</button>
        <button class="waves-effect waves-light btn-large" @click="go('login')">Logar</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './template/headerLogout'

export default {
  methods: {
    go (path) {
      this.$router.push({path: path})
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped lang="sass">
  .corpo
    width: 100%
    min-height: 100vh
    background: #fff

  header
    width: 100%
    float: left
    clear: both
    min-height: 100px
    .logo
      width: 100%
      padding: 30px
      img
        max-width: 110px
        opacity: .4

  .content
    width: 100%
    float: left
    clear: both
    h1
      margin: 60px 0 30px
      text-align: center
      font-size: 2.1em
      color: #555

  .botoes
    text-align: center
    button
      margin: 0 15px
      cursor: pointer

  .icon
    text-align: center
    img
      max-width: 150px
</style>
