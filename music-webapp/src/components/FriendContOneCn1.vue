<template>
  <div class="con1">
    <friend-cont-one-cn1t1 v-for="(obj,index) in result" :key="obj.index" :obj="obj"></friend-cont-one-cn1t1>
  </div>
</template>

<script>
    import FriendContOneCn1t1 from '../components/FriendContOneCn1t1'
    export default {
      components: {
        FriendContOneCn1t1,
      },
      data(){
        return{
          result:[],
          // StyleRecommendDay:[]
        }
      },
      methods: {
      },
      created () {

        $.get('http://localhost:3000/friends', (data)=> {
          // console.log(data);
          // console.log(data.obj.result);
          this.result=data.obj.result;
          // console.log(this.result);
        });
      }

    }

</script>

<style lang="scss" scoped>
  .con1{
    border-bottom:1px solid #e1e2e3;
    padding: 0.2rem  0.1rem 0;
    box-sizing: border-box;
    width:100%;
    .litop{
      display: flex;
      justify-content: space-between;
      a{
        height:0.4rem;
        display: flex;
        img{
          height:100%;
        }
        p{
          .s1{
            font-size:0.13rem;
            line-height: 0.25rem;
            color:#646566;
            margin-left: 0.1rem;
          }
          .s2{
            color:#507daf;
          }
          .s3{
            font-size:0.1rem;
            margin-left:0.1rem;
            color:#979798;
          }
        }
      }
      .aright{
        padding:0 0.1rem;
        background: #e04237;
        color:#ffffff;
        height:0.26rem;
        border-radius: 0.13rem;
        line-height:0.26rem;
      }
    }
    .bottoms{
      box-sizing: border-box;
      padding-left: 0.5rem;
      .lp1{
        margin: 0.14rem 0 0.31rem;
        line-height: 0.19rem;
        font-size:0.14rem;
        color:#323234;
      }
      .lp2{
        display: flex;
        margin-bottom:0.1rem;
        span{
          margin-right: 2px;
          display: block;
          width:0.2rem;
          height:0.2rem;
          background: url("../../static/images/xin.jpg");
        }
      }
      .imgss{
        width: 100%;
        display: flex;
        flex-flow:row wrap;
        img{
          border-radius: 0.03rem;
          margin:2px;
        }
      }
      .mv{
        background: #f1f2f3;
        display: flex;
        a{
          display: block;
          width: 18%;
          img{
            margin:0.08rem;
          }
        }
        .mv-ff{
          width: 82%;
          margin:8px 0;
          p{
            line-height: 0.2rem;
            font-size:0.14rem;
            color:#333335;
            &:last-child{
              color:#78797a;
            }
          }
        }
      }
      .lp3{
        color:#979798;
        font-size:0.12rem ;
        line-height:0.27rem;
        height:0.27rem;
      }
      .lp4{
        display: flex;
        align-items: center;
        height:0.51rem;
        a{
          flex: 1;
          display: flex;
          align-items: center;
          svg{
            font-size: 0.15rem;
            color:#646565;
          }
          span{
            color:#9b9b9c;
            font-size:0.08rem;
          }
        }
      }
    }
  }
</style>
