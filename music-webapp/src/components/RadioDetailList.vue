<template>
    <div class="RadioDetailList">
      <img class="RadioDetailListImg" :src="ord.imgSrc1" alt=""/>
      <div class="RadioDetailListBox">
        <p>{{ord.tit1}}</p>
        <p>{{ord.text1}}</p>
        <p>{{ord.dec1}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RadioDetailList",
        props:{
          ord:Object
        }

    }
</script>

<style scoped lang="scss">
  .RadioDetailList{
    width:100%;
    height:1.26rem;
    display:flex;
    box-sizing: border-box;
    padding-top:0.03rem;
    padding-left:0.06rem;
  }
  .RadioDetailListImg{
    width:1.23rem;
    height:1.23rem;
    margin-right:0.1rem;
  }
  .RadioDetailListBox{
    width:2.36rem;
    height:100%;
    border-bottom:0.005rem solid #e2e3e4;
  }
  .RadioDetailListBox :nth-child(1){
    font-size:0.13rem;
    color:#323233;
    margin-top:0.32rem;
    margin-bottom:0.17rem;
    font-weight:900;
  }
  .RadioDetailListBox :nth-child(2){
    font-size:0.11rem;
    color:#7d7e7f;
    margin-bottom:0.08rem;
  }
  .RadioDetailListBox :nth-child(3){
    font-size:0.11rem;
    color:#7d7e7f;
  }
</style>
