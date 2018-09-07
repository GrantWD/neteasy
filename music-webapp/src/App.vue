
<template>
<<<<<<< HEAD
  <MusicList :musicListInfo='musicListInfo'></MusicList>
</template>
<script>
import MusicList from './page/MusicList';
export default {
  name: 'app',
  data () {
    return {
      musicListInfo:{}
    }
  },
  components: {
    MusicList,
  },
  created () {
    $.get('http://localhost:3000/test', function(data) {
		  console.log(data);
		  console.log(data.status)
		  this.musicListInfo=data.obj.musicListInfo
		  console.log(this.musicListInfo);
		});
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
  export default {
    name: 'App',
    components:{

    },
  }
</script>

<style scoped>
>>>>>>> 62dfd8a70c99dd0bb29550fb429acb6f52fdd035
  #app{
    height: 100%;
  }
</style>

