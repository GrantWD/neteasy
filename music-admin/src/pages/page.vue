<template>
    <div class="page">
        <Header></Header>
        <!-- <div class="main">
            <Aside></Aside>
            
        </div> -->
        <Table></Table>
        <Operate></Operate>
        <Search></Search>
        
    </div>
</template>

<script>
import Header from '../components/Header'
import Operate from '../components/Operate'
import Table from '../components/Table'
import Aside from '../components/Aside'
import Search from '../components/Search'
export default {
  name: 'page',
  data () {
    return {
    }
  },
  components: {
      Header,
      Table,
      Aside,
      Operate,
      Search
  }
}
</script>

<style lang='scss' scoped>
    .page{
        height:100%;
        .main{
            margin-top: 60px;
            position: absolute;
            left:0;
            top:0;
            bottom:0;
            right: 0;
            overflow:hidden;
        }
    }
</style>
