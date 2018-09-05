<template>
	<player-music></player-music>
</template>

<script>
import PlayerMusic from './page/PlayerMusic';
export default {
  name: 'app',
  components: {
    PlayerMusic
  }
}
</script>


<style scoped lang="scss">
  #app {
    height: 100%;
  }
</style>
