<template>
    <footer>
      <router-link to="/">
        <div class="menu find current" @click="select">
          <div class="img"></div>
          <p>发现</p>
        </div>
      </router-link>
      <router-link to="/VideoRecommend">
        <div class="menu video" @click="select">
          <div class="img"></div>
          <p>视频</p>
        </div>
      </router-link>
      <router-link to="/MyMusic">
        <div class="menu my" @click="select">
          <div class="img"></div>
          <p>我的</p>
        </div>
      </router-link>
      <router-link to="/Friend">
        <div class="menu friend" @click="select">
          <div class="img"></div>
          <p>朋友</p>
        </div>
      </router-link>
      <router-link to="/Account">
        <div class="menu account" @click="select">
          <div class="img"></div>
          <p>账号</p>
        </div>
      </router-link>
    </footer>
</template>

<script>
    export default {
        data:function(){
            return {}
        },
        methods: {
            // 选择方法中，进行路由的切换
            select(e){
                $('.menu').removeClass('current');
                $(e.currentTarget).addClass('current');
   
            }
        }
    }

</script>

<style lang="scss" scoped>
    $imgSize:.32rem;
    $color:#979797;
    $redColor:#d33a31;
    $gbColor:#f4f2ee;
    $borderColor:#dddedd;
    $backgroundUrl:'../../static/images/';
    footer{
        display:flex;
        justify-content:space-around;
        align-items:center;
        background: $gbColor;
        border-top: 1px solid $borderColor;
        text-align: center;

        .img{
            margin:.06rem auto 0;
            width: $imgSize;
            height: $imgSize;
            background-size: 100%;

        };
        p {
            padding:7px 0;
            font-size: .1rem;
            color: $color;
        }


        .find{
            .img{
                background-image: url(#{$backgroundUrl}faxian.png);

            }
        }
        .video{
            .img{

                background-image: url(#{$backgroundUrl}shipin.png);
            }

        }
        .my{
            .img{

                background-image: url(#{$backgroundUrl}wode.png);
            }

        }
        .friend{
            .img{
                background-image: url(#{$backgroundUrl}pengyou.png);

            }

        }
        .account{
            .img{
                background-image: url(#{$backgroundUrl}zhanghao.png);

            }

        }
        // 选中状态
        .current.find{
            p{
                color: $redColor;
            }
            .img{
                background-image: url(#{$backgroundUrl}faxians.png);
            }
        }
        .current.video{
            p{
                color: $redColor;
            }
            .img{
                background-image: url(#{$backgroundUrl}shipins.png);
            }
        }
        .current.my{
            p{
                color: $redColor;
            }
            .img{
                background-image: url(#{$backgroundUrl}wodes.png);
            }
        }
        .current.friend{
            p{
                color: $redColor;
            }
            .img{
                background-image: url(#{$backgroundUrl}pengyous.png);
            }
        }
        .current.account{
            p{
                color: $redColor;
            }
            .img{
                background-image: url(#{$backgroundUrl}zhanghaos.png);
            }
        }
    }
</style>
