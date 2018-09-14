<template>
  <div class="vm">
    <video-recommend-header></video-recommend-header>
    <div class="content">
      <video-recommend-cont-two ></video-recommend-cont-two>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import VideoRecommendHeader from "../components/VideoRecommendHeader"
  import VideoRecommendContTwo from "../components/VideoRecommendContTwo"
  import Footer from "../components/Footer"
  export default {
    name:"VideoRecommend",
    components:{
      VideoRecommendHeader,
      VideoRecommendContTwo,
      Footer
    },
    data(){
      return{
        result:[],
        StyleRecommendDay:[]
      }
    },

  }
</script>

<style scoped lang="scss">
  .vm{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content{
      width: 100%;
      background: #f1f2f3;
      flex: 1;
      overflow-y: scroll;
      overflow-x: scroll;
    }
  }
</style>
