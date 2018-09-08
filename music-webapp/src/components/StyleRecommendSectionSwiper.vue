<template>
  <div class="StyleRecommendSectionSwiper">
    <div class="fy">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><StyleRecommendSection></StyleRecommendSection></div>
        <div class="swiper-slide"><HostStationSection></HostStationSection></div>
      </div>

      <div class="fy-pagination"></div>
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
        pagination: {
          el: '.fy-pagination',
          clickable :true,
          renderBullet: function (index, className) {
            if(index=='0'){
              return '<span style="display: table;background: none;width: 0.6rem;font-size: 0.14rem;color: #ffffff;" class="' + className + '">' + "个性推荐" + '</span>';
            }else{
              return '<span style="display: table;background: none;width: 0.6rem;font-size: 0.14rem;color: #ffffff;" class="' + className + '">' + "主播电台" + '</span>';
            }
          },
        },
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
    position: relative;
  }
  .fy-pagination{
    position: absolute;
    top:0;
    left: 0;
    z-index: 1;
    display: flex;
    width: 100%;
    height: 0.47rem;
    justify-content: space-around;
    align-items: center;
  }
</style>
