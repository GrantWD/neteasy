<template>
	<div class="header">
		<div class="logo">
		</div>
		<div class="title">网易云音乐后台管理</div>
		<div class="user">
			<div class="userInfo">
				<img src="" alt="">
				<a class="username" href="#">用户名称<i class="iconfont icon-moreunfold"></i></a>
				<a href="#">首页</a>
			</div>
		</div>
 	</div>
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
 	$backgroundUrl:'../../static/images/';
	$mainColor:#ea2000;
	
	.header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		height:60px;
		background-color: $mainColor;
		color: #fff;
		font-size: 16px;
		.logo{
			height:60px;
			width:60px;
			margin-left: 15px;
			background-image: url(#{$backgroundUrl}wyylogo.png);
			background-size: contain;
			background-repeat: no-repeat;
		}
		.title{
			font-size: 24px;
			font-weight: bold;
		}
		.user{
			margin-right: 15px;
			.userInfo{
				.username{
					margin-right: 10px;
				}
				a{color:#fff;}
			}
		}
	}

</style>
