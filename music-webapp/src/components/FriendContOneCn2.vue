<template>
  <div class="con--">
    <ul class="con12">
      <li>
        <a class="delete" href="#" @click="delect"><svg class="icon " aria-hidden="true" > <use xlink:href="#icon-chuyidong"></use> </svg></a>
        <a class="pic" href="#">
          <img src="../../static/images/ul1.jpg" alt="">
          <span></span>
        </a>
        <h6>南措卓玛</h6>
        <p class="pd">拘束你听过《我们欢聚在这里的故事》</p>
        <a class="follows" href="#">+ 关注</a>
      </li>
    </ul>
  </div>
</template>

<script>

    export default {
      name:"FriendContOneCn2",
        data(){
            return {
              // texts1:"账号",
              // imgsSrc1:"../../static/images/ajMusic.png"
            }
        },
        methods: {
            // 选择方法中，进行路由的切换
          delect(e){
            $(e.currentTarget).parent().remove();
          }
        }
    }

</script>

<style lang="scss" scoped>
  .con12{
    width: 100%;
    box-sizing: border-box;
    padding-left:0.6rem;
    display: flex;
    overflow-x: scroll;
    li{
      width:1.9rem;
      border:1px solid #e5e5e5;
      border-right: 0;
      &:last-child{
        border-right: 1px solid #e5e5e5;;
      }

      display: flex;
      align-items: center;
      flex-direction: column;
      .delete{
        display: block;
        width:95%;
        text-align: right;
        font-size:0.1rem;
        margin-top:8px;
      }
      .pic{
        position: relative;
        span{
          position: absolute;
          right: 0;
          bottom:0;
          display:block;
          width:0.21rem;
          height:0.21rem;
          background: black;
        }
      }
      h6{
        margin-top:5px;
        line-height:0.26rem;
        font-size:0.14rem;
        color:#333334;
      }
      .pd{
        width: 92%;
        height:0.19rem;
        font-size:0.11rem;
        color:#666667;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
      }
      .follows{
        margin:0.16rem 0 0.19rem;
        height:0.26rem;
        line-height: 0.26rem;
        width: 0.86rem;
        text-align: center;
        background: #f54e40;
        color:#ffffff;
        border-radius: 0.13rem;
      }
    }
  }
</style>
