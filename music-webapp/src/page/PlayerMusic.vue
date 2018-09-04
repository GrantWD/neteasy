<template>
  <div class="playerPage">
    <PlayerHeader></PlayerHeader>
    <div class="playWrapper">
      <PlayerBody></PlayerBody>
    </div>
    <PlayerFooter></PlayerFooter>
  </div>
</template>

<script>
import PlayerHeader from '../components/PlayerHeader'
import PlayerBody from '../components/PlayerBody'
import PlayerFooter from '../components/PlayerFooter'
export default {
  name: 'playerPage',
  data () {
    return {
      
    }
  },
  components: {
    PlayerHeader,
    PlayerBody,
    PlayerFooter
  }
}
</script>

 
<style lang='scss' scoped>
	.playerPage{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
		height: 100%;
    background-color:#634f44;
    // 怎样使用PlayerBody组件定位，需要在外面增加一个元素吗
    .playWrapper{
      flex: 1;
    }
	}

</style>
