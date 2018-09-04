<template>
  <div class="RadioClass">
    <MyMusicHeader></MyMusicHeader>
    <div class="RadioClassBox">
      <div>
        <RadioClassHotClassify></RadioClassHotClassify>
        <RadioClassDetail></RadioClassDetail>
        <RadioClassDetail></RadioClassDetail>
        <RadioClassDetail></RadioClassDetail>
        <RadioClassHotClassify></RadioClassHotClassify>
        <RadioClassDetail></RadioClassDetail>
        <RadioClassDetail></RadioClassDetail>
        <RadioClassDetail></RadioClassDetail>
        <RadioClassDetail></RadioClassDetail>
        <RadioClassDetail></RadioClassDetail>
        <RadioClassDetail></RadioClassDetail>
        <RadioClassDetail></RadioClassDetail>
        <RadioClassDetail></RadioClassDetail>
        <RadioClassDetail></RadioClassDetail>
        <RadioClassDetail></RadioClassDetail>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import MyMusicHeader from '../components/MyMusicHeader'
  import RadioClassHotClassify from '../components/RadioClassHotClassify'
  import RadioClassDetail from '../components/RadioClassDetail'
  import Footer from '../components/Footer'
  export default {
    name: 'HelloWorld',
    components:{
      MyMusicHeader,
      RadioClassHotClassify,
      RadioClassDetail,
      Footer
    }
  }
</script>

 
<style scoped lang="scss">
  .RadioClass{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
  }
  .RadioClassBox{
    display:flex;
    height:100%;
    flex-direction: column;
    flex:1;
    overflow-y: scroll;
  }
  body{
    height:100%;
  }
</style>
