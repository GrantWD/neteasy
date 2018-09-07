<template>
  <div class="RadioClass">
    <MyMusicHeader></MyMusicHeader>
    <div class="RadioClassBox">
        <RadioClassHotClassify v-for="classifyarr in arr" :key="classifyarr.index" :classifyarr="classifyarr"></RadioClassHotClassify>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import MyMusicHeader from '../components/MyMusicHeader'
  import RadioClassHotClassify from '../components/RadioClassHotClassify'
  import Footer from '../components/Footer'
  export default {
    name: 'HelloWorld',
    components:{
      MyMusicHeader,
      RadioClassHotClassify,
      Footer
    },
    data(){
      return {
        arr:[
          {
            tit3:'热门分类',
            imgSrc11:'../../static/images/ajClImg.png',
            arrdel:[
              {
                to:'',
                imgSrc9:'../../static/images/ajClBook.png',
                tit4:'有声书',
                imgSrc10:'../../static/images/ajClBulb.png',
                tit5:'知识技能'
              },
              {
                to:'',
                imgSrc9:'../../static/images/ajClLine.png',
                tit4:'商业财经',
                imgSrc10:'../../static/images/ajClLeaf.png',
                tit5:'人文历史'
              },
              {
                to:'',
                imgSrc9:'../../static/images/ajClAbc.png',
                tit4:'外语世界',
                imgSrc10:'../../static/images/ajClBaby.png',
                tit5:'亲子宝贝'
              },
            ]
          },
          {
            tit3:'更多分类',
            imgSrc11:'../../static/images/ajClImg.png',
            arrdel:[
              {
                to:'',
                imgSrc9:'../../static/images/ajClBook.png',
                tit4:'创作|翻唱',
                imgSrc10:'../../static/images/ajClBulb.png',
                tit5:'音乐故事'
              },
              {
                to:'/RadioDetail',
                imgSrc9:'../../static/images/ajClLine.png',
                tit4:'3D电子',
                imgSrc10:'../../static/images/ajClLeaf.png',
                tit5:'相声曲艺'
              },
              {
                to:'',
                imgSrc9:'../../static/images/ajClAbc.png',
                tit4:'情感调频',
                imgSrc10:'../../static/images/ajClBaby.png',
                tit5:'美文读物'
              },
              {
                to:'',
                imgSrc9:'../../static/images/ajClAbc.png',
                tit4:'脱口秀',
                imgSrc10:'../../static/images/ajClBaby.png',
                tit5:'广播剧'
              },
              {
                to:'',
                imgSrc9:'../../static/images/ajClAbc.png',
                tit4:'二次元',
                imgSrc10:'../../static/images/ajClBaby.png',
                tit5:'明星做主播'
              },
              {
                to:'',
                imgSrc9:'../../static/images/ajClAbc.png',
                tit4:'娱乐影视',
                imgSrc10:'../../static/images/ajClBaby.png',
                tit5:'科技科学'
              },
            ]
          }
        ]
      }
    }
  }
</script>


<style scoped lang="scss">
  .RadioClass{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
  }
  .RadioClassBox{
    height:100%;
    flex:1;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  body{
    height:100%;
  }
</style>
