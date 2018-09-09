<template>
  <div class="con11">
      <div class="litop">
        <a class="aleft" href="#">
          <img :src="obj.actorpicUrl" alt="">
          <p>
            <span class="s1">{{obj.actor}}</span>
            <span class="s1 s2">{{obj.writerTyp}}</span> <br>
            <span class="s3">{{obj.timer}}</span>
          </p>
        </a>
        <a class="aright" href="#">+ 关注</a>
      </div>
      <div class="bottoms">
        <p class="lp1">{{obj.copywriter}}</p>
        <p class="lp2">
          <span><img :src="obj.spanUrl1" alt=""></span>
          <span><img :src="obj.spanUrl2" alt=""></span>
          <span><img :src="obj.spanUrl3" alt=""></span>
          <span><img :src="obj.spanUrl4" alt=""></span>
          <span><img :src="obj.spanUrl5" alt=""></span>
        </p>
        <a class="imgss" href="#">
          <img :src="obj.picUrl1" alt="">
          <img :src="obj.picUrl2" alt="">
          <img :src="obj.picUrl3" alt="">
          <img :src="obj.picUrl4" alt="">
          <img :src="obj.picUrl5" alt="">
          <img :src="obj.picUrl6" alt="">
          <img :src="obj.picUrl7" alt="">
          <img :src="obj.picUrl8" alt="">
          <img :src="obj.picUrl9" alt="">
        </a>
        <div class="mv">
          <a href="#"><img :src="obj.muzipic" alt=""></a>
          <div class="mv-ff">
            <p>{{obj.micname}}</p>
            <p>{{obj.micperson}}</p>
          </div>
        </div>
        <p class="lp3">{{obj.topname}}</p>
        <p class="lp4">
          <a href="#"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-bangbang"></use> </svg><span>{{obj.dianz}}</span></a>
          <a href="#"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-message"></use> </svg><span>{{obj.show}}</span></a>
          <a href="#"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-fenxiang1"></use> </svg><span>{{obj.playCount}}</span></a>
          <a href="#"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-dian"></use> </svg><span></span></a>
        </p>
      </div>
    </div>
</template>

<script>

    export default {
      props:{obj:Object},
        data(){
            return {
            }
        }

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
          border-radius: 50%;
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
          img{
            width: 100%;
          }
        }
      }
      .imgss{
        width: 100%;
        display: flex;
        flex-flow:row wrap;
        img{
          width: 43%;
          max-height:1rem;
          min-height:0;
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
            width: 75%;
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
          &:last-child{
            justify-content: flex-end;
          }
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
