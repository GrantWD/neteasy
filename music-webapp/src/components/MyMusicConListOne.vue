<template>
  <div class="MyMusicConListOne">
    <img class="MyMusicConListAjMusic" :src="obj.imgSrc3" alt=""/>
    <div class="MyMusicConListBox">
      <p>{{ obj.text1 }}</p>
      <span>{{ obj.tit1 }}</span>
      <img :src="obj.imgSrc4" alt=""/>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MyMusicConListOne",
        props: {
          obj:Object
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
    white-space:nowrap;
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
