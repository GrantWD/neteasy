<template>
    <div class="playerFooter">
        <div class="fav">
            <div class="collected"></div>
            <div class="download"></div>
            <div class="comment"></div>
            <div class="more"></div>
        </div>
        <div class="timeBar">
            <span class="currentTime">00:05</span>
            <div class="timeProcess"><span class="bg"></span><span class="ball"></span></div>
            <span class="allTime">00:05</span>
        </div>
        <div class="operate">
            <div class="cycle"></div>
            <div class="prevSong"></div>
            <div class="playerBtn"></div>
            <div class="nestSong"></div>
            <div class="musicList"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'playerFooter',
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
$backgroundUrl:'../../static/images/';
$iconSize:.3rem;
$playIconSize:.5rem;
    @mixin flexLayout{
            display: flex;
            justify-content: space-around;
            align-items: center
    }
    .playerFooter{
        margin-bottom: .18rem;
        .fav{
            
            @include flexLayout();
            div{
                width: $iconSize;
                height: $iconSize;
                background-size:contain;
                margin-bottom: .2rem;
            }
            padding:0 .55rem;
            .collected{
                background-image: url(#{$backgroundUrl}shoucang60×60.png);
            }
            .download{
                background-image: url(#{$backgroundUrl}download60×60.png);

            }
            .comment{
                background-image: url(#{$backgroundUrl}commit60×60.png);

            }
            .more{
                background-image: url(#{$backgroundUrl}dian60×60.png);

            }

        }
        .timeBar{
            @include flexLayout();
            font-size: .04rem;
            margin-bottom: .1rem;
            color:#fff;
            .currentTime{

            }
            .timeProcess{
                position: relative;
                width:2.25rem;
                height: 4px;
                background-color: #887979;
                border-radius: 5px;
                .bg{
                    display: block;
                    width:100px;
                    height:100%;
                    background-color: blue;
                }
                .ball{
                    display:block;
                    position: absolute;
                    left:0;
                    top:-(0.06rem);
                    width:.16rem;
                    height:.16rem;
                    background-image: url(#{$backgroundUrl}yuandian33×33.png);
                    background-size: contain;
                }
            }
            .allTime{
                
            }
           
        }
        .operate{
            @include flexLayout();
            div{
                width: $iconSize;
                height: $iconSize;
                background-size:contain;
                }
            .playerBtn{
                width:$playIconSize;
                height:$playIconSize;
                background-image: url(#{$backgroundUrl}playbtn100×100.png)
            }
            .cycle{
                background-image: url(#{$backgroundUrl}xunhuan60×60.png)

            }
            .prevSong{
                background-image: url(#{$backgroundUrl}shangys60×60.png)

            }
            .nestSong{
                background-image: url(#{$backgroundUrl}xiays60×60.png)

            }
            .musicList{
                background-image: url(#{$backgroundUrl}caidan60×60.png)

            }

            
        }
    }

</style>
