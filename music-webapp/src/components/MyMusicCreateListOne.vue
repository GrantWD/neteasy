<template>
  <div class="cn1">
    <div class="left">
      <a href="#"><img src="img/t.jpg" alt=""></a>
      <div class="left-p">
        <p class="p1">长大了责任很重</p>
        <span class="p2"><i>Lv.1</i></span>
      </div>
    </div>
    <a class="right" href="#"><img src="img/2.jpg" alt=""><span>签到</span></a>
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
