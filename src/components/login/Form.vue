

<template>
    <div>

        <div class="col s12">

          <fb-signin-button
            :params="fbSignInParams"
            @success="onSignInSuccess"
            @error="onSignInError">
            <i class="fa fa-facebook"></i>
            Entrar com Facebook
          </fb-signin-button>

          <p class="alternativa">ou entrar com</p>

          <p v-show="error" class="error">Email ou senha incorretos</p>

          <div class="row">
              <div class="row">
                  <div class="input-field">
                      <input v-bind:id="'email'" type="email" class="validate" v-model="credentials.email">
                      <label for="email">Email</label>
                  </div>
              </div>
              <div class="row">
                  <div class="input-field">
                      <input type="password" class="validate pass" ref="passPass" v-show="!visibPass" v-model="credentials.password">
                      <input type="text" class="validate pass" ref="passText" v-show="visibPass" v-model="credentials.password">
                      <label>Senha</label>
                      <div class="show-pass">
                        <i class="material-icons prefix icon-visib" v-show="!visibPass" v-on:click="tooglePass(true)">visibility</i>
                        <i class="material-icons prefix icon-visib" v-show="visibPass" v-on:click="tooglePass(false)">visibility_off</i>
                      </div>
                  </div>
              </div>
              <div class="row">
                <div class="botao">
                  <button class="waves-effect waves-light btn-large" @click="submit()" v-bind:class="{disabled: logando}">
                    <span v-show="!logando">Entrar</span>
                    <span v-show="logando">Entrando ...</span>
                  </button>
                </div>
                  <!-- <p class="esqueci"><a href="#">Esqueci minha senha.</a></p> -->
              </div>
          </div>

        </div>

    </div>
</template>


<script>
  import Auth from '../auth/index'

  export default {
    mounted () {
    },
    data () {
      return {
        visibPass: false,
        credentials: {
          email: null,
          password: null
        },
        error: false,
        logando: false
      }
    },
    components: {
      Auth
    },
    methods: {
      tooglePass (status) {
        this.visibPass = status

        var el = this.$refs.passText
        if (!status) {
          el = this.$refs.passPass
        }

        setTimeout(function () {
          this.JQuery(el).focus()
        }, 100)
      },
      submit () {
        this.error = false
        this.logando = true
        var credentials = {
          email: this.credentials.email,
          password: this.credentials.password
        }
        Auth.login(this, credentials, 'dashboard')
      },

      onSignInSuccess (response) {
        Auth.logarFacebook(this, response, 'home')
      },
      onSignInError (error) {
        console.log('OH NOES', error)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .esqueci
    float: right

  .botao
    width: 100%
    float: left
    text-align: center

  .show-pass
    float: right
    margin-top: -59px
    margin-right: 31px
  .pass
    padding-right: 50px
    -webkit-box-sizing: border-box !important
    -moz-box-sizing: border-box !important
    box-sizing: border-box !important

  .icon-visib
    cursor: pointer

  .alternativa
    text-align: center
    font-size: 1em
    font-weight: 100
    color: #bbb
    margin: 30px 0

  .fb-signin-button
    width: 270px
    height: 45px
    display: block
    background: #3a589e
    border: none
    -webkit-border-radius: 4px
    border-radius: 4px
    font-weight: bold
    font-size: 1.1em
    color: #fff
    margin: 15px auto 0
    text-align: center
    cursor: pointer
    line-height: 45px
    i
      color: #fff
      margin-right: 30px
      margin-left: -10px

  .error
    text-align: center
    font-size: 1em
    font-weight: 100
    color: #EF534F
    margin: 15px 0
</style>
