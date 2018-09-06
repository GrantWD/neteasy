<template>
  <div class="MyMusicConList">
    <MyMusicConListOne v-for="obj in arr"  :obj="obj"></MyMusicConListOne>
  </div>
</template>

<script>
    import MyMusicConListOne from './MyMusicConListOne'
    export default {
        name: "MyMusicConList",
        components:{
          MyMusicConListOne
      },
      data(){
          return{
            arr:[
              { text1:"我的音乐",
                tit1:"21",
                imgSrc3:"../../static/images/ajMusic.png",
                imgSrc4:'../../static/images/ajRightError.png'
              },
              { text1:"最近播放",
                tit1:"23",
                imgSrc3:"../../static/images/ajPlayer.png",
                imgSrc4:'../../static/images/ajRightError.png'
              },
              { text1:"下载管理",
                tit1:"34",
                imgSrc3:"../../static/images/ajMusic.png",
                imgSrc4:'../../static/images/ajRightError.png'
              },
              { text1:"我的电台",
                tit1:"56",
                imgSrc3:"../../static/images/ajRadio.png",
                imgSrc4:'../../static/images/ajRightError.png'
              },
              { text1:"我的收藏",
                tit1:"2",
                imgSrc3:"../../static/images/ajCollect.png",
                imgSrc4:'../../static/images/ajRightError.png'
              },
            ]
          }
      }
    }
</script>

<style scoped>

</style>
