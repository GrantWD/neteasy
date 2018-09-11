<template>
<div class="m-table" v-on:contextmenu.prevent="menu" v-on:click="hideMenu">
	<div class="menus" v-show="flag"><Menu v-on:show="isShow" v-on:delInfo="del" v-on:detail="detailInfo" v-on:move="moveFiie"></Menu></div>
	<table border="1">
		<thead>
			<tr>
				<th class="cola">序号</th>
				<th>id</th>
				<th class="cola">创建者</th>
				<th class="cola">歌单名称</th>
				<th class="colb">创建时间</th>
				<th class="colb">更新时间</th>
				<th class="colb">歌曲封面</th>
				<th class="colb">播放次数</th>
				<th class="colb">订阅</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item, index) in playlists">
				<td>{{ ( (num-1) *10) + index +1 }}</td>
				<td class="id">{{ item.id }}</td>
				<td class="nickname">{{ item.creator.nickname }}</td>
				<td class="name">{{ item.name }}</td>
				<td class="createTime">{{ new Date(item.createTime).toJSON().substring(0,10) }}</td>
				<td class="updateTime">{{ new Date(item.updateTime).toJSON().substring(0,10)}}</td>
				<td class="coverImgUrl"><img :src="item.coverImgUrl"/></td>
				<td class="playCount">{{ item.playCount }}</td>
				<td class="subscribedCount">{{ item.subscribedCount }}</td>
				<!-- <td>
					<a href="javascript:void(0)"  class="edit"><i  class="iconfont icon-edit"></i></a>
					<a href="javascript:void(0)"  class="delete"><i class="iconfont icon-delete"></i></a>
				</td> -->
			</tr>
		</tbody>
	</table>
	<div class="edit" v-show="editFlag">
		<Edit v-on:closedit="close" :songInfo="obj"></Edit>
	</div>
	<!-- <div class="tipMesage" v-show='confirmTip'>
		<PromptMessage></PromptMessage>
	</div> -->
</div>
</template>

<script>
import Menu from './Menu'
import Edit from './Edit'
import PromptMessage from './PromptMessage'
export default {
	name: 'HelloWorld',
	data () {
		return {
			flag:false,
			editFlag:false,
			confirmTip:true,
			obj:{},
			id:''
		}
	},
	props: {
		playlists:Array,
		num:Number
	},
	methods: {
		// 点击编辑首先获得当前条目的信息，将信息传递到父组件中，显示到编辑的组件中
		// 采用的是给父组件添加点击事件，采用代理模式，根据类名来判断点击执行不同的事件
		edit (event) {
			let eve = event || window.event;
			let tar = eve.target || eve.srcElement;
			console.log(tar)
		},
		del (delFlag){
			console.log(delFlag);
			console.log('删除事件');
			console.log(this.id);
			// 根据id发送请求来删除
			fetch(`http://localhost:3000/delete?id=${this.id}`)
			.then((res)=>{
				return res.json()
			})
			.then((res)=>{
				console.log(res)
				if(res.status == 200){
					// 删除成功需要重新刷新页面，再次的刷新数据,
					fetch('http://localhost:3000/page?num=1')
						.then((res)=>{
							return res.json()
						})
						.then((res)=>{
							console.log(res)
							this.playlists = res.arr;

							
						})
				}
			})
		},
		// 菜单部分显示的地方跟随鼠标的位置
		menu(event){
			console.log("阻止");
			// 显示菜单并且显示的位置是鼠标的位置
			this.flag=true;
			// 获得鼠标的位置
			var eve = event || window.event;
			var tar = eve.target || eve.srcElement;
			// 保存当前元的id
			this.id = tar.parentNode.getElementsByClassName('id')[0].innerText;
			var menus = document.getElementsByClassName('menus')[0];
			var table = document.getElementsByClassName('m-table')[0];
			var parentLeft = table.offsetLeft;
			var parentTop = table.offsetTop;
			var left = eve.clientX-parentLeft;
			var top = eve.clientY-parentTop-60;
			var parentWidth = parseFloat(document.defaultView.getComputedStyle(table,null).width);
			var parentHeight= parseFloat(document.defaultView.getComputedStyle(table,null).height);
			if(left < 0){
				left = 0;
			}
			if(left > (parentWidth-122)){
				left = parentWidth-122;
			}
			if(top < 0){
				top = 0;
			}
			if(top > (parentHeight-145)){
				top = parentHeight-145;
			}
			menus.style.left=left+'px';
			menus.style.top=top +'px';
			// left值和top的值必须在父元素的范围内
			// 获得当前元素对应的tr,获得文本值
			function getValue(className){
				return 	tar.parentNode.getElementsByClassName(className)[0].innerText;
			}
			this.obj.id=getValue('id');
			this.obj.name=getValue('name');
			this.obj.nickname=getValue('nickname');
			this.obj.playCount=getValue('playCount');
			this.obj.subscribedCount=getValue('subscribedCount');
			this.obj.updateTime=getValue('updateTime');
			this.obj.createTime=getValue('createTime');
		},
		// 单击隐藏菜单并且选中了当前的项目
		hideMenu () {
			this.flag = false;
		},
		isShow (a) {
			this.editFlag = a;
		},
		close(b){
			this.editFlag = b;
		},
		detailInfo(delTag){
	
		},
		moveFiie(){
			
		}

		
	},
	computed: {
		createdDate:function(){
			let len = playlists.length;
			for(let i = 0; i < len; i++ ){
				playlists[i].createTime
			}
			// return this.playlists[0].createTime
		}
	},
	components: {
		Menu,
		Edit,
		PromptMessage
	}  


}
</script>

<style lang='scss' scoped>
    $evenBgColor:#fafafa;
	$oddBgColor:#fff;
	$hoverColor:#f0f0f0;
	$trHeight:35px;
	$min-height:400px;
	.menus{
		position:absolute;
		left: 0;
		top:0;
	}
	.m-table{
		position: relative;
		// table-layout:fixed;
		
		margin-bottom:10px ;
		min-height: 400px;
		// line-height:1.5;
		table{
			width:100%;
			text-align:center;
		}
		tr{
			height:$trHeight;
		}
		thead{
			
		}
		tbody{
			tr{
				max-height:$trHeight;

				&:nth-child(even){
					background-color: $evenBgColor;
				}
				&:nth-child(odd){
					background-color: $oddBgColor;
				}
				&:hover{
					background-color: $hoverColor;
					cursor: pointer;
				}
				td{
					img{
						display: inline-block;
						width:30px;
						height: 30px;
					}
				}
			}
		}
	}
</style>
