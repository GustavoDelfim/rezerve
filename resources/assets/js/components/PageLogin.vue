<style scoped>
  .banner {
     width: 100%;
     min-height: 100vh;
     background: #de8d8d;
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
                        <img src="img/logo-black.png" alt="Rezerve" class="logo-black">
                    </div>
                    <Login></Login>
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
    import Login from './Login.vue';

    export default {
        mounted() {

        },
        data() {
            return {
                valor: []
            }
        },
        methods: {

        },
        components: {
          Login
        }
    }
</script>
