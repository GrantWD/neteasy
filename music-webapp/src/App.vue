<template>
	<MusicList></MusicList>
  <!-- <PlayerMusic></PlayerMusic> -->
</template>

<script>
import MusicList from './page/MusicList';
import PlayerMusic from './page/PlayerMusic';
export default {
  name: 'app',
  components: {
    MusicList,
    PlayerMusic
  }
}
</script>


<style scoped lang="scss">
  #app {
    height: 100%;
  }
</style>
