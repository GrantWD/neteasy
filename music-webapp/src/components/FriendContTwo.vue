<template>
  <div class="cont2" >
    <p class="cn2"><img src="../../static/images/yonghu.jpg" alt=""><span>用户推荐</span> </p>
    <friend-cont-one-cn2></friend-cont-one-cn2>
    <friend-cont-one-cn1></friend-cont-one-cn1>
  </div>
</template>

<script>
    import FriendContOneCn1 from './FriendContOneCn1'
    import FriendContOneCn2 from './FriendContOneCn2'

    export default {
      components: {
        FriendContOneCn1,
        FriendContOneCn2,
      },
      name:"FriendContTwo",
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
  .cont2 {
    display: flex;
    flex-direction: column;
    padding-top: 0.05rem;
    .cn2{
      display: flex;
      height:0.4rem;
      margin:0.2rem 0 0.15rem;
      align-items: center;
      img{
        width: 0.4rem;
        margin:0 0.1rem;
      }
      span{
        display:block;
        font-size: 0.14rem;
        color:#323233;
      }
    }
  }
</style>
