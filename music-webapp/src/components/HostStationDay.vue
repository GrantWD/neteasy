<template>
  <div class="HostStationDay">
    <a href="#" v-for="HostStationDay in HostStationDay">
      <router-link :to="HostStationDay.to">
        <div class="HostStationDay1Div"><img :src="HostStationDay.img" alt=""></div>
        <span class="HostStationDay1Span">{{HostStationDay.name}}</span>
      </router-link>
    </a>
  </div>
</template>

<script>
  export default {
    name: "HostStationDay",
    data(){
      return{
        HostStationDay:[
          {
            to:'/RdioClass',
            img:'../../static/images/StyleRecommendDay1.gif',
            name:'电台分类',
          },
          {
            to:'',
            img:'../../static/images/StyleRecommendDay2.gif',
            name:'电台排行',
          },
          {
            to:'',
            img:'../../static/images/StyleRecommendDay3.gif',
            name:'付费精品',
          },
          {
            to:'',
            img:'../../static/images/StyleRecommendDay4.gif',
            name:'小冰电台',
          },
        ]
      }
    },
  }
</script>

<style scoped>
  .HostStationDay{
    height: 1.39rem;
    padding-top: 0.35rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #dddee0;
    background: #ffffff;
  }
  .HostStationDay1Div{
    width: 0.5rem;
    height: 0.5rem;
    background: #fd4b3f;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .HostStationDay1Div img{
    width: 0.27rem;
    height: 0.27rem;
  }
  .HostStationDay1Span{
    font-size: 0.12rem;
    color: #262729;
    margin-top: 0.07rem;
    text-align: center;
    width: 100%;
    display: block;
  }
</style>
