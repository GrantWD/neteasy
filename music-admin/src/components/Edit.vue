<template>
    <div class="edit">
        <div class="inner">
            <h3>编辑<i v-on:click="close" class="iconfont icon-close"></i></h3>
            <form action="">
                <p><label for="musicId">歌单ID</label><input v-model="songInfo.id" type="text" id="musicId" disabled></p>
                <p><label for="musicName">创建者</label><input v-model="songInfo.nickname" type="text" id="musicName"><i class="iconfont icon-close"></i></p>
                <p><label for="singer">歌单名称</label><input v-model="songInfo.name" type="text" id="singer"><i class="iconfont icon-close"></i></p>
                <p><label for="album">创建时间</label><input v-model="songInfo.createTime" type="text" id="album"><i class="iconfont icon-close"></i></p>
                <p><label for="albumArt">更新时间</label><input v-model="songInfo.updateTime" type="text" id="albumArt"><i class="iconfont icon-close"></i></p>
                <p><label for="playNum">播放次数</label><input v-model="songInfo.playCount" type="text" id="playNum"><i class="iconfont icon-close"></i></p>
                <p><label for="playNum">订阅次数</label><input v-model="songInfo.subscribedCount" type="text" id="playNum"><i class="iconfont icon-close"></i></p>
                <button v-on:click="update">确认</button><button v-on:click="close">取消</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'edit',
  props: {
      flag:Boolean,
      songInfo:{}
  },
  data () {
    return {
    
    }
  },
  methods: {
      close () {
          console.log(this.songInfo);
           this.$emit('closedit',false);
      },
      update () {
          console.log('提交编辑更新页面');
           this.$emit('closedit',false);

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
                position: relative;
                .iconfont{
                    position:absolute;
                    top:10px;
                    right: 162px;
                    cursor: pointer;
                }
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
