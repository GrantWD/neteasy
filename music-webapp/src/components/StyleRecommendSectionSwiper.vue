<template>
  <div class="StyleRecommendSectionSwiper">
    <div class="fy">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><StyleRecommendSection></StyleRecommendSection></div>
        <div class="swiper-slide"><HostStationSection></HostStationSection></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import StyleRecommendSection from './StyleRecommendSection'
  import HostStationSection from './HostStationSection'
  export default {
    name: "StyleRecommendSectionSwiper",
    mounted(){
      var mySwiperAAA = new Swiper ('.fy', {
        autoHeight: true,
      })
    },
    components:{
      StyleRecommendSection,
      HostStationSection,
    }
  }
</script>

<style scoped>
  .StyleRecommendSectionSwiper{
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .fy{
    overflow: hidden;
  }
</style>
