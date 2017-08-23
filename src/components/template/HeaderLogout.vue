<template>
  <div>
    <header>
      <div class="logo">
        <a href="javascript:;" @click="home()"><img src="../../assets/img/logo-black.png" alt="Rezerve"></a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    home () {
      this.$router.push({path: 'home'})
    }
  }
}
</script>

<style lang="sass" scoped>
  header
    width: 100%
    float: left
    clear: both
    min-height: 100px
    .logo
      width: 100%
      padding: 30px
      text-align: center !important
      margin-top: 40px
      img
        max-width: 110px
        opacity: 0.4
</style>
