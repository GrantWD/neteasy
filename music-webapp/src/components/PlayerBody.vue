<template>
  <div class="playerBody">
      <div class="outer">
          <div class="inner">
              <div class="sinerImg">
                  <img :src="singerImgUrl" alt="">
              </div>
          </div>
      </div>
      <div class="needle"></div>
  </div>
</template>

<script>

export default {
  name: 'playerBody',
  data () {
    return {
      singerImgUrl:'http://p1.music.126.net/VFM_n_C1ZaHP-fyp0Mqk6w==/109951163526422858.webp?imageView&thumbnail=720y720&quality=75&tostatic=0&type=webp'
    }
  }
}
</script>

 
<style lang='scss' scoped>
	.playerBody{
        $needleWidth:.84rem;
        $needleHeight:1.22rem;
        $backgroundUrl:'../../static/images/';
        $imgSize:1.94rem;
        $outerSize:3.05rem;
        $innerSize:2.88rem;
        position: relative;
        display: flex;
        flex:1;
        justify-content: center;
        .outer{
            display:flex;
            justify-content: center;
            align-items: center;
            margin-top: .78rem;
            width:$outerSize;
            height: $outerSize;
            background-image: url(#{$backgroundUrl}disc-ip6.png);
            background-size: contain;
            .inner{
                display:flex;
                justify-content: center;
                align-items: center;
                width: $innerSize;
                height: $innerSize;
                

                .sinerImg{
                    width: $imgSize;
                    height:  $imgSize;
                    background-color: pink;
                    border-radius: 50%;
                    img{
                        width:100%;
                        height: 100%;
                        border-radius: 50%;

                    }
                }
            }
            
        }
        .needle{
            width: $needleWidth;
            height: $needleHeight;
            position: absolute;
            top:0;
            left:1.6rem;
            background-image: url(#{$backgroundUrl}needle.png);
            background-size: contain;
        }
	}
</style>
