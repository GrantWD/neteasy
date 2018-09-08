<template>
  <p class="con">
    <a href="#">
      <img :src="obj.imgsSrc1" alt="">
      <span>{{obj.name}}</span>
    </a>
    <a href="#"><span class="facecolor">{{obj.facecolor}}</span><img class="imgc2" :src="obj.imgsSrc2" alt=""></a>
  </p>
</template>

<script>
    export default {
      name:"AccountsContThereCon",
      props:{obj:Object},
        data(){
            return {
              // account:{
              //   texts1:"信息",
              //   imgsSrc1:"../../static/images/-3.jpg",
              //   imgsSrc2:"../../static/images/more.jpg"
              // }
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
  P{
    height:0.45rem;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
      display: flex;
      margin:0 0.1rem;
      img{
        display: block;
      }
      span{
        display: block;
        font-size: 0.14rem;
        color:#323233;
        margin: 0 0.12rem;
      }
      .facecolor{
        color:#979798;
      }
    }
  }

</style>
