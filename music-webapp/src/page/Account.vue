<template>
  <div class="hello">
    <div class="Index">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'vuew2x'
    }
  },
  mounted() {
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop: true,

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable :true,
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
}
</script>


<style scoped>
  /*@import'../assets/css/swiper-4.3.5.min.css';*/
  .swiper-container{
    width: 500px;
    height: 200px;
  }
</style>
