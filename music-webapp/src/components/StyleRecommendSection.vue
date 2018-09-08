<template>
  <div class="StyleRecommendSection">
    <StyleRecommendStyle></StyleRecommendStyle>
    <StyleRecommendSwiper></StyleRecommendSwiper>
    <StyleRecommendDay :sssD="StyleRecommendDay"></StyleRecommendDay>
    <StyleRecommendMusic v-for="(sssA,index) in StyleRecommendMusic" :key="sssA.index" :sssA="sssA"></StyleRecommendMusic>
    <StyleRecommendVideo :sssC="StyleRecommendVideo"></StyleRecommendVideo>
    <StyleRecommendVideoMusic v-for="(sssB,index) in StyleRecommendVideoMusic" :key="sssB.index" :sssB="sssB"></StyleRecommendVideoMusic>
  </div>
</template>

<script>
  import StyleRecommendSwiper from './StyleRecommendSwiper'
  import StyleRecommendDay from './StyleRecommendDay'
  import StyleRecommendMusic from './StyleRecommendMusic'
  import StyleRecommendVideo from './StyleRecommendVideo'
  import StyleRecommendVideoMusic from './StyleRecommendVideoMusic'
  import StyleRecommendStyle from './StyleRecommendStyle'
    export default {
        name: "StyleRecommendSection",
      components:{
        StyleRecommendSwiper,
        StyleRecommendDay,
        StyleRecommendMusic,
        StyleRecommendVideo,
        StyleRecommendVideoMusic,
        StyleRecommendStyle,
      },
      data(){
        return{
          StyleRecommendMusic:[],
          StyleRecommendVideoMusic:[],
          StyleRecommendVideo: {},
          StyleRecommendDay:[],
        }
      },
      created(){
          $.get("http://localhost:3000/zfy",(data)=>{
            this.StyleRecommendVideo = data.obj.StyleRecommendVideo
            this.StyleRecommendMusic = data.obj.StyleRecommendMusic
            this.StyleRecommendVideoMusic = data.obj.StyleRecommendVideoMusic
            this.StyleRecommendDay = data.obj.StyleRecommendDay
          })
      }
    }
</script>

<style scoped>
  .StyleRecommendSection{
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
