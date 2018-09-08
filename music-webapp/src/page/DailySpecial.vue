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
          DailySpecialHeader:{
            name:'每日推荐'
          },
          DailySpecialAdvertising:{
            img:'../../static/images/DailySpecial1.png',
          },
          DailySpecialSectionOne:{
            PlayAll:'播放全部',
            MultipleChoice:'多选',
          },
          Music:[
            {
              MusicImg:'../../static/images/DailySpecial2.png',
              MusicName:'Superstar',
              MusicIdName:'Beatrich - Superstar',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial3.png',
              MusicName:'xxxx（吃醋）',
              MusicIdName:'xxxxxxx',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial4.png',
              MusicName:'往后余生（原唱：马良）',
              MusicIdName:'王贰浪 - 往后余生',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial5.png',
              MusicName:'我已经爱上你（情词尧/二郎）',
              MusicIdName:'情词尧二郎-一秒钟而已',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial6.png',
              MusicName:'没什么大不了（xxxxx）',
              MusicIdName:'Maxone/夏璃夜',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial7.png',
              MusicName:'Flower Dance',
              MusicIdName:'Dj Okawari - A Cup Of Coffee',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial8.png',
              MusicName:'盗将行',
              MusicIdName:'花粥/马雨阳 - 粥请客（二）',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial9.png',
              MusicName:'Solo',
              MusicIdName:'Clean Bandit/Demi Lovato - Solo',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial10.png',
              MusicName:'Hymn For The Weekend [Remix]',
              MusicIdName:'Alan Walker/Coldplay',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial11.png',
              MusicName:'secret base ~君',
              MusicIdName:'茅野爱衣',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial2.png',
              MusicName:'Superstar',
              MusicIdName:'Beatrich - Superstar',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial3.png',
              MusicName:'xxxx（吃醋）',
              MusicIdName:'xxxxxxx',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial4.png',
              MusicName:'往后余生（原唱：马良）',
              MusicIdName:'王贰浪 - 往后余生',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial5.png',
              MusicName:'我已经爱上你（情词尧/二郎）',
              MusicIdName:'情词尧二郎-一秒钟而已',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial6.png',
              MusicName:'没什么大不了（xxxxx）',
              MusicIdName:'Maxone/夏璃夜',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial7.png',
              MusicName:'Flower Dance',
              MusicIdName:'Dj Okawari - A Cup Of Coffee',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial8.png',
              MusicName:'盗将行',
              MusicIdName:'花粥/马雨阳 - 粥请客（二）',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial9.png',
              MusicName:'Solo',
              MusicIdName:'Clean Bandit/Demi Lovato - Solo',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial10.png',
              MusicName:'Hymn For The Weekend [Remix]',
              MusicIdName:'Alan Walker/Coldplay',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial11.png',
              MusicName:'secret base ~君',
              MusicIdName:'茅野爱衣',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial2.png',
              MusicName:'Superstar',
              MusicIdName:'Beatrich - Superstar',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial3.png',
              MusicName:'xxxx（吃醋）',
              MusicIdName:'xxxxxxx',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial4.png',
              MusicName:'往后余生（原唱：马良）',
              MusicIdName:'王贰浪 - 往后余生',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial5.png',
              MusicName:'我已经爱上你（情词尧/二郎）',
              MusicIdName:'情词尧二郎-一秒钟而已',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial6.png',
              MusicName:'没什么大不了（xxxxx）',
              MusicIdName:'Maxone/夏璃夜',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial7.png',
              MusicName:'Flower Dance',
              MusicIdName:'Dj Okawari - A Cup Of Coffee',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial8.png',
              MusicName:'盗将行',
              MusicIdName:'花粥/马雨阳 - 粥请客（二）',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial9.png',
              MusicName:'Solo',
              MusicIdName:'Clean Bandit/Demi Lovato - Solo',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial10.png',
              MusicName:'Hymn For The Weekend [Remix]',
              MusicIdName:'Alan Walker/Coldplay',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial11.png',
              MusicName:'secret base ~君',
              MusicIdName:'茅野爱衣',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial2.png',
              MusicName:'Superstar',
              MusicIdName:'Beatrich - Superstar',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial3.png',
              MusicName:'xxxx（吃醋）',
              MusicIdName:'xxxxxxx',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial4.png',
              MusicName:'往后余生（原唱：马良）',
              MusicIdName:'王贰浪 - 往后余生',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial5.png',
              MusicName:'我已经爱上你（情词尧/二郎）',
              MusicIdName:'情词尧二郎-一秒钟而已',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial6.png',
              MusicName:'没什么大不了（xxxxx）',
              MusicIdName:'Maxone/夏璃夜',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial7.png',
              MusicName:'Flower Dance',
              MusicIdName:'Dj Okawari - A Cup Of Coffee',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial8.png',
              MusicName:'盗将行',
              MusicIdName:'花粥/马雨阳 - 粥请客（二）',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial9.png',
              MusicName:'Solo',
              MusicIdName:'Clean Bandit/Demi Lovato - Solo',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial10.png',
              MusicName:'Hymn For The Weekend [Remix]',
              MusicIdName:'Alan Walker/Coldplay',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial11.png',
              MusicName:'secret base ~君',
              MusicIdName:'茅野爱衣',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial2.png',
              MusicName:'Superstar',
              MusicIdName:'Beatrich - Superstar',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial3.png',
              MusicName:'xxxx（吃醋）',
              MusicIdName:'xxxxxxx',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial4.png',
              MusicName:'往后余生（原唱：马良）',
              MusicIdName:'王贰浪 - 往后余生',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial5.png',
              MusicName:'我已经爱上你（情词尧/二郎）',
              MusicIdName:'情词尧二郎-一秒钟而已',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial6.png',
              MusicName:'没什么大不了（xxxxx）',
              MusicIdName:'Maxone/夏璃夜',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial7.png',
              MusicName:'Flower Dance',
              MusicIdName:'Dj Okawari - A Cup Of Coffee',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial8.png',
              MusicName:'盗将行',
              MusicIdName:'花粥/马雨阳 - 粥请客（二）',
              True:'true',
            },
            {
              MusicImg:'../../static/images/DailySpecial9.png',
              MusicName:'Solo',
              MusicIdName:'Clean Bandit/Demi Lovato - Solo',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial10.png',
              MusicName:'Hymn For The Weekend [Remix]',
              MusicIdName:'Alan Walker/Coldplay',
              True:'false',
            },
            {
              MusicImg:'../../static/images/DailySpecial11.png',
              MusicName:'secret base ~君',
              MusicIdName:'茅野爱衣',
              True:'true',
            },
          ],
        }
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
