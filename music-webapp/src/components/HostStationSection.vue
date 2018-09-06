<template>
    <div class="HelloWorldSection">
      <StyleRecommendSwiper></StyleRecommendSwiper>
      <HostStationDay></HostStationDay>
      <HostStationOptimization></HostStationOptimization>
      <HostStationMusic v-for="HostStationMusic in HostStationMusic" :HostStationMusic="HostStationMusic"></HostStationMusic>
      <RadioClassHotClassify></RadioClassHotClassify>
      <RadioClassDetail v-for="RadioClassDetail in RadioClassDetail"></RadioClassDetail>
      <RadioClassHotClassify></RadioClassHotClassify>
      <RadioClassDetail v-for="RadioClassDetai2 in RadioClassDetai2"></RadioClassDetail>
    </div>
</template>

<script>
  import StyleRecommendSwiper from './StyleRecommendSwiper'
  import HostStationDay from './HostStationDay'
  import HostStationOptimization from './HostStationOptimization'
  import HostStationMusic from './HostStationMusic'
  import RadioClassHotClassify from './RadioClassHotClassify'
  import RadioClassDetail from './RadioClassDetail'
    export default {
        name: "HostStationSection",
      components:{
        StyleRecommendSwiper,
        HostStationDay,
        HostStationOptimization,
        HostStationMusic,
        RadioClassHotClassify,
        RadioClassDetail,
      },
      data(){
          return{
            HostStationMusic:[
              {
                ClassName:'有声书1',
                arr:[
                  {
                    Img:'../../static/images/StyleRecommendMusic2.jpg',
                    name:'失落少年孤独心俱乐部'
                  },
                  {
                    Img:'../../static/images/StyleRecommendMusic2.jpg',
                    name:'失落少年孤独心俱乐部'
                  },
                  {
                    Img:'../../static/images/StyleRecommendMusic2.jpg',
                    name:'失落少年孤独心俱乐部'
                  },
                ]
              },
              {
                ClassName:'有声书2',
                arr:[
                  {
                    Img:'../../static/images/StyleRecommendMusic2.jpg',
                    name:'失落少年孤独心俱乐部'
                  },
                  {
                    Img:'../../static/images/StyleRecommendMusic2.jpg',
                    name:'失落少年孤独心俱乐部'
                  },
                  {
                    Img:'../../static/images/StyleRecommendMusic2.jpg',
                    name:'失落少年孤独心俱乐部'
                  },
                ]
              },
              {
                ClassName:'有声书3',
                arr:[
                  {
                    Img:'../../static/images/StyleRecommendMusic2.jpg',
                    name:'失落少年孤独心俱乐部'
                  },
                  {
                    Img:'../../static/images/StyleRecommendMusic2.jpg',
                    name:'失落少年孤独心俱乐部'
                  },
                  {
                    Img:'../../static/images/StyleRecommendMusic2.jpg',
                    name:'失落少年孤独心俱乐部'
                  },
                ]
              },
              {
                ClassName:'有声书4',
                arr:[
                  {
                    Img:'../../static/images/StyleRecommendMusic2.jpg',
                    name:'失落少年孤独心俱乐部'
                  },
                  {
                    Img:'../../static/images/StyleRecommendMusic2.jpg',
                    name:'失落少年孤独心俱乐部'
                  },
                  {
                    Img:'../../static/images/StyleRecommendMusic2.jpg',
                    name:'失落少年孤独心俱乐部'
                  },
                ]
              },
            ],
            RadioClassDetail:[
              {},{},{}
            ],
            RadioClassDetai2:[
              {},{},{},{},{},{},{}
            ],
            StyleRecommendDay:[
              {
                to:'/HostStation',
                img:'../../static/images/StyleRecommendDay1.gif',
                name:'私人FM',
              },
              {
                to:'/HostStation',
                img:'../../static/images/StyleRecommendDay2.gif',
                name:'每日推荐',
              },
              {
                to:'/HostStation',
                img:'../../static/images/StyleRecommendDay3.gif',
                name:'歌单',
              },
              {
                to:'/HostStation',
                img:'../../static/images/StyleRecommendDay4.gif',
                name:'排行榜',
              },
            ],
          }
      }
    }
</script>

<style scoped>
  .HelloWorldSection{
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
