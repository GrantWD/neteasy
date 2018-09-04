<template>
  <div class="MyMusicConListOne">
    <img class="MyMusicConListAjMusic" :src="imgSrc3" alt="">
    <div class="MyMusicConListBox">
      <p>{{text1}}</p>
      <span>{{tit1}}</span>
      <img :src="imgSrc4" alt="">
    </div>
  </div>

</template>

<script>
    export default {
        name: "MyMusicConListOne",
        data(){
          return {
            text1:"本地音乐",
            tit1:"2",
            imgSrc3:"../../static/images/ajMusic.png",
            imgSrc4:'../../static/images/ajRightError.png'
          }
        }

    }
</script>

<style scoped>
  .MyMusicConListOne{
    width:100%;
    height:0.55rem;
    box-sizing: border-box;
    padding:0.1rem;
    display:flex;
  }
 .MyMusicConListAjMusic{
   width:0.32rem;
   height:0.32rem;
   align-self: center;
   margin-right:0.2rem;
 }
  .MyMusicConListBox{
    width:2.95rem;
    height:0.54rem;
    display:flex;
    align-self: center;
    border-bottom:0.005rem solid #e2e3e4;
  }
  .MyMusicConListBox p{
    font-size:0.16rem;
    color:#323233;
    align-self: center;
    margin-right:2.07rem;
  }
  .MyMusicConListBox span{
    font-size:0.1rem;
    color:#979798;
    align-self:center;
    margin-right:0.08rem;
  }
  .MyMusicConListBox img{
    width:0.08rem;
    height:0.14rem;
    align-self:center;
  }
</style>
