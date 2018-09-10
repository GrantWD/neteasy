<template>
  <div class="MyMusic">
    <MyMusicHeader :Header="Header"></MyMusicHeader>
    <div class="box">
      <div>
        <MyMusicConList></MyMusicConList>
        <MyMusicCreateList v-for="listarr in arr" :key="listarr.index" :listarr="listarr"></MyMusicCreateList>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import MyMusicHeader from '../components/MyMusicHeader'
  import MyMusicConList from '../components/MyMusicConList'
  import MyMusicCreateList from '../components/MyMusicCreateList'
  import Footer from '../components/Footer'
  export default {
    name: 'HelloWorld',
    components: {
      MyMusicHeader,
      MyMusicConList,
      MyMusicCreateList,
      Footer
    },
    created(){
      $.get("http://localhost:3000/mymusic",(data)=>{
        this.arr = data.obj.arr
      })
    },
    data(){
      return{
        arr:[],
        Header:{
          ord: "我的音乐",
          imgSrc1: '../../static/images/aj_cloud.png',
          imgSrc2: '../../static/images/aj_rank.png'
        }
      }
    }
}
</script>

 
<style scoped lang="scss">
  .MyMusic{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    overflow-y: scroll;
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
