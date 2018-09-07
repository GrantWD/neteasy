<template>
  <div class="MyMusicCreateList">
    <div class="MyMusicSelect">
      <img class="MyMusicSelectImg1" :src="listarr.imgSrc5" alt="">
      <p class="MyMusicSelectP">{{listarr.songlist}}(<span>{{listarr.songcount}}</span>)</p>
      <img :src="listarr.imgSrc6" alt="">
    </div>
    <div v-for="listarrdel in listarr.brr" class="MyMusicCreateListOne">
      <img class="MyMusicCreateListOneImg" :src="listarrdel.imgSrc8">
      <div class="MyMusicCreateListOneBox">
        <p>{{listarrdel.tit2}}</p>
        <p>{{listarrdel.text2}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MyMusicCreateList",
        props:{
          listarr:Object
        }


    }
</script>

<style scoped lang="scss">

  .MyMusicSelect{
    width:100%;
    height:0.3rem;
    box-sizing: border-box;
    padding:0.1rem;
    display:flex;
    background:#eeeff0;
  }
  .MyMusicSelectImg1{
    width:0.11rem;
    height:0.06rem;
    align-self: center;
    margin-right:0.11rem;
  }
  .MyMusicSelect :nth-child(3){
    width:0.18rem;
    height:0.03rem;
    align-self: center;
  }
  .MyMusicSelectP{
    width:100%;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    font-size:0.11rem;
    color:#5f6061;
    align-self: center;
    margin-right:2.10rem;
  }
  .MyMusicSelectP span{
    text-align: center;
  }
  .MyMusicCreateListOne{
    width:100%;
    height:0.6rem;
    box-sizing: border-box;
    padding:0.1rem;
    display:flex;
  }
  .MyMusicCreateListOneImg{
    width:0.54rem;
    height:0.54rem;
    align-self: center;
  }
  .MyMusicCreateListOneBox{
    width:3.05rem;
    height:0.59rem;
    align-self: center;
    display:flex;
    flex-direction: column;
    margin-left:0.1rem;
    border-bottom:0.005rem solid #e2e3e4;
  }
  .MyMusicCreateListOneBox :nth-child(1){
    font-size:0.16rem;
    color:#323233;
    margin-top:0.13rem;
    margin-bottom:0.08rem;
  }
  .MyMusicCreateListOneBox :nth-child(2){
    font-size:0.11rem;
    color:#7d7e7f;
  }
</style>
