<template>
  <div class="StyleRecommendMusic">
    <a class="StyleRecommendMusic1A" href="#">
      {{sssA.title}}
      <img src="../../static/images/StyleRecommendMusic1.png" alt="">
    </a>
    <ul class="StyleRecommendMusic1Ul">
        <li v-for="sss in sssA.arr">
          <router-link :to="sss.to">
            <img :src="sss.url" alt="">
            <span class="StyleRecommendMusic1Ul1Span">{{sss.name}}</span>
            <div>
              <img src="../../static/images/erji30×30.png" alt="">
              <span>{{sss.PlayNum}}</span>
            </div>
          </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "StyleRecommendMusic",
      data(){
          return{

          }
      },
      props:{
          sssA:Object
      }
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
    position: relative;
  }
  .StyleRecommendMusic1Ul li img{
    width: 100%;
    height: 1.19rem;
    border-radius: 0.02rem;
    margin-right: 0.02rem;
  }
  .StyleRecommendMusic1Ul1Span{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .StyleRecommendMusic1Ul li div{
    position: absolute;
    top: 0.02rem;
    right: 0.1rem;
    display: flex;
  }
  .StyleRecommendMusic1Ul li div span{
    font-size: 0.12rem;
    color: #ffffff;
  }
  .StyleRecommendMusic1Ul li div img{
    width: 0.15rem;
    height: 0.15rem;
  }
</style>
