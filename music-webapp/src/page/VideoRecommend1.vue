<template>
  <div class="vm">
    <video-recommend-header></video-recommend-header>
    <div class="content">
      <div class="cct">
        <video-recommend-cont-one  v-for="(obj,index) in result"   :key="obj.index" :obj="obj"></video-recommend-cont-one>
      </div>
    </div>
    <video-recommend-cont-two></video-recommend-cont-two>
    <Footer></Footer>
  </div>
</template>

<script>
  import VideoRecommendHeader from "../components/VideoRecommendHeader.vue"
  import VideoRecommendContTwo from "../components/VideoRecommendContTwo"
  import Footer from "../components/Footer.vue"
  export default {
    name:"VideoRecommend",
    components:{
      VideoRecommendHeader,
      VideoRecommendContTwo,
      Footer
    },
    data(){
      return{
        // result:[],
        // StyleRecommendDay:[]
      }
    },
    // created () {
    //
    //   $.get('http://localhost:3000/videomuzic', (data) => {
    //     // console.log(data);
    //     // console.log(data.obj.result);
    //     this.result = data.obj.result;
    //     // console.log(this.result);
    //   });
    // }
  }
</script>

<style scoped lang="scss">
  .vm{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    video-recommend-cont-two{
      width: 100%;
      background: #f1f2f3;
      flex: 1;
      overflow-y: scroll;
      overflow-x: scroll;
      .cct {
        img {
          margin: 0.06rem auto;
          width: 95%;
          height:100%;
        }
        a {
          display: block;
          position: absolute;
          font-size: 0.1rem;
          margin-right: 5px;
          svg {
            font-size: 0.1rem;
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>
