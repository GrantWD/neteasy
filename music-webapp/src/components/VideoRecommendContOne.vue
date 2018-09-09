<template>
  <div class="c1">
    <div class="mvbox">
      <img :src="obj.picUrl" alt="">
      <a class="a1">{{obj.type}}</a>
      <a class="a2"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-bofang"></use> </svg><span>{{obj.playCount}}次</span></a>
      <a class="a3"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-stzddq-d"></use> </svg><span>{{obj.duration}}</span></a>
    </div>
    <p class="p1">{{obj.name}}</p>
    <p class="p2">
      <a class="ar" href="#"><img :src="obj.actorpicUrl" alt=""><span>{{obj.actor}}</span></a>
      <span class="right">
             <a class="zan"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-bangbang"></use> </svg><span>{{obj.dianz}}</span></a>
            <a href="#"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-message"></use> </svg><span>{{obj.comment}}</span></a>
            <a href="#"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-dian"></use> </svg></a>
          </span>
    </p>
  </div>
</template>

<script>
    export default {
      props:{obj:Object},
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
  .c1{
    padding-top: 1px;
    background: #ffffff;
    margin-bottom: 5px;
    width: 100%;
    .mvbox{
      position: relative;
      width: 100%;
      img{
        margin: 0.06rem auto;
        width: 95%;
      }
      a{
        display: block;
        position: absolute;
        svg{
          font-size:0.1rem;
          margin-right:5px;
        }
        span{
          font-size: 0.1rem;
          color:#ffffff;
        }
      }
      .a1{
        right:0.1rem;
        top:0.06rem;
        padding: 0 0.1rem;
        height: 0.21rem;
        border-radius: 0.1rem;
        border:1px solid #808282;
      }
      .a2{
        left:0.1rem;
        bottom:0.06rem;
      }
      .a3{
        right:0.1rem;
        bottom:0.06rem;
      }
    }
    .p1{
      margin: 0 0.1rem;
      color:#323233;
      font-size:0.15rem;
      height:0.44rem;
      font-weight: bold;
      line-height: 0.44rem;
      border-bottom: 1px solid #e2e3e4;
    }
    .p2{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height:0.5rem;
      .ar{
        display: flex;
        margin-left: 0.1rem;
        line-height: 0.3rem;
        font-size: 0.12rem;
        color:#323233;
        img{
          margin-right: 3px;
          width: 0.3rem;
          height: 0.3rem;
        }
        span{
          display: -moz-flex;
          height:0.2rem;
          font-size: 0.12rem;
          color:#323233;
        }
      }
      .right{
        display: flex;
        a{
          display: block;
          height: 0.17rem;
          align-items: center;
          .avg{
            margin-right: 3px;
            font-size:0.17rem;
          }
          span{
            font-size:0.1rem;
            height: 0.17rem;
            line-height: 0.17rem;
          }
          margin-left: 0.35rem;
          &:last-child{
            margin-right: 0.1rem;
          }
        }
      }
    }
  }
</style>
