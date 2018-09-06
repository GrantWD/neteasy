<template>
  <div class="StyleRecommendStyle">
    <div class="StyleRecommendStyleOne">
      <div class="StyleRecommendStyleOneHeader">
        <router-link to="/"><a href="#">个性推荐</a></router-link>
        <router-link to="/HostStation"><a href="#">主播电台</a></router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "StyleRecommendStyle",
    }
</script>

<style scoped>
  .StyleRecommendStyle{
    width: 100%;
    box-sizing: border-box;
    background: #d93c33;
  }
  .StyleRecommendStyleOne{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .StyleRecommendStyleOneHeader{
    width: 100%;
    height: 0.47rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 0.06rem;
    box-sizing: border-box;
  }
  .StyleRecommendStyleOneHeader a{
    font-size: 0.14rem;
    color: #ffffff;
  }
</style>
