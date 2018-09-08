<template>
    <div class="DailySpecialAdvertising">
      <img :src="sssB.img" alt="">
    </div>
</template>

<script>
    export default {
        name: "DailySpecialAdvertising",
      data(){
          return{

          }
      },
      props:{
        sssB:Object
      }
    }
</script>

<style scoped>
  .DailySpecialAdvertising{
    height: 1.67rem;
  }
  .DailySpecialAdvertising img{
    width: 100%;
    height: 1.67rem;
  }
</style>
