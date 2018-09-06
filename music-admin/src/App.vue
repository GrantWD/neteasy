<template>
  <div id="app">
      <page></page>
  </div>
</template>

<script>
import page from './pages/page'
export default {
  name: 'App',
  components: {
      page
  }
}
</script>

<style>
#app{
  height: 100%;
}
</style>
