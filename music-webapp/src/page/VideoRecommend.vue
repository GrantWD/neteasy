<template>
  <div class="vm">
    <video-recommend-header></video-recommend-header>
    <video-recommend-cont></video-recommend-cont>
    <Footer></Footer>
  </div>
</template>

<script>
  import VideoRecommendHeader from "../components/VideoRecommendHeader.vue"
  import VideoRecommendCont from "../components/VideoRecommendCont.vue"
  import Footer from "../components/Footer.vue"
  export default {
    name:"VideoRecommend",
    components:{
      VideoRecommendHeader,
      VideoRecommendCont,
      Footer
    }

  }
</script>


<style scoped lang="scss">
  .vm{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    /*justify-content: space-between;*/
  }
</style>
