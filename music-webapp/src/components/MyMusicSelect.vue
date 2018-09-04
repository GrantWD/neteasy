<template>
    <div class="MyMusicSelect">
      <img class="MyMusicSelectImg1" :src="imgSrc5" alt="">
      <p class="MyMusicSelectP">我创建的歌单(<span>2</span>)</p>
      <img :src="imgSrc6" alt="">
    </div>
</template>

<script>
    export default {
        name: "MyMusicSelect",
        data(){
          return{
            imgSrc5:'../../static/images/ajError.png',
            imgSrc6:'../../static/images/ajDot.png'
          }
        }
    }
</script>

<style scoped>
  .MyMusicSelect{
    width:100%;
    height:0.3rem;
    box-sizing: border-box;
    padding:0.1rem;
    display:flex;
    background:#eeeff0;
  }
  .MyMusicSelectImg1{
    width:0.11rem;
    height:0.06rem;
    align-self: center;
    margin-right:0.11rem;
  }
  .MyMusicSelect :nth-child(3){
    width:0.18rem;
    height:0.03rem;
    align-self: center;
  }
  .MyMusicSelectP{
    font-size:0.11rem;
    color:#5f6061;
    align-self: center;
    margin-right:2.10rem;
  }
  .MyMusicSelectP span{
    text-align: center;
  }
</style>
