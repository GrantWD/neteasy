<template>
    <nav class="m-page" v-on:click="selectPage">
        <a href="#" class="pageprv z-dis">上一页</a>
        <a href="#" v-for="(item, index) in (Math.ceil(len/10))" v-bind:class="[(page == (index+1)) ? active : '']">{{ index+1 }}</a>
	    
	    <!-- <a href="#" class="z-crt">2</a>
	    <a href="#">3</a>
	    <a href="#">4</a>-->
        <!-- <a href="#">{{parseInt(len/10)}}</a> -->
	    <a href="#" class="pagenxt">下一页</a>
    </nav>
</template>
<script>
export default {
  name: 'search',
  props: {
      len : Number
  },
  data () {
    return {
        page:1,
        active:'active'
    }
  },
  methods: {
      // 当选择了当前按钮时候，当前的按钮就向前移动一位，并且按钮的个数不变
      selectPage (event){

        var e = event || window.event;
        var tar = e.target || e.srcElement;
        // 获得当前点击的值,根据获得值得类型，如果上一页是page--，最小为1，如果page最大是len/10向上取整
        var page = this.page;
        var value = tar.innerText;
        if(value == '上一页'){
            page--;
            if(page < 1){
                page = 1;
            }
           
        }else if(value == '下一页'){
            page++;
            if(page > Math.ceil(this.len/10) ){
                page = Math.ceil(this.len/10);
            }
        }else {
            page = parseInt(tar.innerText);
        }
        this.page = page;
        // 当前page对应的选项添加
        this.$emit('transfern-num',page)
        
      }
  },
  computed: {
      
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
        .active{
            background: $mainColor;
            color: #fff;
        }
    }

</style>
