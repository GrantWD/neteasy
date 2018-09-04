<template>
  <div id="app">
    <PlayerMusic></PlayerMusic>
    <!-- <MusicList></MusicList> -->
  </div>
</template>
<script>
import PlayerMusic from './page/PlayerMusic.vue';
import MusicList from './page/MusicList.vue';
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    PlayerMusic,
    MusicList
  } 
}
</script>


<style scoped>
  #app{
    height: 100%;
  }
</style>
