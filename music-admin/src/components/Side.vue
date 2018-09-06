<template>
	<div class='aside'>
		<li v-for='(list,index) in sideList' class='tabList' v-on:click='show'>
        	<i :class='list.className'></i><span>{{ list.name }}</span>
			<ul class="subItem">
				<li v-for='subList in list.listItem'><a href="#">{{subList}}</a></li>
			</ul>
    	</li>
	</div>
</template>

<script>

export default {
  name: 'aside',
  data () {
    return {
		sideList:[
			{
				name:'用户管理',
				className:'iconfont icon-add-account',
				listItem:['歌曲列表','用户管理','歌手分类']
			},
			{
				name:'数据管理',
				className:'iconfont icon-calendar',
				listItem:['歌曲列表','用户管理','我是格式']

			},
			
			{
				name:'角色管理',
				className:'iconfont icon-calendar',
				listItem:['歌曲列表','用户管理','歌手分类']

			},
			{
				name:'网站信息管理',
				className:'iconfont icon-electronics',
			

			}
		],
		
	}
  },
  methods: {
	  show (event) {
		  // 问题:是点击到里面嵌套的元素时户，tar会改变，那么通过
		  // 当前元素可以获取不到ul
		  // 问题2:开关变量并不是每个li的私有属性而是共有的，因此必须因此当前，才能显示后来的
		  // 否则就需要点击两次
		  let showFlag = false;
		  let eve = event || window.event;
		  let tar = eve.target || eve.srcElement;
		  let ul = tar.getElementsByClassName('subItem')[0];
		  if(this.showFlag){
			  ul.style.display='none';
			  this.showFlag = !(this.showFlag);
		  }else{
			  ul.style.display='block';
			  this.showFlag = !(this.showFlag);
		  }
	  }
  },
  mounted () {
	  
  },
  components:{
  }
}
</script>

<style lang='scss' scoped>
	$backgroundUrl:'../../static/images/';
	$mainColor:#ea2000;
	.aside{
		height:100%;
        width:200px;
		background-color: #393d49;
	}	
    .tabList{
		position: relative;
        // height:40px;
        color:#fff;
        font-size: 16px;
		border-bottom:1px solid #ccc;
        cursor: pointer;
        i{
			vertical-align: middle;
			 padding-left: 20px;
        }
        span{
            display:inline-block;
            line-height: 40px;
            margin-left: 10px;
        }
        &:hover{
            background:#31333d;
            // color:$mainColor;
		}
		.subItem{
			display: none;
			width:100%;
			background-color: #4a4c58;
			overflow: hidden;
			
			li{
				border-top: 1px solid #ccc;
				background: #494c59;
				a{
					display:block;
					margin-left: 60px;
					height:40px;
					line-height: 40px;
					color:#fff;
				}
				&:hover{
				background: #4f5269;
				color:$mainColor;
		}
			}
		}
    }
</style>
