<style scoped>
  .banner {
    width: 100%;
    min-height: 100vh;
    background: url('../../assets/img/banner-home.jpeg') center no-repeat #fff;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .content {
    width: 100%;
    float: left;
    padding: 120px 60px 0;
  }
  .content .logo {
    text-align: center;
    margin-bottom: 40px;
  }
  .content .logo img {
    max-width: 170px;
  }
</style>



<template>
    <div>

        <div class="row margin-0">
            <div class="col xl3 l4 m12 s12  padding-0">
                <div class="content">
                    <div class="logo">
                        <img src="../../assets/img/logo-black.png" alt="Rezerve" class="logo-black">
                    </div>
                    <Form></Form>
                </div>
            </div>
            <div class="col xl9 l8 m-hiden s-hiden padding-0">
                <div class="banner">

                </div>
            </div>
        </div>

    </div>
</template>


<script>
    import Form from './Form.vue'

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
        Form
      }
    }
</script>
