<template>
  <div class="hello">
    <MyMusicHeader></MyMusicHeader>
    <MyMusicConList></MyMusicConList>
    <MyMusicSelect></MyMusicSelect>
  </div>
</template>

<script>
  import MyMusicHeader from '../components/MyMusicHeader'
  import MyMusicConList from '../components/MyMusicConList'
  import MyMusicSelect from '../components/MyMusicSelect'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'vuew2x'
    }
  },
  components: {
    MyMusicHeader,
    MyMusicConList,
    MyMusicSelect
  }
}
</script>

 
<style scoped>
 
</style>
