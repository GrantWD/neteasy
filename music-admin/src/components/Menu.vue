<template>
	<div class="menu">
        <a href="#"><i class="iconfont icon-calendar"></i>详细信息</a>
        <a href="#"><i class="iconfont icon-edit"></i>修改</a>
        <a href="#"><i class="iconfont icon-delete"></i>删除</a>
        <a href="#"><i class="iconfont icon-more"></i>移动</a>
 	</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
 	$backgroundUrl:'../../static/images/';
	$mainColor:#ea2000;
    .menu{
        border:1px solid #d3d3d3;
        width:120px;
        a{
            display:block;
            width:120px;
            height: 35px;
            line-height: 35px;
            font-size: 14px;
            color:#333;
            background: #fff;
            .iconfont{
                margin-left:5px;
                margin-right: 5px;
                vertical-align: middle;
            }
            &:hover{
                background: #bbb;
                color:#000;
            }
        }
        a+a{
            border-top:1px solid #ddd;
        }
    }
	

</style>
