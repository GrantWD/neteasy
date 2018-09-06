<template>
    <div class="playerHeader">
         <router-link to="/">  
            <div class="head-l"></div>     
        </router-link>
      
        <div class="head-m">
            <p class="musicName">{{ musicName }}</p>
            <p class="singer">{{ singer }}<span class="icon"></span></p>
        </div>
        <div class="head-r"></div>
    </div>
</template>

<script>
export default {
  name: 'playerHeader',
  data () {
    return {
      singer:'邓紫棋G.E.M',
      musicName:'倒数'
    }
  }
}
</script>

<style lang='scss' scoped>
$headHeight: .42rem;
$borderColor:#fff;
$backgroundUrl:'../../static/images/';
$iconSize: .24rem;
    .playerHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height:$headHeight;
        border-bottom: 1px solid $borderColor;
        padding:0 .15rem;
        color:#fff;
        .head-l,.head-r{
            width:$iconSize;
            height: $iconSize;
            background-size: 100%;
        }
        .head-l{
            background-image: url(#{$backgroundUrl}back.png);

        }
        .head-m{
            flex: 1;
            text-align: center;
            .musicName{
                margin-bottom: .05rem;
                font-size: .16rem;
                // font-weight: bold;
            }
            .singer{
                font-size: .1rem;
                height: .16rem;
                line-height: .16rem;
                .icon{
                    display: inline-block;
                    width:.15rem;
                    height:.15rem;
                    background-image: url(#{$backgroundUrl}next20×20.png);
                    background-size: 100%;
                    vertical-align: middle;
              
                }
            }
        }
        .head-r{
            background-image: url(#{$backgroundUrl}more42×42.png);

        }
    }
</style>
