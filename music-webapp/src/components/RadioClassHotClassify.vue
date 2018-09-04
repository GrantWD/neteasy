<template>
    <div class="RadioClassHotClassify">
      <p>{{tit3}}</p>
    </div>
</template>

<script>
    export default {
        name: "RadioClassHotClassify",
        data(){
          return {
            tit3:'热门分类'
          }
        }
    }
</script>

<style scoped lang="scss">
  .RadioClassHotClassify{
    width:100%;
    height:0.51rem;
    padding: 0 0.1rem;
    border-bottom:0.005rem solid #e2e3e4;
  }
  .RadioClassHotClassify p{
    font-size:0.16rem;
    color:#323233;
    text-align: center;
    line-height:0.51rem;
  }
</style>
