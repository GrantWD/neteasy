<template>
  <div class="StyleRecommendHeader">
    <div class="StyleRecommendHeaderOne">
      <img class="StyleRecommendHeaderImg" src="" alt="">
      <div class="StyleRecommendHeader1Div">
        <img src="" alt="">
        <input placeholder="有没有 最近很火哦" type="text">
      </div>
      <img class="StyleRecommendHeaderImg" src="" alt="">
    </div>
  </div>
  <!--img图片没有添加-->
</template>

<script>
    export default {
        name: "StyleRecommendHeader"
    }
</script>

<style scoped>
  .StyleRecommendHeader{
    width: 100%;
    height: 0.42rem;
    background: #d93c33;
    box-sizing: border-box;
    padding: 0 0.1rem;
  }
  .StyleRecommendHeaderOne{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .StyleRecommendHeaderImg{
    width: 0.32rem;
    height: 0.32rem;
  }
  .StyleRecommendHeader1Div{
    width: 2.67rem;
    height: 0.3rem;
    background: #df645f;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .StyleRecommendHeader1Div img{
    width: 0.16rem;
    height: 0.16rem;
    margin-right: 0.08rem;
  }
  .StyleRecommendHeader1Div input{
    background: none;
    width: 1.22rem;
    border: none;
    outline: none;
    color: #ffbbb2;
  }
</style>
