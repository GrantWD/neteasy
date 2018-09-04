<template>
    <div class="MyMusicCreateListOne">
      <img class="MyMusicCreateListOneImg" :src="imgSrc8">
      <div class="MyMusicCreateListOneBox">
        <p>{{tit2}}</p>
        <p>{{text2}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MyMusicCreateListOne",
        data(){
          return{
            imgSrc8:'../../static/images/ajMuHeart.png',
            tit2:'我喜欢的音乐',
            text2:'一首'
          }
        }
    }
</script>

<style scoped lang="scss">
  .MyMusicCreateListOne{
    width:100%;
    height:0.6rem;
    box-sizing: border-box;
    padding:0.1rem;
    display:flex;
  }
  .MyMusicCreateListOneImg{
    width:0.54rem;
    height:0.54rem;
    align-self: center;
  }
  .MyMusicCreateListOneBox{
    width:3.05rem;
    height:0.59rem;
    align-self: center;
    display:flex;
    flex-direction: column;
    margin-left:0.1rem;
    border-bottom:0.005rem solid #e2e3e4;
  }
  .MyMusicCreateListOneBox :nth-child(1){
    font-size:0.16rem;
    color:#323233;
    margin-top:0.13rem;
    margin-bottom:0.08rem;
  }
  .MyMusicCreateListOneBox :nth-child(2){
    font-size:0.11rem;
    color:#7d7e7f;
  }
</style>
