<template>
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
</template>

<script>
  import RadioDetail from './page/RadioDetail'
  export default {
    name: 'App',
    components:{
      RadioDetail
    }
  }
</script>

<style scoped>
  #app{
    height: 100%;
  }
>>>>>>> 9cb83ac2f1f8457850e3656e932d5f8d9c4ada00
</style>
