<template>
  <div class="StyleRecommendVideoMusic">
    <div class="StyleRecommendVideoMusicOne">
      <img class="StyleRecommendVideoMusicOne1Img" src="../../static/images/StyleRecommendVideoMusic1.png" alt="">
      <div class="StyleRecommendVideoMusicOne1Div">
        <div class="StyleRecommendVideoMusicOne1DivOne">
          <p class="StyleRecommendVideoMusicOne1DivOne1P"><span>单曲</span>丑八怪</p>
          <p class="StyleRecommendVideoMusicOne1DivOne2P"><img src="../../static/images/StyleRecommendVideo4.png" alt="">69166</p>
        </div>
        <div class="StyleRecommendVideoMusicOne1DivTwo">
          <p class="StyleRecommendVideoMusicOne1DivTwo1P"><img src="../../static/images/StyleRecommendVideoMusic2.png" alt="">薛之谦</p>
          <p class="StyleRecommendVideoMusicOne1DivTwo2P"><img src="../../static/images/StyleRecommendVideo5.png" alt=""></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "StyleRecommendVideoMusic"
    }
</script>

<style scoped>
  .StyleRecommendVideoMusic{
    width: 100%;
    height: 1.49rem;
    background: #ffffff;
    padding: 0.15rem 0.06rem;
    box-sizing: border-box;
    margin-bottom: 0.05rem;
  }
  .StyleRecommendVideoMusicOne{
    width: 100%;
    height: 100%;
    display: flex;
  }
  .StyleRecommendVideoMusicOne1Img{
    width: 1.19rem;
    height: 1.19rem;
    margin-right: 0.1rem;
  }
  .StyleRecommendVideoMusicOne1Div{
    width: 2.34rem;
    height: 100%;
  }
  .StyleRecommendVideoMusicOne1DivOne{
    width: 100%;
    height: 0.815rem;
    border-bottom: 1px solid #dddee0;
    box-sizing: border-box;
    padding-top: 0.06rem;
  }
  .StyleRecommendVideoMusicOne1DivOne1P{
    display: flex;
    align-items: center;
    font-size: 0.15rem;
    color: #29292b;
    font-weight: bold;
  }
  .StyleRecommendVideoMusicOne1DivOne1P span{
    width: 0.245rem;
    height: 0.14rem;
    border: 1px solid #c06167;
    box-sizing: border-box;
    font-size: 0.09rem;
    color: #c06167;
    text-align: center;
    line-height: 0.14rem;
    margin-right: 0.04rem;
    font-weight: 100;
  }
  .StyleRecommendVideoMusicOne1DivOne2P{
    display: flex;
    font-size: 0.1rem;
    color: #9a9b9d;
    margin-top: 0.15rem;
  }
  .StyleRecommendVideoMusicOne1DivOne2P img{
    width: 0.12rem;
    height: 0.12rem;
    margin-right: 0.04rem;
  }
  .StyleRecommendVideoMusicOne1DivTwo{
    width: 100%;
    height: 0.375rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .StyleRecommendVideoMusicOne1DivTwo1P{
    display: flex;
    align-items: center;
    font-size: 0.12rem;
    color: #222224;
  }
  .StyleRecommendVideoMusicOne1DivTwo1P img{
    width: 0.26rem;
    height: 0.26rem;
    margin-right: 0.05rem;
  }
  .StyleRecommendVideoMusicOne1DivTwo2P img{
    width: 0.12rem;
    height: 0.12rem;
  }
</style>
