<template>
  <div class="MyMusic">
    <MyMusicHeader></MyMusicHeader>
    <div class="box">
      <div>
        <MyMusicConList></MyMusicConList>
        <MyMusicSelect></MyMusicSelect>
        <MyMusicCreateList></MyMusicCreateList>
        <MyMusicSelect></MyMusicSelect>
        <MyMusicCreateList></MyMusicCreateList>
        <MyMusicSelect></MyMusicSelect>
        <MyMusicCreateList></MyMusicCreateList>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import MyMusicHeader from '../components/MyMusicHeader'
  import MyMusicConList from '../components/MyMusicConList'
  import MyMusicSelect from '../components/MyMusicSelect'
  import MyMusicCreateList from '../components/MyMusicCreateList'
  import Footer from '../components/Footer'
  export default {
    name: 'HelloWorld',
    components: {
      MyMusicHeader,
      MyMusicConList,
      MyMusicSelect,
      MyMusicCreateList,
      Footer
    }
}
</script>

 
<style scoped lang="scss">
  .MyMusic{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
  }


  body{
    height:100%;
  }
  .box{
    display:flex;
    height:100%;
    flex-direction: column;
    flex:1;
    overflow-y: scroll;
  }
</style>
