<template>
    <div class="RadioDetailTit">
      <div class="RadioDetailTitBox">
        <span>{{spa}}</span>
        <span>{{spb}}</span>
        <span>{{spc}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RadioDetailTit",
        data(){
          return{
            spa:'热门',
            spb:'电子音乐',
            spc:'3D环绕'
          }
        }
    }
</script>

<style scoped lang="scss">
  .RadioDetailTit{
    width:100%;
    height:0.41rem;
    background:#d93f36;
    box-sizing: border-box;
    display:flex;
    padding:0 0.1rem;
    overflow-x: scroll;
  }
  .RadioDetailTitBox{
    display:flex;
  }
  .RadioDetailTitBox :last-child{
    margin-right:0.38rem;
  }
  .RadioDetailTit span{
    white-space: nowrap;
    font-size:0.14rem;
    color:#fff;
    flex-shrink: 1;
    flex:1;
    line-height:0.41rem;
    margin:0 0.38rem;
  }
</style>
