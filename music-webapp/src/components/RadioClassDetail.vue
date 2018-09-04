<template>
    <div class="RadioClassDetail">
      <RadioClassDetailBlock></RadioClassDetailBlock>
      <img class="RadioClassDetailImgLine" :src="imgSrc11" alt="">
      <RadioClassDetailBlockF></RadioClassDetailBlockF>
    </div>
</template>

<script>
    import RadioClassDetailBlock from './RadioClassDetailBlock'
    import RadioClassDetailBlockF from './RadioClassDetailBlockF'
    export default {
        name: "RadioClassDetail",
        components:{
          RadioClassDetailBlock,
          RadioClassDetailBlockF
        },
        data(){
          return{
            imgSrc11:'../../static/images/ajClImg.png'
          }
        }
    }
</script>

<style scoped>
.RadioClassDetail{
  width:100%;
  height:0.49rem;
  display:flex;
  padding:0 0.1rem;
  border-bottom:0.005rem solid #e2e3e4;
  background: #ffffff;
}
  .RadioClassDetailImgLine{
    width:0.005rem;
    height:0.3rem;
    margin:0 0.01rem;
    align-self: center;
  }
</style>
