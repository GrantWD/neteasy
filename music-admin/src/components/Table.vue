<template>
<div class="m-table" v-on:contextmenu.prevent="menu">
	<div class="menus" v-show="flag"><Menu></Menu></div>
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
		<tbody v-on:click='operate'>
			<tr v-for="(item, index) in playlists">
				<td>{{ index }}</td>
				<td class="musicId">{{ item.id }}</td>
				<td class="name">{{ item.creator.nickname }}</td>
				<td class="singer">{{ item.name }}</td>
				<td class="time">{{ new Date(item.createTime).toJSON().substring(0,10) }}</td>
				<td class="album">{{ new Date(item.updateTime).toJSON().substring(0,10)}}</td>
				<td class="alumbArt"><img :src="item.coverImgUrl"/></td>
				<td class="alumbArt">{{ item.playCount }}</td>
				<td class="number">{{ item.subscribedCount }}</td>
				<!-- <td>
					<a href="javascript:void(0)"  class="edit"><i  class="iconfont icon-edit"></i></a>
					<a href="javascript:void(0)"  class="delete"><i class="iconfont icon-delete"></i></a>
				</td> -->
			</tr>
		</tbody>
	</table>
</div>
</template>

<script>
import Menu from './Menu'
export default {
	name: 'HelloWorld',
	data () {
		return {
			flag:false
		}
	},
	props: {
		playlists:Array
	},
	methods: {
		// 点击编辑首先获得当前条目的信息，将信息传递到父组件中，显示到编辑的组件中
		// 采用的是给父组件添加点击事件，采用代理模式，根据类名来判断点击执行不同的事件
		operate(event){
			var  e = e || window.event,
					tar = e.target || e.srcElement,
					par = tar.parentNode.parentNode.parentNode,
					obj = {
						id : par.getElementsByClassName('musicId')[0].innerText,
						name : par.getElementsByClassName('name')[0].innerText,
						singer : par.getElementsByClassName('singer')[0].innerText,
						time : par.getElementsByClassName('time')[0].innerText,
						album : par.getElementsByClassName('album')[0].innerText,
						alumbArt : par.getElementsByClassName('alumbArt')[0].innerText,
						number : par.getElementsByClassName('number')[0].innerText,
					}
					// console.log(par)
					// console.log(tar.classList)
					// console.log(tar.className)
					// console.log(tar.classList.contains('icon-delete'))
					// del = tar.getElementsByClassName('icon-del')[0],
					// edit = tar.getElementsByClassName('icon-edit')[0];
				if(tar.classList.contains('icon-delete')){
					// 如果点击确认就移除，点击取消什么都不做,从子组件传递一个值过来，当点击取消isDelete为false,
					// 当点击确认时返回true，删除节点，发送ajax请求
					// isDelete
					if(true){
						par.remove();
					}
				}
				if(tar.classList.contains('icon-edit')){
					// 获得当前所在行的所有的信息返回一个对象，
					// 点击编辑时候怎样在父组件中弹出来子组件
					// 当点击一个编辑时，让页面显示，将一个布尔值传递绑定到组件上传递过去
					this.flag = true;
					console.log('编辑')
					console.log(obj)
					return obj
				}
					
		},
		edit (event) {
			let eve = event || window.event;
			let tar = eve.target || eve.Element;
			console.log(tar)
		},
		del (){

		},
		// 菜单部分显示的地方跟随鼠标的位置
		menu(){
			console.log("阻止");
			this.flag=true;
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
		Menu
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
						width:60px;
						height: 60px;
					}
				}
			}
		}
	}
</style>
