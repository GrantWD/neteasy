<template>
  <div class="StyleRecommendMusic">
    <a class="StyleRecommendMusic1A" href="#">
      推荐歌单
      <img src="../../static/images/StyleRecommendMusic1.png" alt="">
    </a>
    <ul class="StyleRecommendMusic1Ul">
      <li>
        <img src="../../static/images/StyleRecommendMusic2.jpg" alt="">
        <span>失落少年孤独心俱乐部</span>
      </li>
      <li>
        <img src="../../static/images/StyleRecommendMusic2.jpg" alt="">
        <span>失落少年孤独心俱乐部</span>
      </li>
      <li>
        <img src="../../static/images/StyleRecommendMusic2.jpg" alt="">
        <span>失落少年孤独心俱乐部</span>
      </li>
      <li>
        <img src="../../static/images/StyleRecommendMusic2.jpg" alt="">
        <span>失落少年孤独心俱乐部</span>
      </li>
      <li>
        <img src="../../static/images/StyleRecommendMusic2.jpg" alt="">
        <span>失落少年孤独心俱乐部</span>
      </li>
      <li>
        <img src="../../static/images/StyleRecommendMusic2.jpg" alt="">
        <span>失落少年孤独心俱乐部</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "StyleRecommendMusic"
    }
</script>

<style scoped>
  .StyleRecommendMusic{
    width: 100%;
    padding: 0 0.045rem;
    box-sizing: border-box;
    background: #ffffff;
  }
  .StyleRecommendMusic1A{
    width: 100%;
    height: 0.45rem;
    font-size: 0.16rem;
    color: #313234;
    display: flex;
    align-items: center;
  }
  .StyleRecommendMusic1A img{
    margin-left: 0.09rem;
    width: 0.08rem;
    height: 0.14rem;
  }
  .StyleRecommendMusic1Ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .StyleRecommendMusic1Ul li{
    width: 33.3333%;
    padding: 0 0.015rem;
    font-size: 0.13rem;
    color: #212224;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
  }
  .StyleRecommendMusic1Ul li img{
    width: 100%;
    height: 1.19rem;
    border-radius: 0.02rem;
  }
</style>
