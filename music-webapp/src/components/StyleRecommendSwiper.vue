<template>
  <div class="StyleRecommendSwiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="http://p1.music.126.net/MDae7AehVdzydohlhZoP1Q==/109951163532900237.jpg" alt=""></div>
        <div class="swiper-slide"><img src="http://p1.music.126.net/x_GzdJGXtR8dAeokfdeJpw==/109951163531399705.jpg" alt=""></div>
        <div class="swiper-slide"><img src="http://p1.music.126.net/XqafGbZRHeXlskleoKV1xA==/109951163532896927.jpg" alt=""></div>
        <div class="swiper-slide"><img src="http://p1.music.126.net/_kncwTPVMQrZ-F9z6XYHrw==/109951163532901204.jpg" alt=""></div>
        <div class="swiper-slide"><img src="http://p1.music.126.net/Bmim16r0aF94-FiUC-lamg==/109951163532899349.jpg" alt=""></div>
        <div class="swiper-slide"><img src="http://p1.music.126.net/fUjZDaxxY5l88Fu1fwtzqQ==/109951163532909085.jpg" alt=""></div>
        <div class="swiper-slide"><img src="http://p1.music.126.net/_s2smCZqnkUet2dAqO2uyQ==/109951163532910040.jpg" alt=""></div>
        <div class="swiper-slide"><img src="http://p1.music.126.net/sPtxm3THc8-R6AwVZl09_w==/109951163532905779.jpg" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
    export default {
        name: "StyleRecommendSwiper",
      mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal',
          loop: true,

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
          speed:300,
          autoplay : {
            delay:3000,
            disableOnInteraction: false,
          },
        })
      }
    }
</script>

<style scoped>
  .StyleRecommendSwiper{
    width: 100%;
    height: 1.06rem;
    position: relative;
    background: #d93c33;
  }
  .swiper-container{
    width: 100%;
    height: 1.41rem;
    position: absolute;
    top: 0;
    left: 0;
  }
  .swiper-slide{
    padding: 0 0.06rem;
    box-sizing: border-box;
  }
  .swiper-slide img{
    width: 100%;
    height: 1.41rem;
    border-radius: 0.07rem;
  }
</style>
