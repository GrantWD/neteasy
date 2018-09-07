<template>
  <div class="StyleRecommendSection">
    <StyleRecommendSwiper></StyleRecommendSwiper>
    <StyleRecommendDay :sssD="StyleRecommendDay"></StyleRecommendDay>
    <StyleRecommendMusic v-for="(sssA,index) in StyleRecommendMusic" :key="sssA.index" :sssA="sssA"></StyleRecommendMusic>
    <StyleRecommendVideo :sssC="StyleRecommendVideo"></StyleRecommendVideo>
    <StyleRecommendVideoMusic v-for="(sssB,index) in StyleRecommendVideoMusic" :key="sssB.index" :sssB="sssB"></StyleRecommendVideoMusic>
  </div>
</template>

<script>
  import StyleRecommendSwiper from './StyleRecommendSwiper'
  import StyleRecommendDay from './StyleRecommendDay'
  import StyleRecommendMusic from './StyleRecommendMusic'
  import StyleRecommendVideo from './StyleRecommendVideo'
  import StyleRecommendVideoMusic from './StyleRecommendVideoMusic'
    export default {
        name: "StyleRecommendSection",
      components:{
        StyleRecommendSwiper,
        StyleRecommendDay,
        StyleRecommendMusic,
        StyleRecommendVideo,
        StyleRecommendVideoMusic,
      },
      data(){
        return{
          StyleRecommendMusic:[
            {
              title:'推荐歌单',
              arr:[
                {
                  url:'http://p1.music.126.net/YB0w6R5f3gZNkxo4cJ5KSA==/19104014533272472.jpg?param=140y140',
                  name:'仰望天空，只想这样静静地思考',
                  PlayNum: '122万'
                },
                {
                  url:'http://p1.music.126.net/vvlwg8k8fCYGBeVBiyBarA==/109951163527720887.jpg?param=140y140',
                  name:'谁说中文说唱只有叨叨叨的情话',
                  PlayNum: '41万'
                },
                {
                  url:'http://p1.music.126.net/8Wo8aQ6w_kORIqsuCSlDMQ==/109951163446750024.jpg?param=140y140',
                  name:'Bass Institute｜Bass House',
                  PlayNum: '68万'
                },
                {
                  url:'http://p1.music.126.net/APzL_5Nqs0pPY5_ijDadvA==/109951163449639455.jpg?param=140y140',
                  name:'仰望天空，只想这样静静地思考',
                  PlayNum: '122万'
                },
                {
                  url:'http://p1.music.126.net/Ls75XnuNI3UrDTorU7Xh5Q==/109951163516080007.jpg?param=140y140',
                  name:'仰望天空，只想这样静静地思考',
                  PlayNum: '122万'
                },
                {
                  url:'http://p1.music.126.net/_asKtugCfeC7on-c--7K2w==/109951163534739629.jpg?param=140y140',
                  name:'仰望天空，只想这样静静地思考',
                  PlayNum: '122万'
                },
              ],
            },
            {
              title:'最新音乐',
              arr:[
                {
                  url:'http://p1.music.126.net/NWhzcrT1PSAGq4yc-WqyxA==/19218363742489476.jpg?param=140y140',
                  name:'纯音乐:100%愉快「心情必备」持续更新',
                  PlayNum: '10万'
                },
                {
                  url:'http://p1.music.126.net/YTjh2eggiNdCCSfr0Sa2ig==/109951163531436091.jpg?param=140y140',
                  name:'复古迷幻|无限慵懒的夏末秋初',
                  PlayNum: '57471'
                },
                {
                  url:'http://p1.music.126.net/LduH3dTGvkaZqxeYASYiuQ==/109951163469234264.jpg?param=140y140',
                  name:'粤语对唱｜耿耿于怀只因曾经一往情深',
                  PlayNum: '74590'
                },
                {
                  url:'http://p1.music.126.net/8ZzuNypxeiHyr6I3DoudYQ==/109951163519258184.jpg?param=140y140',
                  name:'「伪治愈系Rap」你价值连城伤口的良药',
                  PlayNum: '36736'
                },
                {
                  url:'http://p1.music.126.net/rb_igkE2Kr9Io4zXczfNbw==/109951163522272010.jpg?param=140y140',
                  name:'「氧气电子」扑面而来的H₂O',
                  PlayNum: '30562'
                },
                {
                  url:'http://p1.music.126.net/PmZl8QBnoZF_GWxrZ6Lkog==/109951163467442961.jpg?param=140y140',
                  name:'那些散发着文艺气息的法国电影',
                  PlayNum: '150万'
                },
              ],
            },
          ],
          StyleRecommendVideoMusic:[
            {
              Img:'../../static/images/StyleRecommendVideoMusic3.png',
              MusicName:'当音乐声想起，她的声音一出来，刘德华陈奕迅郭富城刘德华陈奕迅郭富城',
              PlayNum:'242万',
              CommentNum:'1933',
              IdImg:'../../static/images/StyleRecommendVideoMusic2.png',
              IdName:'虐心音乐厅',
              MusicClass:'视频',
            },{
              Img:'../../static/images/StyleRecommendVideoMusic4.png',
              MusicName:'上半年最火网络中文歌曲大盘点！歌名快来拿走吧',
              PlayNum:'256万',
              CommentNum:'2616',
              IdImg:'../../static/images/StyleRecommendVideoMusic2.png',
              IdName:'音乐Wu哥',
              MusicClass:'视频',
            },{
              Img:'../../static/images/StyleRecommendVideoMusic5.png',
              MusicName:'声优怪物花泽香菜《恋爱循环》听完都想恋爱了！',
              PlayNum:'22万',
              CommentNum:'400',
              IdImg:'../../static/images/StyleRecommendVideoMusic2.png',
              IdName:'全球音乐吧',
              MusicClass:'视频',
            },
          ],
          StyleRecommendVideo: {
              Img:'../../static/images/StyleRecommendVideo1.png',
              IdImg:'../../static/images/StyleRecommendVideo2.png',
              IdName:'之一w',
              PlayNum:'21万',
              CommentOrd:'248',
            },
          StyleRecommendDay:[
            {
              to:'',
              img:'../../static/images/StyleRecommendDay1.gif',
              name:'私人FM',
            },
            {
              to:'/DailySpecial',
              img:'../../static/images/StyleRecommendDay2.gif',
              name:'每日推荐',
            },
            {
              to:'MusicList',
              img:'../../static/images/StyleRecommendDay3.gif',
              name:'歌单',
            },
            {
              to:'',
              img:'../../static/images/StyleRecommendDay4.gif',
              name:'排行榜',
            },
          ],
        }
      }
    }
</script>

<style scoped>
  .StyleRecommendSection{
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
