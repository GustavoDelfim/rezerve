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
                        <input id="email" type="email" class="validate" v-model="login.email">
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field">
                        <input type="password" class="validate pass" ref="passPass" v-show="!visibPass" v-model="login.password">
                        <input type="text" class="validate pass" ref="passText" v-show="visibPass" v-model="login.password">
                        <label for="password">Senha</label>
                        <div class="show-pass">
                          <i class="material-icons prefix icon-visib" v-show="!visibPass" v-on:click="tooglePass(true)">visibility</i>
                          <i class="material-icons prefix icon-visib" v-show="visibPass" v-on:click="tooglePass(false)">visibility_off</i>
                        </div>
                    </div>
                </div>
                <div class="row">
                  <div class="botao">
                    <a class="waves-effect waves-light btn-large">Entrar</a>
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
    export default {
        mounted() {

        },
        data() {
            return {
                visibPass: false,
                login: {
                  email: "",
                  password: ""
                }
            }
        },
        methods: {
          tooglePass(status) {

            this.visibPass = status;

             var el = this.$refs.passText;
             if(!status){
                  el = this.$refs.passPass;
             }

            setTimeout(function(){
                $(el).focus();
            }, 100)

          }
        }
    }
</script>
