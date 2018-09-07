<template>
  <div class="fr">
   <friend-header></friend-header>
   <friend-cont></friend-cont>
   <Footer></Footer>
  </div>
</template>

<script >
  import FriendHeader from '../components/FriendHeader'
  import FriendCont from '../components/FriendCont'
  import Footer from '../components/Footer'
  export default {
    components:{
      FriendHeader,
      FriendCont,
      Footer
    },
    name: 'Friend',
    data () {
      return {
        // msg: 'vuew2x'
      }
    }
  }
</script>


<style lang="scss" scoped>
   .fr{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
   }
</style>
