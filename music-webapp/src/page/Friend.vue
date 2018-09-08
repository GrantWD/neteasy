<template>
  <div class="fr">
    <header>
      <div class="top">
        <a href="#"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-videocamera"></use> </svg></a>
        <div class="tbox">
          <a class="active" href="#"  @click="show(1)"  >动态</a>
          <a href="#" @click="show(2)" >附近</a>
        </div>
        <a href="#"><img :src="imgsSrc1" alt=""></a>
      </div>
      <div class="nav">
        <a href="#" class="active2" @click="select"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-videocamera" ></use> </svg>发动态</a>
        <a href="#" @click="select"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-videocamera"></use> </svg>发视频</a>
      </div>
    </header>
    <div class="content">
       <friend-cont-one v-show="flag ==1 "></friend-cont-one>
       <div class="bx2" v-show="flag ==2 ">没有内容</div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script >
  import FriendContOne from '../components/FriendContOne'
  import Footer from '../components/Footer'
  export default {
    components:{
      FriendContOne,
      Footer
    },
    name: 'Friend',
    data(){
      return {
        imgsSrc1:"../../static/images/aj_rank.png",
        flag:1,
        isActive: true,
      }
    },
    methods:{
      show(f){
        this.flag = f

      },
      select(e){
        $(e.currentTarget).addClass('active2').siblings().removeClass('active2');
      },
      select2(e){
        $(e.currentTarget).addClass('active').siblings().removeClass('active');
      }
    }
  }
</script>


<style lang="scss" scoped>
   .fr{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     header{
       width: 100%;
       display: flex;
       flex-direction: column;
       background: #d73f35;
       .top{
         width: 100%;
         display: flex;
         justify-content: space-between;
         align-items: center;
         height:0.42rem;
         a{
           display: block;
           svg{
             font-size: 0.28rem;
             color:#f5f5f5;
             margin: 0 0.13rem;
           }
           img{
             margin-right: 0.05rem;
             width:0.32rem;
             height:0.32rem;
             align-self: center;
           }
         }
         .tbox{
           height:0.27rem;
           border:1px solid #eb9f9a;
           display: flex;
           border-radius: 0.13rem;
           a{
             font-size:0.15rem;
             line-height: 0.27rem;
             padding:0 0.2rem;
             color:#ffffff;

           }
           .active{
             background: #ffffff;
             color:#a92e27;
             border-radius: 0.13rem;
           }
         }
       }
       .nav{
         width:100%;
         display: flex;
         align-items: center;
         height:0.42rem;
         a{
           flex: 1;
           display: block;
           text-align: center;
           box-sizing: border-box;
           font-size: 0.14rem;
           border-right: 1px solid #c43930;
           color:#fbe8e7;
           height:0.28rem;
           svg{
             font-size: 0.2rem;
             margin-right: 0.12rem;
           }
         }
         .active2{
           color:#7c797a;
         }
       }
     }
     .content{
       width: 100%;
       flex:1;
       flex-direction: column;
       overflow-y: scroll;
       overflow-x: scroll;
     }
   }
</style>
