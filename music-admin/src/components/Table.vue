<template>
	<table class="m-table" border="1">
		<thead>
			<tr>
				<th class="cola"><input type="checkbox" name="" id=""></th>
				<th>id</th>
				<th class="cola">歌名</th>
				<th class="cola">歌手</th>
				<th class="colb">歌曲时长</th>
				<th class="colb">专辑名</th>
				<th class="colb">歌曲封面</th>
				<th class="colb">播放次数</th>
				<th class="colb">操作</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><input type="checkbox" name="" id=""></td>
				<td>58188</td>
				<td>泡沫</td>
				<td>邓紫棋</td>
				<td>10</td>
				<td>泡沫</td>
				<td>www.baidu.com</td>
				<td>2000</td>
				<td>
					<a href="#" class="edit"><i class="iconfont icon-edit"></i></a>
					<a href="#" class="delete"><i class="iconfont icon-delete"></i></a>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
    $evenBgColor:#fafafa;
	$oddBgColor:#fff;
	$hoverColor:#f0f0f0;
	$trHeight:35px;
	.m-table{
		table-layout:fixed;
		width:100%;
		// line-height:1.5;
		text-align:center;
		tr{
			height:$trHeight;
		}
		thead{
			
		}
		tbody{
			tr{
				&:nth-child(even){
					background-color: $evenBgColor;
				}
				&:nth-child(odd){
					background-color: $oddBgColor;
				}
				&:hover{
					background-color: $hoverColor;
				}
			}
		}
	}
</style>
