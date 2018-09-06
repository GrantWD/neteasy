<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import RadioDetail from './page/RadioDetail'
  export default {
    name: 'App',
    components:{
      RadioDetail
    }
  }
</script>

<style scoped>
  #app{
    height: 100%;
  }
</style>
