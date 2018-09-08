<template>
    <div class="DailySpecialHeader">
      <router-link to="/">
        <img src="../../static/images/DailySpecialHeader1.png" alt="">
      </router-link>
      <span>{{sssA.name}}</span>
      <router-link to="">
        <img src="../../static/images/playing.png" alt="">
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "DailySpecialHeader",
      data(){
          return{

          }
      },
      props:{
        sssA:Object
      }
    }
</script>

<style scoped>
  .DailySpecialHeader{
    height: 0.43rem;
    background: #d83f37;
    padding: 0 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .DailySpecialHeader img{
    width: 0.32rem;
    height: 0.32rem;
  }
  .DailySpecialHeader span{
    font-size: 0.17rem;
    color: #ffffff;
  }
</style>
