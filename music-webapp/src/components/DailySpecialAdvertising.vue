<template>
    <div class="DailySpecialAdvertising">
      <img :src="img" alt="">
    </div>
</template>

<script>
    export default {
        name: "DailySpecialAdvertising",
      data(){
          return{
            img:'http://p1.music.126.net/gdpGtI8Yo5ciy0GNe3FUbg==/109951163534380906.jpg',
          }
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
