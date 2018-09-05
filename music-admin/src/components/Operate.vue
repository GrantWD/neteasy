<template>
    <div class='contentOperate'>
        <a href="javascript:void(0)" class='add'><i class="iconfont icon-add"></i>添加歌曲</a>
        <a href="javascript:void(0)" class='desc'><i class="iconfont icon-delete"></i>批量删除</a>
        <a href="javascript:void(0)" class='deleteMulti'><i class="iconfont icon-share"></i>批量导出</a>
        <a href="javascript:void(0)" class='exportMulti'><i class="iconfont icon-calendar"></i>详细信息</a>
        <a href="javascript:void(0)" class='musicTotal'><i class="iconfont icon-folder"></i>总共数据<strong class="num">125</strong></a>
    </div>
</template>
<script>
export default {
  name: 'contentOperate',
  data () {
    return {
    }
  }
}
</script>
<style lang='scss' scoped>
    .contentOperate{
        $mainColor:#ea2000;
        font-size: 0;
        a{
            display: inline-block;
            padding: 5px 8px;
            margin-right: 5px;
            background-color: $mainColor;
            font-size: 14px;
            color:#fff;
            border-radius: 3px;
            // border: 1px solid #ff2000;
            .iconfont{
                margin-right:4px;
            }
        }
        
    }
</style>
