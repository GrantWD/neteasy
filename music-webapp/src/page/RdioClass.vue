<template>
  <div class="RadioClass">
    <MyMusicHeader :Header="Header"></MyMusicHeader>
    <div class="RadioClassBox">
        <RadioClassHotClassify v-for="classifyarr in arr" :key="classifyarr.index" :classifyarr="classifyarr"></RadioClassHotClassify>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import MyMusicHeader from '../components/MyMusicHeader'
  import RadioClassHotClassify from '../components/RadioClassHotClassify'
  import Footer from '../components/Footer'
  export default {
    name: 'HelloWorld',
    components:{
      MyMusicHeader,
      RadioClassHotClassify,
      Footer
    },
    created(){
      $.get("http://localhost:3000/radioclass",(data)=>{
        this.arr = data.obj.arr
      })
    },
    data(){
      return {
        arr:[],
        Header:{
          ord: "电台分类",
          imgSrc1: '../../static/images/aj_cloud.png',
          imgSrc2: '../../static/images/aj_rank.png'
        }
      }
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
    height:100%;
    flex:1;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  body{
    height:100%;
  }
</style>
