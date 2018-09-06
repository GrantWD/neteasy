<template>

    <div class="content">
      <FriendContOne></FriendContOne>
    </div>


</template>

<script>
  import FriendContOne from '../components/FriendContOne'
    export default {
      name:"FriendCont",
      components: {
        FriendContOne
      },
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
  .content{
    width: 100%;
  }

</style>
