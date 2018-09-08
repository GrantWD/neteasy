<template>
    <div class="RankingGUList">
      <p class="RankingGUListPOne">{{brrlist.txtone}}</p>
      <div class="RankingGUListBox">
        <div v-for="brrdellist in brrlist.brrdel" :brrdellist="brrdellist"  :key="brrdellist.index">
          <img :src="brrdellist.imgSrc13" alt=""/>
          <p>{{brrdellist.txtconone}}</p>
        </div>
        <!--<div>-->
          <!--<img :src="brrdellist.imgSrc14" alt=""/>-->
          <!--<p>{{brrdellist.txtcontwo}}</p>-->
        <!--</div>-->
        <!--<div>-->
          <!--<img :src="brrdellist.imgSrc15" alt=""/>-->
          <!--<p>{{brrdellist.txtconthree}}</p>-->
        <!--</div>-->
      </div>
    </div>
</template>

<script>
    export default {
        name: "RankingGUList",
        props:{
          brrlist:Object
        }
    }
</script>

<style scoped lang="scss">
  .RankingGUList{
    width:100%;
    display:flex;
    flex-direction: column;
    box-sizing: border-box;
    padding:0 0.06rem;
    margin-top:0.2rem;
  }
  .RankingGUListPOne{
    font-size:0.16rem;
    color:#38393b;
    margin-left:0.03rem;
    line-height:0.51rem;
    font-weight:900;
  }
  .RankingGUListBox{
    width:100%;
    display:flex;
    flex-wrap: wrap;
  }
  .RankingGUListBox div{
    width:32%;
    height:100%;
    flex-wrap: wrap;
    display:flex;
    margin-left:0.024rem;
    margin-right:0.024rem;
    margin-bottom:0.15rem;
    flex-direction: column;
  }
  .RankingGUListBox div img{
    width:1.19rem;
    height:1.19rem;
    margin-bottom:0.08rem;
    border:none;
  }
  .RankingGUListBox div p{
    font-size:0.12rem;
    color:#262729;
    line-height: 0.17rem;
  }
</style>
