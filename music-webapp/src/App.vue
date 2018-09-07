<template>
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
  #app{
    height: 100%;
  }
</style>
