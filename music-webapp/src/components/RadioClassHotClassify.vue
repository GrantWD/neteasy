<template>
    <div class="RadioClassHotClassify">
      <p>{{classifyarr.tit3}}</p>
      <div class="RadioClassDetail"  v-for="classifyarrdel in classifyarr.arrdel">
        <div class="RadioClassDetailBlock">
          <img :src="classifyarrdel.imgSrc9" alt=""/>
          <p>{{classifyarrdel.tit4}}</p>
        </div>
        <img class="RadioClassDetailImgLine" :src="classifyarr.imgSrc11" alt="">
        <div class="RadioClassDetailBlockF">
          <img :src="classifyarrdel.imgSrc10" alt=""/>
          <p>{{classifyarrdel.tit5}}</p>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: "RadioClassHotClassify",
        props:{
          classifyarr:Object
      }
    }
</script>

<style scoped lang="scss">
  .RadioClassHotClassify{
    width:100%;
    padding: 0 0.1rem;
    border-bottom:0.005rem solid #e2e3e4;
  }
  .RadioClassHotClassify p{
    font-size:0.16rem;
    color:#323233;
    text-align: center;
    line-height:0.51rem;
    /*border-bottom:0.005rem solid #ededed;*/
  }

  .RadioClassDetail{
    width:100%;
    height:0.49rem;
    display:flex;
    padding:0 0.1rem;
    border-bottom:0.005rem solid #e2e3e4;
  }
  .RadioClassDetailImgLine{
    width:0.005rem;
    height:0.3rem;
    margin:0 0.05rem;
    align-self: center;
  }

  .RadioClassDetailBlock{
    width:1.77rem;
    height:0.49rem;
    display:flex;
  }
  .RadioClassDetailBlock img{
    width:0.32rem;
    height:0.32rem;
    align-self:center;
    margin-left:0.17rem;
    margin-right:0.11rem;
  }
  .RadioClassDetailBlock p{
    font-size:0.15rem;
    color:#363637;
    align-self:center;
  }

  .RadioClassDetailBlockF{
    width:1.77rem;
    height:0.49rem;
    display:flex;
  }
  .RadioClassDetailBlockF img{
    width:0.32rem;
    height:0.32rem;
    align-self:center;
    margin-left:0.35rem;
    margin-right:0.11rem;
  }
  .RadioClassDetailBlockF p{
    font-size:0.15rem;
    color:#363637;
    align-self:center;
  }
</style>
