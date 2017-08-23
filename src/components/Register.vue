
<template>
  <div class="corpo">
    <Header></Header>

    <div class="content">
      <div class="desc">
        <!-- <h1>Precisamos do seu email para fazer login</h1> -->
      </div>
      <div class="form">
        <span class="icon circle red lighten-1"><i class="material-icons">create</i></span>

        <div class="row">
          <div class="col m12">
            <div class="input-field">
              <input v-bind:id="'email'" v-validate="'required|email'" type="email" name="email" v-bind:class="{ invalid: !emailDisponivel || errors.has('email'), valid: emailDisponivel && user.email !== null && !errors.has('email') }" v-on:focusout="userByEmail()" v-model="user.email" @input="userByEmail()">
              <label for="email" v-bind:data-error="msgErrorEmail" class="custom">Email</label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col m6">
            <div class="input-field">
              <input v-bind:id="'password'" v-validate="'required|min:6'" type="password" name="password" class="validate" v-bind:class="{ invalid: errors.has('password') }" v-model="user.password">
              <label for="password" data-error="No mínimo 6 digitos">Senha</label>
            </div>
          </div>
          <div class="col m6">
            <div class="input-field">
              <input v-bind:id="'confirma'" type="password" v-validate="'required|confirmed:password'" name="confirmaSenha" class="validate" v-model="user.confirmaSenha" v-bind:class="{ invalid: errors.has('confirmaSenha') && user.confirmaSenha != null }">
              <label for="confirma" data-error="As senhas não conferem">Confirmar Senha</label>
            </div>
          </div>
        </div>
        <div class="row botao">
          <div class="col m12">
            <button class="waves-effect waves-light btn-large bt-right" v-bind:class="{disabled: registrando || !validaCampos()}" @click="submit()">
              <span v-show="!registrando">Cadastrar</span>
              <span v-show="registrando">Cadastrando ...</span>
            </button>
          </div>
        </div>

        <p class="alternativa">ou cadastrar com</p>

        <!-- <button type="button" class="bt-facebook">
          <i class="fa fa-facebook"></i>
          Facebook
        </button>
        <br><br> -->
        <fb-signin-button
          :params="fbSignInParams"
          @success="onSignInSuccess"
          @error="onSignInError">
          <i class="fa fa-facebook"></i>
          Facebook
        </fb-signin-button>


      </div>

    </div>
  </div>
</template>

<script>
  import Config from '../config'
  import Header from './template/headerLogout'
  import Auth from './auth/index'

  export default {
    mounted () {
    },
    data () {
      return {
        user: {
          email: null,
          name: null,
          password: null,
          confirmaSenha: null
        },
        fbSignInParams: {
          scope: 'email,user_likes',
          return_scopes: true
        },
        emailDisponivel: true,
        msgErrorEmail: 'Por favor digite um e-mail válido',
        success: false,
        registrando: false
      }
    },
    methods: {
      submit () {
        this.success = false
        this.registrando = true
        Auth.register(this, this.user, 'dashboard')
      },
      home () {
        this.$router.push({path: 'home'})
      },
      validaCampos () {
        var retorno = true
        if (this.errors.has('email') || this.user.email === null || !this.emailDisponivel) {
          retorno = false
        }
        if (this.errors.has('password') || this.user.password === null) {
          retorno = false
        }
        if (this.errors.has('confirmaSenha') || this.user.confirmaSenha === null) {
          retorno = false
        }
        return retorno
      },
      userByEmail () {
        var data = {email: this.user.email}
        if (!this.errors.has('email')) {
          window.axios.post(Config.API_URL + 'used-email', data).then(data => {
            if (data.data.usandoEmail) {
              this.emailDisponivel = false
              this.msgErrorEmail = 'Já existe um cadastro com este E-mail'
            } else {
              this.emailDisponivel = true
              this.msgErrorEmail = 'Por favor digite um e-mail válido'
            }
          })
        }
      },

      onSignInSuccess (response) {
        Auth.logarFacebook(this, response, 'home')
      },
      onSignInError (error) {
        console.log('OH NOES', error)
      }
    },
    components: {
      Header,
      Auth
    }
  }
</script>

<style scoped lang="sass">
  .corpo
    width: 100%
    min-height: 100vh
    background: #eee

  .content
    width: 100%
    float: left
    clear: both
    .form
      margin: 0 auto
      max-width: 700px
      background: #fff
      padding: 45px
      margin-top: 30px
      -webkit-border-radius: 6px
      border-radius: 6px
      -webkit-box-shadow: 1px 1px 1px 1px #ddd
      box-shadow: 1px 1px 1px 1px #ddd
      position: relative

      .icon
        display: inline-block
        width: 56px
        height: 56px
        position: absolute
        // top: 15px
        // left: -28px
        top: -28px
        left: 50%
        margin-left: -28px
        text-align: center
        line-height: 69px
        i
          color: #fff


  .botao
    text-align: center
    margin-top: 40px
    // margin-bottom: 0


  .alternativa
    text-align: center
    font-size: 1em
    font-weight: 100
    color: #bbb
    margin: 60px 0 40px

  .fb-signin-button
    width: 200px
    height: 45px
    display: block
    background: #3a589e
    border: none
    -webkit-border-radius: 4px
    border-radius: 4px
    font-weight: bold
    font-size: 1.1em
    color: #fff
    margin: 0 auto
    text-align: center
    cursor: pointer
    line-height: 45px
    i
      color: #fff
      margin-right: 20px
      margin-left: -30px
  .fb-signin-button:hover
    background: #2e4986

</style>
