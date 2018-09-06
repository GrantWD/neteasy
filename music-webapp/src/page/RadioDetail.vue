<template>
  <div class="RadioDetail">
    <MyMusicHeader></MyMusicHeader>
    <RadioDetailTit></RadioDetailTit>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="RadioDetailBox">
            <div>
              <RadioDetailList v-for="(ord,index) in arr" :key="ord.index" :ord="ord"></RadioDetailList>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="RadioDetailBox">
            <div>
              <RadioDetailList v-for="(ord,index) in arr" :key="ord.index" :ord="ord"></RadioDetailList>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="RadioDetailBox">
            <div>
              <RadioDetailList v-for="(ord,index) in arr" :key="ord.index" :ord="ord"></RadioDetailList>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import MyMusicHeader from '../components/MyMusicHeader'
  import RadioDetailTit from '../components/RadioDetailTit'
  import RadioDetailList from '../components/RadioDetailList'
  import Footer from '../components/Footer'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    name: 'HelloWorld',
    components: {
      MyMusicHeader,
      RadioDetailTit,
      RadioDetailList,
      Footer
    },
    mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true
      })
    },
    data(){
      return{
        tit:[
          {
            ord: "我的音乐",
            imgSrc1: '../../static/images/back.png',
            imgSrc2: '../../static/images/aj_rank.png'
          }
        ],
        arr: [
          {
            imgSrc1:'../../static/images/ajRDListOne.png',
            tit1:'Don Diablo Presents Hexag',
            text1:'知名荷兰DJ的未知领域音乐旅程',
            dec1:'节目:45，订阅:32083'
        },
          {
            imgSrc1: '../../static/images/ajRDListTwo.png',
            tit1: 'Don Diablo Presents Hexag',
            text1: '知名荷兰DJ的未知领域音乐旅程',
            dec1: '节目:45，订阅:32083'
          },
          {
            imgSrc1: '../../static/images/ajRDListThree.png',
            tit1: 'Don Diablo Presents Hexag',
            text1: '知名荷兰DJ的未知领域音乐旅程',
            dec1: '节目:45，订阅:32083'
          },
          {
            imgSrc1: '../../static/images/ajRdListFour.png',
            tit1: 'Don Diablo Presents Hexag',
            text1: '荷兰DJ，制作人官方电台',
            dec1: '节目:675，订阅:23423'
          },
          {
            imgSrc1: '../../static/images/ajRDListFive.png',
            tit1: 'Don Diablo Presents Hexag',
            text1: '荷兰电音厂牌jygkkkk官方电台',
            dec1: '节目:45，订阅:11183'
          },
          {
            imgSrc1: '../../static/images/ajRDListSix.png',
            tit1: 'Don Diablo Presents Hexag',
            text1: '带你体验更加性感真实的声音',
            dec1: '节目:23，订阅:3243483'
          },
          {
            imgSrc1: '../../static/images/ajRDListSeven.png',
            tit1: 'Don Diablo Presents Hexag',
            text1: '知名荷兰DJ的未知领域音乐旅程',
            dec1: '节目:78，订阅:323383'
          },
        ]
      }
    }
  }
</script>

 
<style scoped lang="scss">
  body{
    height:100%;
  }
  .RadioDetail{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
  }
  .swiper-container{
    width:100%;
    height:100%;
    flex:1;
    display:flex;
  }
  .RadioDetailBox{
    width:100%;
    height:100%;
    display:flex;
    flex:1;
    flex-direction: column;
    overflow-y: scroll;
  }

</style>
