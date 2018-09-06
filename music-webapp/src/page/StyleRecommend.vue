<template>
  <div class="hello">
    <StyleRecommendHeader></StyleRecommendHeader>
    <StyleRecommendStyle></StyleRecommendStyle>
    <StyleRecommendSectionSwiper></StyleRecommendSectionSwiper>
    <Footer></Footer>
  </div>
</template>

<script>
  import StyleRecommendHeader from '../components/StyleRecommendHeader'
  import StyleRecommendStyle from '../components/StyleRecommendStyle'
  import StyleRecommendSectionSwiper from '../components/StyleRecommendSectionSwiper'
  import Footer from '../components/Footer'
export default {
  name: 'StyleRecommend',
  data () {
    return {
      msg: 'vuew2x'
    }
  },
  components:{
    StyleRecommendHeader,
    StyleRecommendStyle,
    StyleRecommendSectionSwiper,
    Footer,
  }
}
</script>


<style scoped>
  .hello{
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f1f2f4;
  }
</style>
