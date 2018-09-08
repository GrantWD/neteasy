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
    created(){
      $.get("http://localhost:3000/radiodetail",(data)=>{
        this.arr = data.obj.arr
      })
    },
    data(){
      return{
        arr:[]
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
