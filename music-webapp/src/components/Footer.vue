<template>
    <footer>
       <div class="find current">
          <div class="img"></div>
          <p>发现</p>
       </div>
       <div class="video">
           <div class="img"></div>
           <p>视频</p>
       </div>
       <div class="my">
           <div class="img"></div>
           <p>我的</p>
       </div>
       <div class="friend">
           <div class="img"></div>
           <p>朋友</p>
       </div>
       <div class="account">
           <div class="img"></div>
           <p>账号</p>
       </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    $imgSize:.32rem;
    $color:#979797;
    $redColor:#d33a31;
    $gbColor:#f4f2ee;
    $borderColor:#d0cac6;
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
            background-image: url(../../static/images/wyy2.png);
            background-size: 100%;
            
        };
        p {
            padding:7px 0;
            font-size: .1rem;
            color: $color;
        }
    
        .current{
            p{
                color: $redColor;
            }
        }
        .find{

        }
        .video{

        }
        .my{

        }
        .friend{

        }
        .account{

        }
    }
</style>
