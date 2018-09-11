<template>
	<div class="menu" v-on:click='select'>
        <a href="#" :val="list.detail"><i class="iconfont icon-calendar"></i>详细信息</a>
        <a href="#" :val="list.edit"><i class="iconfont icon-edit"></i>修改</a>
        <a href="#" :val="list.del"><i class="iconfont icon-delete"></i>删除</a>
        <a href="#" :val="list.move"><i class="iconfont icon-more"></i>移动</a>
 	</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        list:{
            detail:"detail",
            edit:"edit",
            del:"delete",
            move:"move"
        },
        editFlag:true
    }
  },
  methods: {
      select(e){
        let eve = event || window.event;
        let tar = eve.target || eve.srcElement;
        // 判断当前点击的是哪个选项利用绑定的val值
        let operate = tar.getAttribute('val');
        if(operate === "detail"){
            // 获得当前选项对应的tr的所有的内容
            console.log("详细信息");
            this.$emit('detail',true)

        }
        if(operate ==="edit"){
            // 并且将数据传人到edit中
            this.$emit('show',true)
        }
        if(operate === "delete"){
            console.log('删除');
            this.$emit('delInfo',true)
        }
        if(operate ==="move"){
            console.log("移动")
            this.$emit('move',true)
            return
        }
        
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
