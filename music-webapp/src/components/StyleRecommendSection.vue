<template>
  <div class="StyleRecommendSection">
    <StyleRecommendSwiper></StyleRecommendSwiper>
    <StyleRecommendDay></StyleRecommendDay>
    <StyleRecommendMusic></StyleRecommendMusic>
    <StyleRecommendMusic></StyleRecommendMusic>
    <StyleRecommendVideo></StyleRecommendVideo>
    <StyleRecommendVideoMusic></StyleRecommendVideoMusic>
    <StyleRecommendVideoMusic></StyleRecommendVideoMusic>
    <StyleRecommendVideoMusic></StyleRecommendVideoMusic>
  </div>
</template>

<script>
  import StyleRecommendSwiper from './StyleRecommendSwiper'
  import StyleRecommendDay from './StyleRecommendDay'
  import StyleRecommendMusic from './StyleRecommendMusic'
  import StyleRecommendVideo from './StyleRecommendVideo'
  import StyleRecommendVideoMusic from './StyleRecommendVideoMusic'
    export default {
        name: "StyleRecommendSection",
      components:{
        StyleRecommendSwiper,
        StyleRecommendDay,
        StyleRecommendMusic,
        StyleRecommendVideo,
        StyleRecommendVideoMusic,
      }
    }
</script>

<style scoped>
  .StyleRecommendSection{
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
