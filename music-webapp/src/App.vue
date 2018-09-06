<template>
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

</style>
