<template>
    <div class="RadioClassDetailBlock">
      <img :src="imgSrc9" alt=""/>
      <p>{{tit4}}</p>
    </div>
</template>

<script>
    export default {
        name: "RadioClassDetailBlock",
        data(){
          return{
            imgSrc9:'../../static/images/ajClBook.png',
            tit4:'有声书'
          }
        }
    }
</script>

<style scoped lang="scss">
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
</style>
