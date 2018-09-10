<template>
  <div class="RadioDetail">
    <MyMusicHeader :Header="Header"></MyMusicHeader>
    <!--<RadioDetailTit></RadioDetailTit>-->
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
      <div class="swiper-pagination"></div>
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
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
          renderBullet: function (index, className) {
            if(index=='0'){
              return '<span style="display: table;background: none;width: 0.6rem;font-size: 0.14rem;color: #ffffff;" class="' + className + '">' + "热门" + '</span>';
            }else if(index=='1'){
              return '<span style="display: table;background: none;width: 0.6rem;font-size: 0.14rem;color: #ffffff;" class="' + className + '">' + "电子音乐" + '</span>';
            }else{
              return '<span style="display: table;background: none;width: 0.6rem;font-size: 0.14rem;color: #ffffff;" class="' + className + '">' + "3D环绕" + '</span>';
            }
          },
        }
      })
    },
    created(){
      $.get("http://localhost:3000/radiodetail",(data)=>{
        this.arr = data.obj.arr
      })
    },
    data(){
      return{
        arr:[],
        Header:{
          ord: "电台详情",
          imgSrc1: '../../static/images/aj_cloud.png',
          imgSrc2: '../../static/images/aj_rank.png'
        }
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
    background:#d93f36;
    flex-direction: column;
  }
  .swiper-container{
    width:100%;
    height:100%;
    flex:1;
    background:#fff;
    display:flex;
    position: relative;
    margin-top:0.41rem;
  }
  .swiper-pagination{
    position: fixed;
    top:0.41rem;
    left: 0;
    z-index: 1;
    display: flex;
    color:#000;
    width: 100%;
    height: 0.41rem;
    justify-content: space-around;
    align-items: center;
  }
  .swiper-pagination span{
    border: none;
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
