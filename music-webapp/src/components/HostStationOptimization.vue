<template>
  <div class="HostStationOptimization">
    <div class="HostStationOptimizationHeader">
      <p>今日优选</p>
      <a href="#">
        <img src="../../static/images/HostStationOptimization1.png" alt="">
        <span>换一换</span>
      </a>
    </div>
    <div class="HostStationOptimizationDj" v-for="brr in brr" :brr="brr">
      <img :src="brr.Img" alt="">
      <div class="HostStationOptimizationDjOne">
        <h5>{{brr.name}}</h5>
        <span class="HostStationOptimizationDjOne1Span">{{brr.program}}</span>
        <span class="HostStationOptimizationDjOne2Span">{{brr.introduce}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HostStationOptimization",
      data(){
          return{

          }
      },
      props:{
        brr:Array
      }
    }
</script>

<style scoped>
  .HostStationOptimization{
    background: #ffffff;
    width: 100%;
    padding: 0.06rem 0 0.2rem 0.06rem;
    box-sizing: border-box;
  }
  .HostStationOptimizationHeader{
    height: 0.44rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .HostStationOptimizationHeader p{
    font-size: 0.16rem;
    color: #323233;
    font-weight: bold;
  }
  .HostStationOptimizationHeader a{
    display: flex;
    font-size: 0.055rem;
    color: #757677;
    align-items: center;
    margin-right: 0.1rem;
  }
  .HostStationOptimizationHeader a img{
    width: 0.06rem;
    height: 0.06rem;
    margin-right: 0.04rem;
  }
  .HostStationOptimizationDj{
    width: 100%;
    height: 1.06rem;
    padding: 0.03rem 0 0 0.06rem;
    box-sizing: border-box;
    display: flex;
  }
  .HostStationOptimizationDj img{
    width: 1rem;
    height: 1rem;
    margin-right: 0.1rem;
  }
  .HostStationOptimizationDjOne{
    width: 2.59rem;
    height: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #e2e3e4;
  }
  .HostStationOptimizationDjOne h5{
    font-size: 0.15rem;
    color: #323233;
    line-height: 0.37rem;
  }
  .HostStationOptimizationDjOne span{
    display: block;
    font-size: 0.12rem;
    color: #7d7e7f;
    line-height: 0.22rem;
  }
</style>
