<template>
  <header>
    <a href="#"></a>
    <span>{{texts1}}</span>
    <a href="#"><img :src="imgsSrc1" alt=""></a>
  </header>
</template>

<script>
    export default {
      name:"AccountsHeader",
        data(){
            return {
              texts1:"账号",
              imgsSrc1:"../../static/images/aj_rank.png"
            }
        }
        // methods: {
        //     // 选择方法中，进行路由的切换
        //     select(e){
        //         $(e.currentTarget).addClass('current').siblings().removeClass('current');
        //     }
        // }
    }

</script>

<style lang="scss" scoped>
  header{
    width: 100%;
    height:0.42rem;
    background:#d84036;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
      display: block;
      width: 0.32rem;
      height:0.32rem;
      margin: 0 0.05rem;
      line-height: 0.32rem;
      img{
        width: 100%;
      }
    }
    span{
      height:0.32rem;
      font-size:0.16rem;
      line-height:0.32rem;
      color:#ffffff;
    }
  }
</style>
