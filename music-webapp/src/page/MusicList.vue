<template>
    <div class="playList">
        <PlayListHeader></PlayListHeader>
		<div class="main">
			<div class="listBanner">
				<div class="img">
					<!-- 将图片和标题都嵌套在a标签中点击链接到同一个链接的 -->
					<a class="lk" href="javascript:void(0)">
						<div class="lazyimg">
							<img class="lazyimg-img" :src='musicListInfo.listImgUrl' alt="这是一张图片">
						</div>
						<div class="info">
							<div class="info-l">
								<p class="listName"><span class="icon queen"></span>{{ musicListInfo.listName }}<span class="icon next"></span></p>
								<p class="info-tit">{{musicListInfo.listTit}}</p>
								<p class="info-subtit">{{musicListInfo.listSubTit}}</p>
							</div>
						</div>
					</a>
				</div>
				
			</div>
			<div class="listType">
				<div class="type"><span class="text">{{ musicListInfo.listType.type }}</span><span class="icon"></span></div>
				<div class="typeItem">
					<a  v-for="(item, index) in musicListInfo.listType.typeArray">{{ item }}</a>
				</div>
			</div>
			 <ul class="musicList">
				<div class="inner">
					<li v-for="(list,index) in musicListInfo.musicMsgArray">
						<div class="musicPic">
							<img :src='list.musicPicUrl' alt="">
							<div class="listenNum"><span class="icon"></span><span class="num">{{ list.listenNum }}</span></div>
							<div class="musicType"><span class="icon"></span><span class="type">{{ list.musicType }}</span></div>
						</div>
						<p class="musicDesc">{{ list.musicDesc }}</p>
					</li>
				</div>
        	</ul> 
		</div>
		<div class="listTypeName"></div>
		<Footer></Footer>  
    </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import PlayListHeader from '../components/PlayListHeader.vue';
export default {
  name: 'playList',
  data () {
    return {
		musicListInfo:{
			listName:'精品歌单',
			listTit:'失落少年孤独心俱乐部',
			listSubTit:'欢迎加入失落少年孤独心俱乐部',
			listImgUrl:'http://img11.360buyimg.com/jdcms/s170x170_jfs/t16006/110/995107245/352305/c07386d3/5a460b35N7d0aa2bf.jpg!q90!cc_170x170.webp',
			listType:{
				type:'轻音乐',
				typeArray:['华语','影视原声','民谣']
			},
			musicMsgArray:[
			{	
				musicId:201809001,
				musicPicUrl:'http://p1.music.126.net/CvQvHLu8ni8J1e_ytMhLPQ==/109951163532159779.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
				listenNum:'15万',
				musicType:'萝莉音',
				musicDesc:"橙光游戏《君心我心》日常更新BGM"
			},
			{
				musicId:201809002,
				musicPicUrl:'http://p1.music.126.net/4HTyupyD-UOMJQICmscT8w==/109951163020513888.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
				listenNum:'20万',
				musicType:'轻音乐',
				musicDesc:"橙光游戏《君心我心》日常更新BGM"
			},
			{
				musicId:201809003,
				musicPicUrl:'http://p1.music.126.net/2fypBTo8GNQ7QiEs41INDw==/19182079858548695.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
				listenNum:'20万',
				musicType:'轻音乐',
				musicDesc:"橙光游戏《君心我心》日常更新BGM"
			},
			{
				musicId:201809003,
				musicPicUrl:'http://p1.music.126.net/2fypBTo8GNQ7QiEs41INDw==/19182079858548695.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
				listenNum:'20万',
				musicType:'轻音乐',
				musicDesc:"橙光游戏《君心我心》日常更新BGM"
			},
			{
				musicId:201809003,
				musicPicUrl:'http://p1.music.126.net/2fypBTo8GNQ7QiEs41INDw==/19182079858548695.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
				listenNum:'20万',
				musicType:'轻音乐',
				musicDesc:"橙光游戏《君心我心》日常更新BGM"
			},
			{
				musicId:201809003,
				musicPicUrl:'http://p1.music.126.net/2fypBTo8GNQ7QiEs41INDw==/19182079858548695.webp?imageView&thumbnail=369x0&quality=75&tostatic=0&type=webp',
				listenNum:'20万',
				musicType:'轻音乐',
				musicDesc:"橙光游戏《君心我心》日常更新BGM"
			},
		]
		
		}
		
    }
  },
  components: {
    Footer,
    PlayListHeader
  }
}
</script>

 
<style lang='scss' scoped>
		$backgroundUrl:'../../static/images/';
	.playList{
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		height: 100%;
	}
	.main{
		flex: 1;
		overflow-y:auto ;
		overflow-x: hidden;
		.listBanner{
			$imgW:1.02rem;
			$imgH:1.02rem;
			$space:10px;
			$iconSize:20px;
			height: 1.45rem;
			width:100%;
			background-color: #5b5b5b;
			
			.img{
				padding-top: .3rem;
				margin-left: .2rem;
				.lk{
					display:flex;
					color:#fff;	
					.lazyimg{
						// 设置图片区域的大小
						margin-right:$space;
						width: $imgW;
						height: $imgH;
						.lazyimg-img{
							width:100%;
							height:100%;
						}
					}
					.info{
						flex:1;
						.listName{
							padding-top:.1rem;
							font-size: .17rem;
							color:#fff;
						
							display: flex;
							align-items: center;
							// font-weight: bold;
							.icon.queen{
								width: .24rem;
								height: .24rem;
								margin-right: .1rem;
								background-image: url(#{$backgroundUrl}huangguan48×48.png);
								background-size: 100%;
							}
							.icon.next{
								width:.14rem;
								height: .17rem;
								margin-right: .1rem;
								background-image: url(#{$backgroundUrl}next28×34.png);
								background-size: 100%;
							}
						}
						.info-l{
							.info-tit{
								padding-top:.17rem;
								font-size: .14rem;
							}
							.info-subtit{
								padding-top:.12rem;
								font-size: .12rem;
								color:#ababab;
							}
						}
					}
				}
			}
			

		}
		.listType{
			display:flex;
			justify-content: space-between;
			align-items: center;
			padding-left: .1rem;
			margin-top: .19rem;
			font-size: .14rem;
			color:#323233;
				.type{
					padding: 0 .15rem;
					border:1px solid #cdcece;
					border-radius: 15px;
					.text{
						vertical-align: middle;
					}
					.icon{
						display: inline-block;
						margin-left: .1rem;
						width:.1rem;
						height: .15rem;
						vertical-align: middle;
						background-image: url(#{$backgroundUrl}next20×30.png);
						background-size: 100%;
					}
				}
				.typeItem{
					a{
						padding:0 .1rem;
					}
					a+a{
						border-left: 1px solid #e2e3e4;
					}
				}
			}
	}
	.musicList{
		$imgSize:1.8rem;
		$iconSize:.15rem;
	
		
		padding: 0 .06rem;
		.inner{
			margin-right: -(.04rem);
			overflow: hidden;
		}
		li{
			float:left;
			width:$imgSize;
			margin-top: .12rem;
			margin-right: .03rem;
			.musicPic{
				position: relative;
				height: $imgSize;
				border-radius: 5px;
				img{
					width: 100%;
					height:100%;
					border-radius: 5px;
				}
				.listenNum,.musicType{
					position: absolute;
					font-size: .05rem;
					color:#fff;
					.type,.num{
						vertical-align: middle;
					}

					.icon{
						display:inline-block;
						height: $iconSize;
						width: $iconSize;
						background-size: 100%;
						vertical-align: middle
					}
				}
				.listenNum{
					right:.1rem;
					top:0;
					.icon{
						background-image: url(#{$backgroundUrl}erji30×30.png)
					}
				}
				.musicType{
					left:.1rem;
					bottom:.05rem;
					.icon{
						background-image: url(#{$backgroundUrl}persmall30×30.png)

					}
				}
			}
			.musicDesc{
				padding: 0 .05rem;
				font-size: .06rem;
				line-height:1.5;
			}
		}
	}
</style>
