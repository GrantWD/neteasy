<template>
  <ul class="cn2">
    <li><a href="#"><span class="s1">动态</span><span class="s2">0</span></a></li>
    <li><a href="#"><span class="s1">关注</span><span class="s2">0</span></a></li>
    <li><a href="#"><span class="s1">粉丝</span><span class="s2">0</span></a></li>
    <li><a href="#"><span class="s1">动态</span><span class="s1">我的资料</span></a></li>
  </ul>
</template>

<script>
    export default {
      name:"AccountsContTwo",
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
  .cn2{
    display: flex;
    align-items: center;
    height:0.5rem;
    background: #ffffff;
    li{
      flex: 1;
      height:0.29rem;
      border-right: 1px solid #e2e3e4;
      a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
          display: block;
          font-size: 0.11rem;
          text-align: center;
        }
        .s1{
          color:#979798;
        }
        .s2{
          color:#323233;
          font-weight: bold;
        }

      }
    }
  }
</style>
