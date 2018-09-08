<template>
  <div class="StyleRecommendVideo">
    <div class="StyleRecommendVideoOne">
      <div class="StyleRecommendVideoOne1Div"><img :src="sssC.Img" alt=""></div>
      <div class="StyleRecommendVideoOne2Div">
        <div class="StyleRecommendVideoOne2DivOne"><img :src="sssC.IdImg" alt=""><span>{{sssC.IdName}}</span></div>
        <div class="StyleRecommendVideoOne2DivTwo">
          <span><img src="../../static/images/StyleRecommendVideo3.png" alt="">{{sssC.PlayNum}}</span>
          <span><img src="../../static/images/StyleRecommendVideo4.png" alt="">{{sssC.CommentOrd}}</span>
          <span><img src="../../static/images/StyleRecommendVideo5.png" alt=""></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "StyleRecommendVideo",
      data(){
          return{
                // Img:'../../static/images/StyleRecommendVideo1.png',
                // IdImg:'../../static/images/StyleRecommendVideo2.png',
                // IdName:'之一w',
                // PlayNum:'21万',
                // CommentOrd:'248'
              }
          },
      props:{
        sssC:Object
      }
    }
</script>

<style scoped>
  .StyleRecommendVideo{
    margin-top: 0.05rem;
    background: #ffffff;
    width: 100%;
    margin-bottom: 0.05rem;
  }
  .StyleRecommendVideoOne{
    width: 100%;
    height: 2.56rem;
    padding: 0.06rem;
    box-sizing: border-box;
  }
  .StyleRecommendVideoOne1Div{
    width: 100%;
    height: 2.05rem;
  }
  .StyleRecommendVideoOne1Div img{
    width: 100%;
    height: 100%;
  }
  .StyleRecommendVideoOne2Div{
    width: 100%;
    height: 0.39rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .StyleRecommendVideoOne2DivOne{
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 0.12rem;
    color: #242527;
  }
  .StyleRecommendVideoOne2DivOne img{
    width: 0.31rem;
    height: 0.3rem;
  }
  .StyleRecommendVideoOne2DivTwo{
    width: 1.6rem;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .StyleRecommendVideoOne2DivTwo span{
    display: flex;
    align-items: center;
  }
  .StyleRecommendVideoOne2DivTwo img{
    width: 0.12rem;
    height: 0.12rem;
    margin-right: 0.03rem;
  }
</style>
