<template>
    <Header></Header>
</template>

<script>
import Header from '../components/Header'
import Table from '../components/Table'
import Aside from '../components/Aside'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
      Header,
      Table,
      Aside
  }
}
</script>

<style lang='scss' scoped>
</style>
