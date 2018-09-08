<template>
    <div class="HelloWorldSection">
      <StyleRecommendStyle></StyleRecommendStyle>
      <HostStationSwiper></HostStationSwiper>
      <HostStationDay :sssA="HostStationDay"></HostStationDay>
      <HostStationOptimization :brr="brr"></HostStationOptimization>
      <HostStationMusic v-for="(HostStationMusic,index) in HostStationMusic" :key="HostStationMusic.index" :HostStationMusic="HostStationMusic"></HostStationMusic>
      <RadioClassHotClassify v-for="classifyarr in arr" :key="classifyarr.index" :classifyarr="classifyarr"></RadioClassHotClassify>
    </div>
</template>

<script>
  import HostStationSwiper from './HostStationSwiper'
  import HostStationDay from './HostStationDay'
  import HostStationOptimization from './HostStationOptimization'
  import HostStationMusic from './HostStationMusic'
  import RadioClassHotClassify from './RadioClassHotClassify'
  import StyleRecommendStyle from './StyleRecommendStyle'
    export default {
        name: "HostStationSection",
      components:{
        HostStationSwiper,
        HostStationDay,
        HostStationOptimization,
        HostStationMusic,
        RadioClassHotClassify,
        StyleRecommendStyle,
      },
      data(){
          return{
            HostStationMusic:[],
            HostStationDay:[],
            arr:[],
            brr:[],
          }
      },
      created(){
          $.get("http://localhost:3000/hoststation",(data)=>{
            this.HostStationMusic = data.obj.HostStationMusic
            this.HostStationDay = data.obj.HostStationDay
            this.arr = data.obj.arr
            this.brr = data.obj.brr
          })
      }
    }
</script>

<style scoped>
  .HelloWorldSection{
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    background: #ffffff;
  }
</style>
