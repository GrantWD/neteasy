<template>
    <div class="StyleRecommendDay">
      <a href="#">
        <div><img src="../../static/images/StyleRecommendDay1.gif" alt=""></div>
        <span>私人FM</span>
      </a>
      <a href="#">
        <div><img src="../../static/images/StyleRecommendDay2.gif" alt=""></div>
        <span>每日推荐</span>
      </a>
      <a href="#">
        <div><img src="../../static/images/StyleRecommendDay3.gif" alt=""></div>
        <span>歌单</span>
      </a>
      <a href="#">
        <div><img src="../../static/images/StyleRecommendDay4.gif" alt=""></div>
        <span>排行榜</span>
      </a>
    </div>
</template>

<script>
    export default {
        name: "StyleRecommendDay"
    }
</script>

<style scoped>
  .StyleRecommendDay{
    height: 1.39rem;
    padding-top: 0.35rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .StyleRecommendDay a div{
    width: 0.5rem;
    height: 0.5rem;
    background: #fd4b3f;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .StyleRecommendDay a div img{
    width: 0.27rem;
    height: 0.27rem;
  }
  .StyleRecommendDay a span{
    font-size: 0.12rem;
    color: #262729;
    margin-top: 0.07rem;
    text-align: center;
    width: 100%;
    display: block;
  }
</style>
