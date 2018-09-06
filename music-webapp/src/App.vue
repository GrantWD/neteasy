<template>
<<<<<<< HEAD
  <RadioDetail></RadioDetail>
=======
<<<<<<< HEAD
	<router-view></router-view>
>>>>>>> ff8c2250be208831c0f23d7e047d01da8a107d6c
</template>
<script>
<<<<<<< HEAD
import RadioDetail from './page/RadioDetail'
export default {
  name: 'app',
  components: {
    RadioDetail
=======
import MusicList from './page/MusicList';
import PlayerMusic from './page/PlayerMusic';
export default {
  name: 'app',
  components: {
    MusicList,
    PlayerMusic
>>>>>>> ff8c2250be208831c0f23d7e047d01da8a107d6c
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
