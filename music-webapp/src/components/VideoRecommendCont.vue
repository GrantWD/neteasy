<template>
  <div class="content">
    <video-recommend-cont-one  v-for="obj in account1" :key="obj.index" :obj="obj"></video-recommend-cont-one>
  </div>
</template>

<script>
    import VideoRecommendContOne from "../components/VideoRecommendContOne.vue"
    export default {
        name:"VideoRecommendCont",
        components:{
          VideoRecommendContOne
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
  .content {
    width: 100%;
    background: #f1f2f3;
    flex: 1;
    overflow-y: scroll;
    overflow-x: scroll;
  }
</style>
