<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import StyleRecommend from './page/StyleRecommend'
  export default {
    name: 'App',
    components:{
      StyleRecommend,
    }
  }
</script>

<style scoped>
  #app{
    height: 100%;
  }
</style>
