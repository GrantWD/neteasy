<template>
  <div class="MyMusicConList">
    <MyMusicConListOne></MyMusicConListOne>
    <MyMusicConListOne></MyMusicConListOne>
    <MyMusicConListOne></MyMusicConListOne>
    <MyMusicConListOne></MyMusicConListOne>
  </div>
</template>

<script>
    import MyMusicConListOne from './MyMusicConListOne'
    export default {
        name: "MyMusicConList",
        components:{
        MyMusicConListOne
      }
    }
</script>

<style scoped>

</style>
