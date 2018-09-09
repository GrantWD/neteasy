<template>
  <div class="con--">
    <ul class="con12" >
      <friend-cont-one-cn2t1 v-for="(obj,index) in result" :key="obj.index" :obj="obj"></friend-cont-one-cn2t1>
    </ul>
  </div>
</template>

<script>
    import FriendContOneCn2t1 from '../components/FriendContOneCn2t1'
    export default {
      name:"FriendContOneCn2",
      components: {
        FriendContOneCn2t1,
      },
      data(){
        return{
          result:[],
          // StyleRecommendDay:[]
        }
      },
        methods: {
            // 选择方法中，进行路由的切换
          delect(e){
            $(e.currentTarget).parent().remove();
          }
        },
      created () {

        $.get('http://localhost:3000/watchper', (data)=> {
          // console.log(data);
          // console.log(data.obj.result);
          this.result=data.obj.result;
          // console.log(this.result);
        });
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
  }
</style>
