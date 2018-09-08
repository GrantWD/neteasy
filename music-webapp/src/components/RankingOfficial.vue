<template>
    <div class="RankingOfficial">
      <p class="RankingOfficialPone">{{arrlist.titone}}</p>
      <div v-for="arrdellist in arrlist.arrdel" :arrdellist="arrdellist"  :key="arrdellist.index" class="RankingOfficialBox">
        <img :src="arrdellist.imgSrc12" alt=""/>
        <div  class="RankingOfficialBoxList">
          <p>{{arrdellist.con1}}</p>
          <p>{{arrdellist.con2}}</p>
          <p>{{arrdellist.con3}}</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RankingOfficial",
        props:{
          arrlist:Object
        },
        data(){
          return{
            // titone:'云音乐官方榜'
          }
        }
    }
</script>

<style scoped lang="scss">
  .RankingOfficial{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    box-sizing: border-box;
    padding:0 0.06rem;
  }
  .RankingOfficialPone{
    font-size:0.16rem;
    color:#38393b;
    margin-left:0.03rem;
    line-height:0.51rem;
    font-weight:900;
  }
  .RankingOfficialBox{
    width:100%;
    height:1.23rem;
    display:flex;
    box-sizing: border-box;
    padding-right:0.09rem;
    margin-bottom:0.03rem;
  }
  .RankingOfficialBox img{
    width:1.23rem;
    height:1.23rem;
    margin-right:0.09rem;
  }
  .RankingOfficialBoxList{
    width:2.2rem;
    height:1.22rem;
    box-sizing: border-box;
    padding-top:0.22rem;
    border-bottom:0.005rem solid #ededed;
  }
  .RankingOfficialBoxList p{
    width:100%;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size:0.13rem;
    color:#5e5f61;
    margin-bottom:0.21rem;
  }
</style>
