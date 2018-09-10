<template>
    <div class="edit">
        <div class="inner">
            <h3>编辑<i v-on:click="close" class="iconfont icon-close"></i></h3>
            <form action="">
                <p><label for="musicId">歌曲ID</label><input type="text" id="musicId"></p>
                <p><label for="musicName">歌曲名称</label><input type="text" id="musicName"></p>
                <p><label for="singer">歌手</label><input type="text" id="singer"></p>
                <p><label for="album">专辑</label><input type="text" id="album"></p>
                <p><label for="albumArt">封面</label><input type="text" id="albumArt"></p>
                <p><label for="playNum">次数</label><input type="text" id="playNum"></p>
                <button>确认</button><button>取消</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'edit',
  props: {
      flag:Boolean
  },
  data () {
    return {
    
    }
  },
  methods: {
      close () {
          console.log('关闭');
           this.$emit('closedit',false)
      }
  }
}
</script>
<style lang='scss' scoped>
    $mainColor:#ea2000;
    $bgColor:rgba(255,255,255,0);
    $borderSize:5px;
    .edit{
        position:fixed;
        top:0;
        left:0;
        bottom: 0;
        right: 0;
        background-color: $bgColor;
    }
    .inner{
        // display: inline-block;
        width:650px;
        margin:80px auto;
        padding-bottom: 10px;
        border-radius: 5px;
        border: 3px solid #eee;
        background-color: #fff;

        h3{
            padding-left: 15px;
            height:40px;
            line-height: 40px;
            color:$mainColor;
            font-size: 20px;
            font-weight: bold;
            border-bottom: 1px solid $mainColor;
            .icon-close{
                float:right;
                margin-right: 20px;
                font-size: 20px;
            }
        }
        form{
            padding-left: 15px;
            p{
                margin-top: 10px;
            }
            label{
                display:inline-block;
                width:80px;
                margin-right: 50px;
                text-align: right;
            }
            input{
                width:350px;
                height:40px;
                border: 1px solid #bbb;
                border-radius: 3px;
            }
            button{
                width:80px;
                height:35px;
                margin-top: 10px;
                margin-right: 10px;
                line-height: 35px;
                text-align: center;
                background:  $mainColor;
                color:#fff;
                font-size: 16px;
                font-weight: bold;
                border: none;
                border-radius: 5px;
                &:hover{
                    background: #ee4c33;
                }
            }
        }
    }
</style>
