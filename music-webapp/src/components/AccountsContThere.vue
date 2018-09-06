<template>
  <div class="cn3">
    <p>
      <a href="#">
        <img src="../../static/images/-3.jpg" alt="">
        <span>{{obj.name}}</span>
      </a>
      <a href="#"><img class="imgc2" src="../../static/images/more.jpg" alt=""></a>
    </p>
  </div>
</template>

<script>
    export default {
      name:"AccountsContThere",
      props:{obj:Object},

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

</style>
