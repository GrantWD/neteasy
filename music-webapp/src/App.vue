<template>
  <div id="app">
   <MusicList></MusicList>
  </div>
</template>
<script>
import MusicList from './page/MusicList.vue';
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    MusicList
  } 
}
</script>


<style scoped>
  #app{
    height: 100%;
  }
</style>
