<template>
  <div class="MyMusicCreateList">
    <MyMusicCreateListOne></MyMusicCreateListOne>
    <MyMusicCreateListOne></MyMusicCreateListOne>
  </div>
</template>

<script>
    import MyMusicCreateListOne from './MyMusicCreateListOne'
    export default {
        name: "MyMusicCreateList",
        components:{
          MyMusicCreateListOne
        }
    }
</script>

<style scoped lang="scss">

</style>
