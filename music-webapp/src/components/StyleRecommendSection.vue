<template>
  <div class="StyleRecommendSection">
    <StyleRecommendSwiper></StyleRecommendSwiper>
    <StyleRecommendDay></StyleRecommendDay>
  </div>
</template>

<script>
  import StyleRecommendSwiper from './StyleRecommendSwiper'
  import StyleRecommendDay from './StyleRecommendDay'
    export default {
        name: "StyleRecommendSection",
      components:{
        StyleRecommendSwiper,
        StyleRecommendDay,
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
