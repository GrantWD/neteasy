<template>
  <div class="DailySpecial">
    <DailySpecialHeader></DailySpecialHeader>
    <DailySpecialAdvertising></DailySpecialAdvertising>
    <DailySpecialSectionOne></DailySpecialSectionOne>
    <DailySpecialSection></DailySpecialSection>
    <Footer></Footer>
  </div>
</template>

<script>
  import DailySpecialHeader from '../components/DailySpecialHeader'
  import DailySpecialAdvertising from '../components/DailySpecialAdvertising'
  import DailySpecialSectionOne from '../components/DailySpecialSectionOne'
  import DailySpecialSection from '../components/DailySpecialSection'
  import Footer from '../components/Footer'
    export default {
        name: "DailySpecial",
      components:{
        DailySpecialHeader,
        DailySpecialAdvertising,
        DailySpecialSectionOne,
        DailySpecialSection,
        Footer,
      }
    }
</script>

<style scoped>
  .DailySpecial{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
