<template>
  <header>
    <div class="top">
      <a href="#"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-videocamera"></use> </svg></a>
      <form><input class="seach" type="button" ><input class="texts" type="text" value="有没有 最近很火偶"></form>
      <a href="#"><img :src="imgsSrc1" alt=""></a>
    </div>

  </header>
</template>

<script>
    export default {
      name:"VideoRecommendHeader",
        data(){
            return {
              // texts1:"账号",
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
    background: #dd4238;
    width: 100%;
    display: flex;
    flex-direction: column;
    .top{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height:0.42rem;
      a{
        width: 7%;
        margin:0 0.05rem 0 0.12rem;
        display: block;
        height: 0.21rem;
        img{
          width: 100%;
        }
        svg{
          color:#f5f5f5;
          font-size:0.23rem;
        }
      }
      form{
        display: flex;
        height:0.3rem;
        line-height: 0.3rem;
        width: 71%;
        background-color: #df635b;
        border-radius: 0.3rem;
        input{
          display: block;
          height:0.3rem;
        }
        .seach{
          width: 40%;
          border: 0;
          outline: none;
          border-radius: 0.15rem 0 0 0.15rem;
          background:url("../../static/images/su.jpg") no-repeat top right;
        };
        .texts{
          width: 60%;
          border-radius: 0  0.15rem 0.15rem 0;
          border: 0;
          outline: none;
          background: none;
          color:#efb2ad;
          text-indent:5px;
          font-size:0.13rem;
        }
      }
    }
    .nav{
      width: 100%;
      height: .42rem;
      display: flex;
      overflow-x: scroll;
      align-items: center;
      li{
        height:0.42rem;
        display: flex;
        align-items: center;
        a{
          width: 100%;
          display: block;
          white-space: nowrap;
          height:0.25rem;
          font-size:0.14rem;
          color:#fffffe;
          line-height: 0.25rem;
          margin:0 0.15rem;
        }
        .active{
          border-bottom: 3px solid #cccccb;
          color:#cccccb;
        }
      }
    }
  }
</style>
