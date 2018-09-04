<template>
  <div id="app">
   <MusicList></MusicList>

  </div>
</template>
<script>
import MusicList from './page/MusicList.vue';
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    MusicList
  }
}
</script>

<style lang="scss" scoped>
	#app{
		height: 100%;
	}
	
</style>
