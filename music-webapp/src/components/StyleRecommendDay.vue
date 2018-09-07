<template>
    <div class="StyleRecommendDay">
      <a href="#" v-for="StyleRecommendDay in StyleRecommendDay">
        <router-link :to="StyleRecommendDay.to">
          <div class="StyleRecommendDay1Div"><img :src="StyleRecommendDay.img" alt=""></div>
          <span class="StyleRecommendDay1Span">{{StyleRecommendDay.name}}</span>
        </router-link>
      </a>
    </div>
</template>

<script>
    export default {
        name: "StyleRecommendDay",
      data(){
          return{
            StyleRecommendDay:[
              {
                to:'',
                img:'../../static/images/StyleRecommendDay1.gif',
                name:'私人FM',
              },
              {
                to:'/DailySpecial',
                img:'../../static/images/StyleRecommendDay2.gif',
                name:'每日推荐',
              },
              {
                to:'MusicList',
                img:'../../static/images/StyleRecommendDay3.gif',
                name:'歌单',
              },
              {
                to:'',
                img:'../../static/images/StyleRecommendDay4.gif',
                name:'排行榜',
              },
            ]
          }
      },
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
    border-bottom: 1px solid #dddee0;
    background: #ffffff;
  }
  .StyleRecommendDay1Div{
    width: 0.5rem;
    height: 0.5rem;
    background: #fd4b3f;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .StyleRecommendDay1Div img{
    width: 0.27rem;
    height: 0.27rem;
  }
  .StyleRecommendDay1Span{
    font-size: 0.12rem;
    color: #262729;
    margin-top: 0.07rem;
    text-align: center;
    width: 100%;
    display: block;
  }
</style>
