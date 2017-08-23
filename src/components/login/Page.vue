
<template>
  <div class="corpo">
    <Header></Header>
    <div class="content">
      <div class="form">
        <span class="icon circle red lighten-1"><i class="fa fa-user"></i></span>
        <Form></Form>
      </div>
      <p class="cadastrar-se"><a href="#/register">Cadastrar-ser</a></p>
    </div>
  </div>
</template>


<script>
    import Form from './Form.vue'
    import Header from '../template/headerLogout'

    export default {
      mounted () {

      },
      data () {
        return {
          valor: []
        }
      },
      methods: {

      },
      components: {
        Form,
        Header
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
      max-width: 500px
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
        top: -28px
        left: 50%
        margin-left: -28px
        text-align: center
        line-height: 63px
        i
          color: #fff
          font-size: 1.6em
      h4
        color: #555
        margin-bottom: 45px

  .cadastrar-se
    text-align: center
    margin-top: 30px
    a
      color: #aaa
    a:hover
      color: #26a69a

</style>
