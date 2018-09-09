<template>
  <div class="conc2">
    <li >
      <a class="delete" href="#" @click="delect"><svg class="icon " aria-hidden="true" > <use xlink:href="#icon-chuyidong"></use> </svg></a>
      <a class="pic" href="#">
        <img :src="obj.picUrl" alt="">
        <a class="small"><img :src="obj.actorpicUrl" alt=""></a>
      </a>
      <h6>{{obj.name}}</h6>
      <p class="pd">{{obj.copywriter}}</p>
      <a class="follows" href="#">+ 关注</a>
    </li>
  </div>
</template>

<script>
    export default {
        props:{obj:Object},
        data(){
            return {
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
  .conc2{
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
        width:80%;
        margin:0.1rem auto;
        position: relative;
        img{
          width: 80%;
          margin: 0 auto;
          height:1.3rem;
          border-radius: 50%;
        }
        .small{
          position: absolute;
          right: 0.15rem;
          bottom:0.15rem;
          display:block;
          width:0.21rem;
          height:0.21rem;
          border-radius: 50%;
          img{
            width: 100%;
            height:0.2rem;
          }
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
        text-align: center;
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
