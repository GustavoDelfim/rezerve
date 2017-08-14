<style scoped>
    .esqueci {
      float: right;
    }
    .botao {
      text-align: center;
    }

    .show-pass {
      float: right;
      margin-top: -59px;
      margin-right: 31px;
    }
    .pass {
      padding-right: 50px;
      -webkit-box-sizing: border-box !important; /* Safari/Chrome, other WebKit */
      -moz-box-sizing: border-box !important;    /* Firefox, other Gecko */
      box-sizing: border-box !important;         /* Opera/IE 8+ */
    }

    .icon-visib {
      cursor: pointer;
    }
</style>

<template>
    <div>

        <div class="col s12">

            <div class="row">
                <div class="row">
                    <div class="input-field">
                        <input id="email" type="email" class="validate" v-model="credentials.email">
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
                    <button class="waves-effect waves-light btn-large" @click="submit()">Entrar</button>
                  </div>
                    <!-- <p class="esqueci"><a href="#">Esqueci minha senha.</a></p> -->
                </div>
            </div>
            <!-- <div class="row">
                <h6>Entrar com Rede Social</h6>
            </div> -->

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
        error: ''
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
        var credentials = {
          email: this.credentials.email,
          password: this.credentials.password
        }
        Auth.login(this, credentials, 'home')
      }
    }
  }
</script>
