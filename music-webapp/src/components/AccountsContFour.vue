<template>
  <p class="cn7"><a href="#">{{textw}}</a></p>
</template>

<script>
    export default {
      name:"AccountsContFour",
        data(){
            return {
              textw:"退出"
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
  .cn7{
    margin: 0.1rem 0;
    background: #ffffff;
    height:0.45rem;
    a{
      display: block;
      line-height:0.49rem;
      text-align: center;
      color:#d33a31;
      font-size: 0.15rem;
      font-weight: bold;
    }
  }
</style>
