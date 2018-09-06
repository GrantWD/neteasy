<template>
    <nav class="m-page">
        <a href="#" class="pageprv z-dis">上一页</a>
	    <a href="#">1</a>
	    <a href="#" class="z-crt">2</a>
	    <a href="#">3</a>
	    <a href="#">4</a>
	    <i class="return">...</i>
	    <a href="#">10</a>
	    <a href="#" class="pagenxt">下一页</a>
    </nav>
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
    .m-page{
        font-size: 0;
        i{
            display:inline-block;
            font-size: 12px;
            color: $mainColor;
            margin-right: 5px;
        }
        .pageprv,.pagenxt{
            width: 40px;
        }
        a{
            display: inline-block;
            width: 25px;
            height: 25px;
            line-height: 25px;
            margin-right: 4px;
            text-align: center;
            border: 1px solid $mainColor;
            font-size: 12px;
            color: $mainColor;
        }
        .z-crt{
            background: $mainColor;
            color: #fff;
        }
    }

</style>
