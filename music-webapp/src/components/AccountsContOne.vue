<template>
  <div class="cn1">
    <div class="left">
      <a href="#"><img src="../../static/images/t.jpg" alt=""></a>
      <div class="left-p">
        <p class="p1">长大了责任很重</p>
        <span class="p2"><i>Lv.1</i></span>
      </div>
    </div>
    <a class="right" href="#"><img src="../../static/images/2.jpg" alt=""><span>签到</span></a>
  </div>
</template>

<script>
    export default {
      name:"AccountsContOne",
        data(){
            return {
              // texts1:"账号",
              // imgsSrc1:"../../static/images/ajMusic.png"
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
  .cn1{
    background: #ffffff;
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:0.98rem;
    border-bottom: 1px solid #e2e3e4;
    .left{
      margin-left:0.15rem;
      display: flex;
      a{
        width: 0.6rem;
        height:0.6rem;
        margin-right:0.1rem;
        line-height: 0.6rem;
        img{
          width: 100%;
        }
      }
      .left-p{
        display: flex;
        flex-direction: column;

        .p1{
          display: block;
          line-height:0.35rem;
          color: #000000;
          font-size: 0.15rem;
        }
        .p2{
          display: block;
          width: 45%;
          line-height:0.16rem;
          text-align: center;
          color: #999999;
          font-size: 0.15rem;
          border: 1px solid #999999;
          height:0.16rem;
          border-radius: 0.08rem;
        }
      }
    }
    .right{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.1rem;
      height:0.24rem;
      width: 0.61rem;
      text-align: center;
      font-size: 0.1rem;
      color:#d33a31;
      line-height: 0.24rem;
      border-radius: 0.12rem;
      border: 1px solid #d33a31;
      img{
        display: block;
        width: 0.12rem;
      }
      span{
        display: block;
        margin-left: 0.1rem;
      }
    }
  }
</style>
