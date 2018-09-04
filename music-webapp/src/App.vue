<template>
  <div id="app">
   <HostStation></HostStation>
  </div>
</template>

<script>
import HostStation from './page/HostStation';
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    HostStation
  }
}
</script>

<style>
  #app {
    height: 100%;
  }
</style>

