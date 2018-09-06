<template>
    <div class="prompt">
        <div class="m-layer">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <article class="lywrap">
	                            <header class="lytt"><h2 class="u-tt">提示信息</h2><span class="lyclose"><i v-on:click="close"   class="iconfont icon-close"></i></span></header>
                                    <section class="lyct">
                                        <p>确定删除此项吗?</p>
                                    </section>
                                    <footer class="lybt">
                                        <div class="lyother">
                                            <!-- <p>其他信息，比如提示</p> -->
                                        </div>
                                        <div class="lybtns">
                                            <button type="button" class="u-btn" v-on:click="close">确定</button>
                                            <button type="button" class="u-btn u-btn-c4" v-on:click="close">取消</button>
                                        </div>
                                    </footer>
                             </article>
                        </td>
                    </tr>
                </tbody>
            </table>   
        </div>
    </div>
</template>
<script>
export default {
  name: 'prompt',
  props: {
      flag:Boolean
  },
  data () {
    return {
    }
  },
  methods: {
      close () {
          this.flag = false;
      }
  }
}
</script>
<style lang='scss' scoped>
    $mainColor:#ea2000;
    $bgColor:rgba(255,255,255,0);
    $borderSize:5px;
// 外层背景
    .m-layer{
        position:fixed;
        top:0;
        left:0;
        bottom: 0;
        right: 0;
        background-color: $bgColor;
        table{
            margin: auto;
            margin-top: 100px;
        }
        .lywrap{
            position:relative;
            width:400px;
            margin: 100px auto;
            border:5px solid rgba(0,0,0,.3);
            border-radius:$borderSize;
            // 标题部分
            .lytt{
                position:relative;
                padding:10px;
                margin:0 0 -1px;
                height:20px;
                line-height: 20px;
                border-bottom:1px solid #ddd;
                border-radius:$borderSize $borderSize 0 0;
                background-color:#fafafa;
                overflow:hidden;
                .u-tt{
                    float:left;
                    font-size: 16px;
                }
                .lyclose{
                    width:25px;
                    height:25px;
                    float:right;
                    cursor:pointer;
                    &:hover{
                        color:red;
                    }
                }
            }
            // 内容部分
            .lyct{
                padding:20px;
                background-color: #fff;
            }
            // 底部
            .lybt{
                overflow:hidden;
                background-color: #f0f0f0;
                border-radius:0 0 $borderSize $borderSize;

                .lyother{
                    float:left;
                }
                .lybtns{
                    float:right;
                    padding:10px;
                    .u-btn{
                        width:50px;
                        height:30px;
                        border:none;
                        border-radius:3px;
                        background:$mainColor;
                        color:#fff;
                        cursor:pointer;
                        outline:none;
                        &:hover{
                            background:#f3462b; 
                        }
                    }
                }
            }
        }
    }
    .z-show{
        display:block;
    }
</style>
