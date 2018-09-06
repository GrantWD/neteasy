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
