<template>
  <video-recommend></video-recommend>
</template>

<script>
  import VideoRecommend from './page/VideoRecommend'
  export default {
    name: 'App',
    components:{
      VideoRecommend,
    }
  }
</script>

<style scoped>
  #app{
    height: 100%;
  }
</style>
