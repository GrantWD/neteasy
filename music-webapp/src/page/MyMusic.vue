<template>
  <div class="MyMusic">
    <MyMusicHeader></MyMusicHeader>
    <div class="box">
      <div>
        <MyMusicConList></MyMusicConList>
        <MyMusicCreateList v-for="listarr in arr" :listarr="listarr"></MyMusicCreateList>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import MyMusicHeader from '../components/MyMusicHeader'
  import MyMusicConList from '../components/MyMusicConList'
  import MyMusicCreateList from '../components/MyMusicCreateList'
  import Footer from '../components/Footer'
  export default {
    name: 'HelloWorld',
    components: {
      MyMusicHeader,
      MyMusicConList,
      MyMusicCreateList,
      Footer
    },
    data(){
      return{
        tit:[
          {
            ord: "3D|电子",
            imgSrc1: '../../static/images/back.png',
            imgSrc2: '../../static/images/aj_rank.png'
          }
        ],
        arr:[
          {
            imgSrc5:'../../static/images/ajError.png',
            songlist:'我创建的歌单',
            songcount:2,
            imgSrc6:'../../static/images/ajDot.png',
            brr:[
              {
                imgSrc8:'../../static/images/ajMuHeart.png',
                tit2:'我喜欢的音乐',
                text2:'59首，已下载25首',
              },
              {
                imgSrc8:'../../static/images/ajMuPerson.png',
                tit2:'赵飞洋喜欢的音乐',
                text2:'59首，已下载25首',
              },
              {
                imgSrc8:'../../static/images/ajMuRed.png',
                tit2:'说散就散',
                text2:'23首，已下载2首',
              },
              {
                imgSrc8:'../../static/images/ajMuHeart.png',
                tit2:'华晨宇',
                text2:'100首，已下载25首',
              },
              {
                imgSrc8:'../../static/images/ajMuPerson.png',
                tit2:'运动系列',
                text2:'59首，已下载25首',
              },
            ]
          },
          {
            imgSrc5:'../../static/images/ajError.png',
            songlist:'我收藏的歌单',
            songcount:50,
            imgSrc6:'../../static/images/ajDot.png',
            brr:[
              {
                imgSrc8:'../../static/images/ajMuHeart.png',
                tit2:'我喜欢的音乐',
                text2:'59首，已下载25首',
              },
              {
                imgSrc8:'../../static/images/ajMuPerson.png',
                tit2:'赵飞洋喜欢的音乐',
                text2:'59首，已下载25首',
              },
              {
                imgSrc8:'../../static/images/ajMuRed.png',
                tit2:'说散就散',
                text2:'23首，已下载2首',
              }
            ]
          },
          {
            imgSrc5:'../../static/images/ajError.png',
            songlist:'我觉得还行的歌单',
            songcount:20,
            imgSrc6:'../../static/images/ajDot.png',
            brr:[
              {
                imgSrc8:'../../static/images/ajMuHeart.png',
                tit2:'我喜欢的音乐',
                text2:'59首，已下载25首',
              }
            ]
          },
          {
            imgSrc5:'../../static/images/ajError.png',
            songlist:'我跑步的歌单',
            songcount:20,
            imgSrc6:'../../static/images/ajDot.png',
            brr:[
              {
                imgSrc8:'../../static/images/ajMuHeart.png',
                tit2:'我喜欢的音乐',
                text2:'59首，已下载25首',
              }
            ]
          },
          {
            imgSrc5:'../../static/images/ajError.png',
            songlist:'我乱加的歌单',
            songcount:100,
            imgSrc6:'../../static/images/ajDot.png',
            brr:[
              {
                imgSrc8:'../../static/images/ajMuHeart.png',
                tit2:'我喜欢的音乐',
                text2:'59首，已下载25首',
              }
            ]
          },
        ]
      }
    }
}
</script>

 
<style scoped lang="scss">
  .MyMusic{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    overflow-y: scroll;
  }
  body{
    height:100%;
  }
  .box{
    display:flex;
    height:100%;
    flex-direction: column;
    flex:1;
    overflow-y: scroll;
  }
</style>
