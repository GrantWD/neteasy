<template>
  <div class="cc1">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide c1">
          <video-recommend-cont-one v-for="(obj,index) in result" :key="obj.index" :obj="obj"></video-recommend-cont-one>
        </div>
        <div class="swiper-slide c1">
          <video-recommend-cont-one v-for="(obj,index) in result2" :key="obj.index" :obj="obj"></video-recommend-cont-one>
        </div>
        <div class="swiper-slide c1">
          <video-recommend-cont-one v-for="(obj,index) in result3" :key="obj.index" :obj="obj"></video-recommend-cont-one>
        </div>
        <div class="swiper-slide c1">
          <video-recommend-cont-one v-for="(obj,index) in result4" :key="obj.index" :obj="obj"></video-recommend-cont-one>
        </div>
        
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import VideoRecommendContOne from "../components/VideoRecommendContOne"
  export default {
    name: "VideoRecmmendContTwo",
    components:{
      VideoRecommendContOne,
    },
    data(){
      return{
        result:[],
        result2:[],
        result3:[],
        result4:[],
      }  
    },
    created () {
      $.get('http://localhost:3000/videomuzic', (data) => {
        // console.log(data);
        // console.log(data.obj.result);
        this.result = data.obj.result;
        // console.log(this.result);
      });
      $.get('http://localhost:3000/videomiss', (data) => {
        // console.log(data);
        // console.log(data.obj.result);
        this.result2 = data.obj.result;
        // console.log(this.result);
      });
      $.get('http://localhost:3000/videoactive', (data) => {
        // console.log(data);
        // console.log(data.obj.result);
        this.result3 = data.obj.result;
        // console.log(this.result);
      });
      $.get('http://localhost:3000/video', (data) => {
        // console.log(data);
        // console.log(data.obj.result);
        this.result4 = data.obj.result;
        // console.log(this.result);
      });
    },
    mounted(){
      new Swiper(".swiper-container",{
        pagination:{
          el:".swiper-pagination",
          clickable: true,
          renderBullet:function(index, className) {
              let text =0;
              let a = ["首页推荐","新歌天地","hi歌现场","突然的自我"];
              switch(index){
                 case 0:text=a[index];break;
                 case 1:text=a[index];break;
                 case 2:text=a[index];break;
                 case 3:text=a[index];break;
              }
              return '<span class="' + className + '">' + text + '</span>';
              
          },
        }
      })
    },
  }
</script>

<style lang="scss" >
  .cc1{
    flex:1;
    .swiper-container{
      width:100%;
      .swiper-pagination{
        width:100%;
        white-space:nowrap;
        overflow-x:scroll;
        top:0;
        left:0;
        text-align:left;
        .swiper-pagination-bullet{
          padding:0 10px;
          white-space: nowrap;
          width: auto;
          height:0.42rem;
          font-size: 0.2rem;
          text-align: center;
          line-height: 0.4rem;
          background: none;
          color: black;
          border-radius: 0;
          outline:none;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active{
          border-bottom: 2px solid blue;
          opacity: 1;
        }
      }
      .swiper-wrapper{
        top:0.42rem;
      }
    }
  }

</style>
