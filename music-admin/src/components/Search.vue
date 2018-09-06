<template>
    <form action="#" class="search">
        <label for=""></label><input type="text" id="search" placeholder="搜索歌曲">
        <button class="search-btn"><i class="iconfont icon-search"></i>搜索</button>
    </form>
</template>
<script>
export default {
  name: 'search',
  data () {
    return {
    }
  }
}
</script>
<style lang='scss' scoped>
    .search{
        position: relative;
        #search{
            height: 40px;
            width:200px;
        }
        .search-btn{
            position: absolute;
            height:44px;
            border:none;
            width:60px;
        }
    }
</style>
