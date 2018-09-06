<template>
  <header>
    <a href="#"><img :src="imgsSrc1" alt=""></a>
    <span>{{texts1}}</span>
    <a href="#"><img :src="imgsSrc1" alt=""></a>
  </header>
</template>

<script>
    export default {
      name:"AccountsHeader",
        data(){
            return {
              texts1:"账号",
              imgsSrc1:"../../static/images/ajMusic.png"
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

</style>
