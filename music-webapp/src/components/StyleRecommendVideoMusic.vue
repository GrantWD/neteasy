<template>
  <div class="StyleRecommendVideoMusic">
    <div class="StyleRecommendVideoMusicOne">
      <img class="StyleRecommendVideoMusicOne1Img" :src="sssB.Img" alt="">
      <div class="StyleRecommendVideoMusicOne1Div">
        <div class="StyleRecommendVideoMusicOne1DivOne">
          <p class="StyleRecommendVideoMusicOne1DivOne1P"><span>{{sssB.MusicClass}}</span><span>{{sssB.MusicName}}</span></p>
          <div class="StyleRecommendVideoMusicOne1DivOne1Div">
            <p class="StyleRecommendVideoMusicOne1DivOne2P"><img src="../../static/images/StyleRecommendVideo3.png" alt="">{{sssB.PlayNum}}</p>
            <p class="StyleRecommendVideoMusicOne1DivOne2P"><img src="../../static/images/StyleRecommendVideo4.png" alt="">{{sssB.CommentNum}}</p>
          </div>
        </div>
        <div class="StyleRecommendVideoMusicOne1DivTwo">
          <p class="StyleRecommendVideoMusicOne1DivTwo1P"><img :src="sssB.IdImg" alt="">{{sssB.IdName}}</p>
          <p class="StyleRecommendVideoMusicOne1DivTwo2P"><img src="../../static/images/StyleRecommendVideo5.png" alt=""></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "StyleRecommendVideoMusic",
        props:{
          sssB:Object
        }
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
    font-size: 0.15rem;
    line-height: 0.2rem;
    color: #29292b;
    font-weight: bold;
  }
  .StyleRecommendVideoMusicOne1DivOne1P span:nth-of-type(1){
    width: 0.25rem;
    height: 0.14rem;
    border: 1px solid #c06167;
    box-sizing: border-box;
    font-size: 0.08rem;
    color: #c06167;
    text-align: center;
    line-height: 0.14rem;
    margin-right: 0.04rem;
    font-weight: 100;
    margin-top: 0.03rem;
  }
  .StyleRecommendVideoMusicOne1DivOne1P span:nth-of-type(2){
    display: block;
    width: 1.91rem;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .StyleRecommendVideoMusicOne1DivOne2P{
    display: flex;
    align-items: center;
    font-size: 0.1rem;
    color: #9a9b9d;
    margin-top: 0.15rem;
    margin-right: 0.1rem;
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
  .StyleRecommendVideoMusicOne1DivOne1Div{
    display: flex;
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
