<template>
<<<<<<< HEAD
  <friend></friend>
=======
<<<<<<< HEAD
  <MusicList></MusicList>
</template>
<script>
import MusicList from './page/MusicList';
export default {
  name: 'app',
  components: {
    MusicList,
  }
}
</script>

<style scoped lang="scss">

  #app{
    height: 100%;
  }

=======
  <div id="app">
    <router-view></router-view>
  </div>
>>>>>>> c7563a8e07fcc11902cbf0dc43d3d41cffa0af93
</template>

<script>
  import Friend from './page/Friend'
  export default {
    name: 'App',
    components:{
      Friend,
    }
  }
</script>

<style scoped>
  #app{
    height: 100%;
  }
>>>>>>> 9cb83ac2f1f8457850e3656e932d5f8d9c4ada00
</style>

