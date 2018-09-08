<template>
    <div class="DailySpecialSectionOne">
      <div class="DailySpecialSectionOne">
        <p><img src="../../static/images/DailySpecialSection1.png" alt="">{{sssC.PlayAll}}</p>
        <p><img src="../../static/images/DailySpecialSection2.png" alt="">{{sssC.MultipleChoice}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DailySpecialSectionOne",
      data(){
          return{

          }
      },
      props:{
          sssC:Object
      }
    }
</script>

<style scoped>
  .DailySpecialSectionOne{
    width: 100%;
    height: 0.5rem;
    border-bottom: 1px solid #e2e3e5;
    display: flex;
    justify-content: space-between;
    padding-right: 0.11rem;
    box-sizing: border-box;
  }
  .DailySpecialSectionOne p{
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 0.16rem;
    color: #323335;
  }
  .DailySpecialSectionOne p img{
    width: 0.2rem;
    height: 0.2rem;
    margin-right: 0.05rem;
  }
</style>
