<template>
  <div class="hello">
    <StyleRecommendHeader></StyleRecommendHeader>
    <StyleRecommendStyle></StyleRecommendStyle>
    <HostStationSection></HostStationSection>
    <Footer></Footer>
  </div>
</template>

<script>
  import StyleRecommendHeader from '../components/StyleRecommendHeader'
  import StyleRecommendStyle from '../components/StyleRecommendStyle'
  import HostStationSection from '../components/HostStationSection'
  import Footer from '../components/Footer'
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  components:{
    StyleRecommendHeader,
    StyleRecommendStyle,
    HostStationSection,
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
