<template>
  <div class="fr">
   <friend-header></friend-header>
   <friend-cont></friend-cont>
  </div>
</template>

<script >
  import FriendHeader from '../components/FriendHeader'
  import FriendCont from '../components/FriendCont'
  export default {
    components:{
      FriendHeader,
      FriendCont
    },
    name: 'Friend',
    data () {
      return {
        // msg: 'vuew2x'
      }
    }
  }
</script>


<style scoped>

</style>
