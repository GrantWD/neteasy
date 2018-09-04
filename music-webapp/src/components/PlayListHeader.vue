<template>
    <header>
        <div class="head-l"></div>
        <div class="head-m">歌单</div>
        <div class="head-r"></div>
    </header>
</template>

<script>
    export default {
        data:function(){
            return {}
        },
        methods: {
        }
    }
    
</script>

<style lang="scss" scoped>

    $redColor:#d33a31;
    $backgroundUrl:'../../static/images/';
    $headHeight:.42rem;
    $iconSize:.32rem;
    $iconSmallSize:.3rem;
    header{
        height: $headHeight;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:  $redColor;
        font-size: .16rem;
        color:#fff;
        .head-l,.head-r{
            height: $iconSize;
            width: $iconSize;
            background-size:100%;
        }
        .head-l{
            margin-left: .1rem;
            background-image: url(#{$backgroundUrl}back.png)
        }
        .head-r{
            margin-right: .1rem;
            background-image: url(#{$backgroundUrl}playing.png)
        }
    }
</style>


