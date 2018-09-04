<template>
    <footer>
       <div class="find current" @click="select($event)">
          <div class="img"></div>
          <p>发现</p>
       </div>
       <div class="video" @click="select">
           <div class="img"></div>
           <p>视频</p>
       </div>
       <div class="my" @click="select">
           <div class="img"></div>
           <p>我的</p>
       </div>
       <div class="friend" @click="select">
           <div class="img"></div>
           <p>朋友</p>
       </div>
       <div class="account" @click="select">
           <div class="img"></div>
           <p>账号</p>
       </div>
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
                $(e.currentTarget).addClass('current').siblings().removeClass('current');
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
                background-image: url(#{$backgroundUrl}wyy2.png);

            }
        }
        .video{
            .img{

                background-image: url(#{$backgroundUrl}wyy2.png);
            }

        }
        .my{
            .img{

                background-image: url(#{$backgroundUrl}music.png);
            }

        }
        .friend{
            .img{
                background-image: url(#{$backgroundUrl}wyy2.png);

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
                background-image: url(#{$backgroundUrl}wyys2.png);
            }
        }
        .current.video{
            p{
                color: $redColor;
            }
            .img{
                background-image: url(#{$backgroundUrl}wyys2.png);
            }
        }
        .current.my{
            p{
                color: $redColor;
            }
            .img{
                background-image: url(#{$backgroundUrl}musics.png);
            }
        }
        .current.friend{
            p{
                color: $redColor;
            }
            .img{
                background-image: url(#{$backgroundUrl}wyys2.png);
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
