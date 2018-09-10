<template>
    <form action="#" class="search">
        <label for=""></label><input v-model="searchInput" type="text" id="search" placeholder="目前只能按照创建者来查找">
        <button class="search-btn" v-on:click='search'><i class="iconfont icon-search"></i>搜索</button>
    </form>
</template>
<script>
export default {
  name: 'search',
  data () {
    return {
        searchInput:''
    }
  },
  methods: {
      // 只能根据歌手姓名来查找匹配，需要将input中的值获取到
      search(){
          // 将数据传到父组件
           this.$emit('searchName',this.searchInput)
      }
  }
}
</script>
<style lang='scss' scoped>
    $mainColor:#ea2000;
    .search{
        position: relative;
        display: inline-block;
        padding-bottom: 10px;
        #search{
            height: 40px;
            width:300px;
            border: 1px solid $mainColor;
            border-radius: 5px;

        }
        .search-btn{
            position: absolute;
            height:42px;
            width:60px;
            right: 0;
            top: 0;
            border: 1px solid $mainColor;
            background-color: $mainColor;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
            border-radius: 0 5px 5px 0;
            cursor: pointer;
        }
    }
</style>
