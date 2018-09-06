<template>
  <div class="StyleRecommendSection">
    <StyleRecommendSwiper></StyleRecommendSwiper>
    <StyleRecommendDay></StyleRecommendDay>
    <StyleRecommendMusic v-for="sssA in StyleRecommendMusic" :sssA="sssA"></StyleRecommendMusic>
    <StyleRecommendVideo></StyleRecommendVideo>
    <StyleRecommendVideoMusic v-for="sssB in StyleRecommendVideoMusic" :sssB="sssB"></StyleRecommendVideoMusic>
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
                  url:'../../static/images/StyleRecommendMusic2.jpg',
                  name:'失落少年孤独心俱乐部'
                },
                {
                  url:'../../static/images/StyleRecommendMusic2.jpg',
                  name:'失落少年孤独心俱乐部'
                },
                {
                  url:'../../static/images/StyleRecommendMusic2.jpg',
                  name:'失落少年孤独心俱乐部'
                },
                {
                  url:'../../static/images/StyleRecommendMusic2.jpg',
                  name:'失落少年孤独心俱乐部'
                },
                {
                  url:'../../static/images/StyleRecommendMusic2.jpg',
                  name:'失落少年孤独心俱乐部'
                },
                {
                  url:'../../static/images/StyleRecommendMusic2.jpg',
                  name:'失落少年孤独心俱乐部'
                },
              ],
            },
            {
              title:'推荐歌单',
              arr:[
                {
                  url:'../../static/images/StyleRecommendMusic2.jpg',
                  name:'失落少年孤独心俱乐部'
                },
                {
                  url:'../../static/images/StyleRecommendMusic2.jpg',
                  name:'失落少年孤独心俱乐部'
                },
                {
                  url:'../../static/images/StyleRecommendMusic2.jpg',
                  name:'失落少年孤独心俱乐部'
                },
                {
                  url:'../../static/images/StyleRecommendMusic2.jpg',
                  name:'失落少年孤独心俱乐部'
                },
                {
                  url:'../../static/images/StyleRecommendMusic2.jpg',
                  name:'失落少年孤独心俱乐部'
                },
                {
                  url:'../../static/images/StyleRecommendMusic2.jpg',
                  name:'失落少年孤独心俱乐部'
                },
              ],
            },
          ],
          StyleRecommendVideoMusic:[
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
