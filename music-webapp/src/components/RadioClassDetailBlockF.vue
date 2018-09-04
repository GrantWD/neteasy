<template>
  <div class="RadioClassDetailBlockF">
    <img :src="imgSrc10" alt=""/>
    <p>{{tit5}}</p>
  </div>
</template>

<script>
  export default {
    name: "RadioClassDetailBlockF",
    data(){
      return{
        imgSrc10:'../../static/images/ajClBulb.png',
        tit5:'知识技能'
      }
    }
  }
</script>

<style scoped lang="scss">
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
