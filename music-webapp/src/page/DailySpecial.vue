<template>
  <div class="DailySpecial">
    <DailySpecialHeader :sssA="DailySpecialHeader"></DailySpecialHeader>
    <DailySpecialAdvertising :sssB="DailySpecialAdvertising"></DailySpecialAdvertising>
    <DailySpecialSectionOne :sssC="DailySpecialSectionOne"></DailySpecialSectionOne>
    <DailySpecialSection :sssD="Music"></DailySpecialSection>
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
      },
      data(){
        return{
          DailySpecialHeader:{},
          DailySpecialAdvertising:{},
          DailySpecialSectionOne:{},
          Music:[],
        }
      },
      created(){
          $.get("http://localhost:3000/dayrecommend",(data)=>{
            this.DailySpecialHeader = data.obj.DailySpecialHeader
            this.DailySpecialAdvertising = data.obj.DailySpecialAdvertising
            this.DailySpecialSectionOne = data.obj.DailySpecialSectionOne
            this.Music = data.obj.Music
          })
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
