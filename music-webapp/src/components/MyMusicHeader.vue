<template>
    <div class="MyMusicHeader">
      <img :src="imgSrc1" alt=""/>
      <p>{{ord}}</p>
      <img :src="imgSrc2" alt=""/>
    </div>
</template>

<script>
    export default {
      name: "MyMusicHeader",
      data() {
        return {
          ord: "我的音乐",
          imgSrc1: '../../static/images/aj_cloud.png',
          imgSrc2: '../../static/images/aj_rank.png'
        }
      }
    }
</script>

<style scoped lang="scss">
  .MyMusicHeader{
    width:100%;
    height:0.42rem;
    box-sizing: border-box;
    padding:0.1rem;
    display:flex;
    justify-content: space-between;
    background:#d83f36;
  }
  .MyMusicHeader img{
    width:0.32rem;
    height:0.32rem;
    align-self: center;
  }
  .MyMusicHeader p{
    font-size:0.17rem;
    color:#fff;
    align-self: center;
  }
</style>
