<template>
    <div class="DailySpecialSection">
      <div class="DailySpecialSectionTwo" v-for="sssA in Music">
        <div class="DailySpecialSectionTwo1Div">
          <p class="DailySpecialSectionTwo1Div1P"><img :src="sssA.MusicImg" alt=""></p>
          <p class="DailySpecialSectionTwo1Div2P">
            <span class="DailySpecialSectionTwo1Div2P1Span">{{sssA.MusicName}}</span>
            <span class="DailySpecialSectionTwo1Div2P2Span">{{sssA.MusicIdName}}</span>
          </p>
        </div>
        <div class="DailySpecialSectionTwo2Div">
          <img src="../../static/images/DailySpecialSection4.png" alt="">
          <img src="../../static/images/DailySpecialSection5.png" alt="">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DailySpecialSection",
      data(){
          return{
            Music:[
              {
                MusicImg:'../../static/images/DailySpecialSection3.png',
                MusicName:'走马（Cover：陈粒）',
                MusicIdName:'摩登兄弟-摩登兄弟',
              },
              {
                MusicImg:'../../static/images/DailySpecialSection3.png',
                MusicName:'走马（Cover：陈粒）',
                MusicIdName:'摩登兄弟-摩登兄弟',
              },
              {
                MusicImg:'../../static/images/DailySpecialSection3.png',
                MusicName:'走马（Cover：陈粒）',
                MusicIdName:'摩登兄弟-摩登兄弟',
              },
              {
                MusicImg:'../../static/images/DailySpecialSection3.png',
                MusicName:'走马（Cover：陈粒）',
                MusicIdName:'摩登兄弟-摩登兄弟',
              },
              {
                MusicImg:'../../static/images/DailySpecialSection3.png',
                MusicName:'走马（Cover：陈粒）',
                MusicIdName:'摩登兄弟-摩登兄弟',
              },
              {
                MusicImg:'../../static/images/DailySpecialSection3.png',
                MusicName:'走马（Cover：陈粒）',
                MusicIdName:'摩登兄弟-摩登兄弟',
              },
              {
                MusicImg:'../../static/images/DailySpecialSection3.png',
                MusicName:'走马（Cover：陈粒）',
                MusicIdName:'摩登兄弟-摩登兄弟',
              },
              {
                MusicImg:'../../static/images/DailySpecialSection3.png',
                MusicName:'走马（Cover：陈粒）',
                MusicIdName:'摩登兄弟-摩登兄弟',
              },
              {
                MusicImg:'../../static/images/DailySpecialSection3.png',
                MusicName:'走马（Cover：陈粒）',
                MusicIdName:'摩登兄弟-摩登兄弟',
              },
              {
                MusicImg:'../../static/images/DailySpecialSection3.png',
                MusicName:'走马（Cover：陈粒）',
                MusicIdName:'摩登兄弟-摩登兄弟',
              },
              {
                MusicImg:'../../static/images/DailySpecialSection3.png',
                MusicName:'走马（Cover：陈粒）',
                MusicIdName:'摩登兄弟-摩登兄弟',
              },
              {
                MusicImg:'../../static/images/DailySpecialSection3.png',
                MusicName:'走马（Cover：陈粒）',
                MusicIdName:'摩登兄弟-摩登兄弟',
              },
              {
                MusicImg:'../../static/images/DailySpecialSection3.png',
                MusicName:'走马（Cover：陈粒）',
                MusicIdName:'摩登兄弟-摩登兄弟',
              },
              {
                MusicImg:'../../static/images/DailySpecialSection3.png',
                MusicName:'走马（Cover：陈粒）',
                MusicIdName:'摩登兄弟-摩登兄弟',
              },
              {
                MusicImg:'../../static/images/DailySpecialSection3.png',
                MusicName:'走马（Cover：陈粒）',
                MusicIdName:'摩登兄弟-摩登兄弟',
              },
            ]
          }
      }
    }
</script>

<style scoped>
  .DailySpecialSection{
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-left: 0.1rem;
    box-sizing: border-box;
  }
  .DailySpecialSectionTwo{
    width: 100%;
    height: 0.55rem;
    padding-right: 0.11rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e2e3e5;
  }
  .DailySpecialSectionTwo1Div{
    height: 0.4rem;
    display: flex;
  }
  .DailySpecialSectionTwo1Div1P img{
    width: 0.4rem;
    height: 0.4rem;
    margin-right: 0.1rem;
  }
  .DailySpecialSectionTwo1Div2P span{
    display: block;
    margin-top: 0.04rem;
  }
  .DailySpecialSectionTwo1Div2P1Span{
    font-size: 0.16rem;
    color: #313133;
  }
  .DailySpecialSectionTwo1Div2P2Span{
    font-size: 0.12rem;
    color: #7a7b7d;
  }
  .DailySpecialSectionTwo2Div{
    height: 0.4rem;
    display: flex;
    align-items: center;
  }
  .DailySpecialSectionTwo2Div img:nth-child(1){
    width: 0.2rem;
    height: 0.2rem;
    margin-right: 0.17rem;
  }
  .DailySpecialSectionTwo2Div img:nth-child(2){
    width: 0.2rem;
    height: 0.05rem;
  }
</style>
