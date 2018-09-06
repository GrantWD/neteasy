<template>
<<<<<<< HEAD
	<router-view></router-view>
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

=======
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import StyleRecommend from './page/StyleRecommend'
  export default {
    name: 'App',
    components:{
      StyleRecommend,
    }
  }
</script>

<style scoped>
  #app{
    height: 100%;
  }
>>>>>>> b58a65d117bb9290963432caee50746f4eb23f84
</style>
