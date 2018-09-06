<template>
  <div class="vm">
    <video-recommend-header></video-recommend-header>
    <Footer></Footer>
  </div>
</template>

<script>
  import VideoRecommendHeader from "../components/VideoRecommendHeader.vue"
  import Footer from "../components/Footer.vue"
  export default {
    name:"VideoReconmmend",
    components:{
      VideoRecommendHeader,
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
