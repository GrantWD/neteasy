<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import MyMusic from './page/MyMusic'
  export default {
    name: 'App',
    components:{
      MyMusic
    }
  }
</script>

<style scoped>
  #app{
    height: 100%;
  }
</style>
