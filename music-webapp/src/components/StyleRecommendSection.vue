<template>
  <div class="StyleRecommendSection">
    <StyleRecommendSwiper></StyleRecommendSwiper>
    <StyleRecommendDay></StyleRecommendDay>
    <StyleRecommendMusic v-for="(sssA,index,key) in StyleRecommendMusic" :sssA="sssA"></StyleRecommendMusic>
    <StyleRecommendVideo></StyleRecommendVideo>
    <StyleRecommendVideoMusic v-for="(sssB,index,key) in StyleRecommendVideoMusic1" :sssB="sssB"></StyleRecommendVideoMusic>
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
              title:'推荐歌单',
              arr:[
                {
                  url:'http://p1.music.126.net/YB0w6R5f3gZNkxo4cJ5KSA==/19104014533272472.jpg?param=140y140',
                  name:'仰望天空，只想这样静静地思考',
                  PlayNum: '122万'
                },
                {
                  url:'http://p1.music.126.net/YB0w6R5f3gZNkxo4cJ5KSA==/19104014533272472.jpg?param=140y140',
                  name:'仰望天空，只想这样静静地思考',
                  PlayNum: '122万'
                },
                {
                  url:'http://p1.music.126.net/YB0w6R5f3gZNkxo4cJ5KSA==/19104014533272472.jpg?param=140y140',
                  name:'仰望天空，只想这样静静地思考',
                  PlayNum: '122万'
                },
                {
                  url:'http://p1.music.126.net/YB0w6R5f3gZNkxo4cJ5KSA==/19104014533272472.jpg?param=140y140',
                  name:'仰望天空，只想这样静静地思考',
                  PlayNum: '122万'
                },
                {
                  url:'http://p1.music.126.net/YB0w6R5f3gZNkxo4cJ5KSA==/19104014533272472.jpg?param=140y140',
                  name:'仰望天空，只想这样静静地思考',
                  PlayNum: '122万'
                },
                {
                  url:'http://p1.music.126.net/YB0w6R5f3gZNkxo4cJ5KSA==/19104014533272472.jpg?param=140y140',
                  name:'仰望天空，只想这样静静地思考',
                  PlayNum: '122万'
                },
              ],
            },
          ],
          StyleRecommendVideoMusic1:[
            {
              Img:'../../static/images/StyleRecommendVideoMusic1.png',
              MusicName:'丑八怪',
              CommentNum:'69166',
              IdImg:'../../static/images/StyleRecommendVideoMusic2.png',
              IdName:'薛之谦'
            },
            {
              Img:'../../static/images/StyleRecommendVideoMusic1.png',
              MusicName:'丑八怪',
              CommentNum:'69166',
              IdImg:'../../static/images/StyleRecommendVideoMusic2.png',
              IdName:'薛之谦'
            },
            {
              Img:'../../static/images/StyleRecommendVideoMusic1.png',
              MusicName:'丑八怪',
              CommentNum:'69166',
              IdImg:'../../static/images/StyleRecommendVideoMusic2.png',
              IdName:'薛之谦'
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
