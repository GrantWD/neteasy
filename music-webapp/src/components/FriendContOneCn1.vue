<template>
  <div class="con11">
      <div class="litop">
        <a class="aleft" href="#">
          <img src="../../static/images/f11.jpg" alt="">
          <p>
            <span class="s1">吴木蓝君</span>
            <span class="s1 s2">分享单曲：</span> <br>
            <span class="s3">8月30日</span>
          </p>
        </a>
        <a class="aright" href="#">+ 关注</a>
      </div>
      <div class="bottoms">
        <p class="lp1">生日派对好开心！！！</p>
        <p class="lp2"><span></span><span></span><span></span><span></span></p>
        <a class="imgss" href="#">
          <img src="../../static/images/f1.jpg" alt="">
          <img src="../../static/images/f1.jpg" alt="">
          <img src="../../static/images/f1.jpg" alt="">
          <img src="../../static/images/f1.jpg" alt="">
        </a>
        <div class="mv">
          <a href="#"><img src="../../static/images/mv3.jpg" alt=""></a>
          <div class="mv-ff">
            <p>the light is coming</p>
            <p>Ariana Grande/Nicki Minaj</p>
          </div>
        </div>
        <p class="lp3">___为你发现身获得点击</p>
        <p class="lp4">
          <a href="#"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-videocamera"></use> </svg><span>1111</span></a>
          <a href="#"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-videocamera"></use> </svg><span>1111</span></a>
          <a href="#"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-videocamera"></use> </svg><span>1111</span></a>
          <a href="#"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-videocamera"></use> </svg><span>1111</span></a>
        </p>
      </div>
    </div>
</template>

<script>

    export default {
      name:"FriendContOneCn1",
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
  .con11{
    border-bottom:1px solid #e1e2e3;
    padding: 0.2rem  0.1rem 0;
    box-sizing: border-box;
    width:100%;
    .litop{
      display: flex;
      justify-content: space-between;
      a{
        height:0.4rem;
        display: flex;
        img{
          height:100%;
        }
        p{
          .s1{
            font-size:0.13rem;
            line-height: 0.25rem;
            color:#646566;
            margin-left: 0.1rem;
          }
          .s2{
            color:#507daf;
          }
          .s3{
            font-size:0.1rem;
            margin-left:0.1rem;
            color:#979798;
          }
        }
      }
      .aright{
        padding:0 0.1rem;
        background: #e04237;
        color:#ffffff;
        height:0.26rem;
        border-radius: 0.13rem;
        line-height:0.26rem;
      }
    }
    .bottoms{
      box-sizing: border-box;
      padding-left: 0.5rem;
      .lp1{
        margin: 0.14rem 0 0.31rem;
        line-height: 0.19rem;
        font-size:0.14rem;
        color:#323234;
      }
      .lp2{
        display: flex;
        margin-bottom:0.1rem;
        span{
          margin-right: 2px;
          display: block;
          width:0.2rem;
          height:0.2rem;
          background: url("../../static/images/xin.jpg");
        }
      }
      .imgss{
        width: 100%;
        display: flex;
        flex-flow:row wrap;
        img{
          border-radius: 0.03rem;
          margin:2px;
        }
      }
      .mv{
        background: #f1f2f3;
        display: flex;
        a{
          display: block;
          width: 18%;
          img{
            margin:0.08rem;
          }
        }
        .mv-ff{
          width: 82%;
          margin:8px 0;
          p{
            line-height: 0.2rem;
            font-size:0.14rem;
            color:#333335;
            &:last-child{
              color:#78797a;
            }
          }
        }
      }
      .lp3{
        color:#979798;
        font-size:0.12rem ;
        line-height:0.27rem;
        height:0.27rem;
      }
      .lp4{
        display: flex;
        align-items: center;
        height:0.51rem;
        a{
          flex: 1;
          display: flex;
          align-items: center;
          svg{
            font-size: 0.15rem;
            color:#646565;
          }
          span{
            color:#9b9b9c;
            font-size:0.08rem;
          }
        }
      }
    }
  }
</style>
