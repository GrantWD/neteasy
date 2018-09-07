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
  .cn3{
    margin-top:0.1rem;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    P{
      height:0.45rem;
      width:100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    a{
      display: flex;
      margin:0 0.1rem;
      img{
        width: 0.2rem;
        display: block;
      }
      .imgc2{
        width: 8px;
      }
      .imgc3{
        width: 0.51rem;
      }
      span{
        display: block;
        font-size: 0.14rem;
        color:#323233;
        margin: 0 0.12rem;
      }
    }
  }
</style>
