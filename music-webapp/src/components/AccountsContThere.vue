<template>
  <div class="cn3">
   <div class="box1"><AccountsContThereCon v-for="obj in account1" :key="obj.index" :obj="obj"></AccountsContThereCon></div>
   <div class="box1"><AccountsContThereCon v-for="obj in account2" :key="obj.index" :obj="obj"></AccountsContThereCon></div>
   <div class="box1"><AccountsContThereCon v-for="obj in account3" :key="obj.index" :obj="obj"></AccountsContThereCon></div>
  <div class="box1"><AccountsContThereCon v-for="obj in account4" :key="obj.index" :obj="obj"></AccountsContThereCon></div>
  </div>
</template>

<script>
  import AccountsContThereCon from "../components/AccountsContThereCon"
    export default {
      components:{
        AccountsContThereCon,
      },
      name:"AccountsContThere",

        data(){
            return {
              account1:[
                {
                  name:"我的消息",
                  imgsSrc1:"../../static/images/ac01.jpg",
                  imgsSrc2:"../../static/images/more.jpg"
                }
              ],
              account2:[
                {
                  name:"会员中心",
                  imgsSrc1:"../../static/images/ac02.jpg",
                  imgsSrc2:"../../static/images/more.jpg"
                },
                {
                  name:"商城",
                  imgsSrc1:"../../static/images/ac03.jpg",
                  imgsSrc2:"../../static/images/more.jpg"
                },
                {
                  name:"游戏推荐Beta",
                  imgsSrc1:"../../static/images/ac04.jpg",
                  imgsSrc2:"../../static/images/more.jpg"
                },
                {
                  name:"在线听歌免流量",
                  imgsSrc1:"../../static/images/ac05.jpg",
                  imgsSrc2:"../../static/images/more.jpg"
                }
              ],
              account3:[
                {
                  name:"设置扫一扫",
                  imgsSrc1:"../../static/images/ac06.jpg",
                  imgsSrc2:"../../static/images/more.jpg"
                },
                {
                  name:"个性换肤",
                  facecolor:"官方红",
                  imgsSrc1:"../../static/images/ac07.jpg",
                  imgsSrc2:"../../static/images/more.jpg",
                },
                {
                  name:"夜间模式",
                  imgsSrc1:"../../static/images/ac08.jpg",
                  imgsSrc2:"../../static/images/key.jpg"
                },
                {
                  name:"定时关闭",
                  imgsSrc1:"../../static/images/ac09.jpg",
                  imgsSrc2:"../../static/images/more.jpg"
                },
                {
                  name:"音乐闹铃",
                  imgsSrc1:"../../static/images/ac10.jpg",
                  imgsSrc2:"../../static/images/more.jpg"
                },
                {
                  name:"驾驶模式",
                  imgsSrc1:"../../static/images/ac11.jpg",
                  imgsSrc2:"../../static/images/more.jpg"
                },
                {
                  name:"优惠券",
                  imgsSrc1:"../../static/images/ac12.jpg",
                  imgsSrc2:"../../static/images/more.jpg"
                }
              ],
              account4:[
                {
                  name:"分享网易云音乐",
                  imgsSrc1:"../../static/images/ac13.jpg",
                  imgsSrc2:"../../static/images/more.jpg"
                },
                {
                  name:"关于",
                  imgsSrc1:"../../static/images/ac14.jpg",
                  imgsSrc2:"../../static/images/more.jpg"
                }
              ]
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
    display: flex;
    flex-direction: column;
    .box1{
      background: #ffffff;
      margin-top:0.1rem;
    }
  }
</style>
