<template>
  <div class="Ranking">
    <MyMusicHeader></MyMusicHeader>
    <div class="RankingBox">
      <div>
        <RankingOfficial v-for="arrlist in arr" :key="arrlist.index" :arrlist="arrlist"></RankingOfficial>
        <RankimgGUList v-for="brrlist in brr" :key="brrlist.index" :brrlist="brrlist"></RankimgGUList>
      </div>
    </div>
    <Footer></Footer>
  </div>

</template>

<script>
  import MyMusicHeader from '../components/MyMusicHeader'
  import RankingOfficial from '../components/RankingOfficial'
  import RankimgGUList from '../components/RankingGUList'
  import Footer from '../components/Footer'
    export default {
        name: "Ranking",
        components:{
          MyMusicHeader,
          RankingOfficial,
          RankimgGUList,
          Footer
        },
      created(){
        $.get("http://localhost:3000/ranking",(data)=>{
          this.arr = data.obj.arr
          this.brr = data.obj.brr
        })
      },
        data(){
          return{
            arr:[
              {
                titone: '云音乐官方榜',
                arrdel: [
                  {
                    imgSrc12: '../../static/images/ajRankimg1.png',
                    con1: '1.坠落-李佳隆',
                    con2: '2.Electeicity-Silk City/Dua Lipa/Kjhsk/Goaksj',
                    con3: '3.We Go Up - NCT DREAM'
                  },
                  {
                    imgSrc12: '../../static/images/ajRankimg2.png',
                    con1: '1.不染-毛不易',
                    con2: '2.凌晨三点（demo）-陈硕子',
                    con3: '3.倒数-G.E.M.邓紫棋'
                  },
                  {
                    imgSrc12: '../../static/images/ajRankimg3.png',
                    con1: '1.幼稚的歌-Quinn葵因',
                    con2: '2.舍离书-花粥',
                    con3: '3.说书人-暗杠/剡子'
                  },
                  {
                    imgSrc12: '../../static/images/ajRankimg4.png',
                    con1: '1.盗将行-花粥/马雨阳',
                    con2: '2.去年夏天-王大毛',
                    con3: '3.一百万个可能-Christine Welch'
                  },
                  {
                    imgSrc12: '../../static/images/ajRankimg5.png',
                    con1: '1.风誓-刘珂矣',
                    con2: '2.南游记-南游记乐队',
                    con3: '3.三字言-李想Evelyn'
                  },
                  {
                    imgSrc12: '../../static/images/ajRankimg6.png',
                    con1: '1.花粥 833133',
                    con2: '2.陈粒 818987',
                    con3: '3.陈奕迅 806307'
                  },
                ]
              }
            ],
            brr:[
              {
                txtone:'全球榜',
                brrdel:[
                  {
                    txtconone: '说唱TOP榜',
                    imgSrc13: '../../static/images/ajRankGobalimg1.png'
                  },
                  {
                    txtconone: '云音乐电音榜',
                    imgSrc13: '../../static/images/ajRankGobalimg2.png'
                  },
                  {
                    txtconone: '江小白YOLO云音乐说唱榜',
                    imgSrc13: '../../static/images/ajRankGobalimg3.png'
                  },
                  {
                    txtconone: '抖音排行榜',
                    imgSrc13: '../../static/images/ajRankGobalimg4.png'
                  },
                  {
                    txtconone: '云音乐ACG音乐榜',
                    imgSrc13: '../../static/images/ajRankGobalimg5.png'
                  },
                  {
                    txtconone: '云音乐国电榜',
                    imgSrc13: '../../static/images/ajRankGObalimg6.png'
                  },
                  {
                    txtconone: 'Beatport全球电子舞曲榜',
                    imgSrc13: '../../static/images/ajRankGobalimg7.png'
                  },
                  {
                    txtconone: '日本Oricon周榜',
                    imgSrc13: '../../static/images/ajRankGobalimg8.png'
                  },
                  {
                    txtconone: '云音乐古典音乐榜',
                    imgSrc13: '../../static/images/ajRankGobalimg9.png'
                  },
                  {
                    txtconone: 'UK排行榜周榜',
                    imgSrc13: '../../static/images/ajRankGobalimg10.png'
                  },
                  {
                    txtconone: '美国Billborad周榜',
                    imgSrc13: '../../static/images/ajRankGobalimg11.png'
                  },
                  {
                    txtconone: '法国 NRJ Vos Hits榜',
                    imgSrc13: '../../static/images/ajRankGobalimg12.png'
                  },
                  {
                    txtconone: 'iTunes榜',
                    imgSrc13: '../../static/images/ajRankGobalimg13.png'
                  },
                  {
                    txtconone: 'Hit FM TOP榜',
                    imgSrc13: '../../static/images/ajRankGobalimg14.png'
                  },
                  {
                    txtconone: '云音乐韩语榜榜',
                    imgSrc13: '../../static/images/ajRankGobalimg15.png'
                  },
                  {
                    txtconone: '英国Q杂志中文版周榜',
                    imgSrc13: '../../static/images/ajRankGobalimg16.png'
                  },
                  {
                    txtconone: '电竞音乐榜',
                    imgSrc13: '../../static/images/ajRankGobalimg17.png'
                  },
                  {
                    txtconone: 'KTV唛榜',
                    imgSrc13: '../../static/images/ajRankGobalimg18.png'
                  },
                  {
                    txtconone: '台湾Hito排行榜',
                    imgSrc13: '../../static/images/ajRankGobalimg19.png'
                  },
                  {
                    txtconone: '中国TOP排行榜（港台榜）',
                    imgSrc13: '../../static/images/ajRankGobalimg20.png'
                  },
                  {
                    txtconone: '中国TOP排行榜（内地榜）',
                    imgSrc13: '../../static/images/ajRankGobalimg21.png'
                  },
                  {
                    txtconone: '香港电台中文歌曲龙虎榜',
                    imgSrc13: '../../static/images/ajRankGobalimg22.png'
                  },
                  {
                    txtconone: '中国嘻哈榜',
                    imgSrc13: '../../static/images/ajRankGobalimg23.png'
                  },
                  {
                    txtconone: '2018全球粉丝打赏投票榜',
                    imgSrc13: '../../static/images/ajRankGobalimg24.png'
                  }
                ]
              },
              {
                txtone:'用户榜',
                brrdel:[
                  {
                    txtconone: '音乐达人榜',
                    imgSrc13: '../../static/images/ajUserimg1.png'
                  },
                  {
                    txtconone:'音乐新人榜',
                    imgSrc13:'../../static/images/ajUserimg2.png'
                  }
                ]
              }
            ]
          }

        }
    }
</script>

<style scoped lang="scss">
  .Ranking {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .RankingBox{
    width:100%;
    height:100%;
    display:flex;
    flex:1;
    overflow-y: scroll;
    flex-direction: column;
  }
</style>
