<template>
  <div class="content">
    <accounts-cont-one></accounts-cont-one>
    <accounts-cont-two></accounts-cont-two>
    <accounts-cont-there></accounts-cont-there>
    <accounts-cont-four></accounts-cont-four>
  </div>
</template>

<script>
  import AccountsContOne from "../components/AccountsContOne.vue"
  import AccountsContTwo from "../components/AccountsContTwo.vue"
  import AccountsContThere from "../components/AccountsContThere.vue"
  import AccountsContFour from "../components/AccountsContFour.vue"
  export default {
    name:"AccountsCont",
    components:{
      AccountsContOne,
      AccountsContTwo,
      AccountsContThere,
      AccountsContFour
    },
    data(){
      return {


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
   .content{
     background:#eeeff0;
     flex:1;
     overflow-y: scroll;
     -webkit-flex-direction: column;
   }
</style>
