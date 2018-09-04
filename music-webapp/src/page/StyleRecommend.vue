<template>
  <div class="hello">
    <StyleRecommendHeader></StyleRecommendHeader>
    <StyleRecommendStyle></StyleRecommendStyle>
    <StyleRecommendSection></StyleRecommendSection>
  </div>
</template>

<script>
  import StyleRecommendHeader from '../components/StyleRecommendHeader'
  import StyleRecommendStyle from '../components/StyleRecommendStyle'
  import StyleRecommendSection from '../components/StyleRecommendSection'
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  components:{
    StyleRecommendHeader,
    StyleRecommendStyle,
    StyleRecommendSection,
  }
}
</script>


<style scoped>
  .hello{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
