
<template>
    <div class="playList">
		<PlayListHeader></PlayListHeader>
		<div class="main">
			<div class="listBanner">
				<div class="img">
					<!-- 将图片和标题都嵌套在a标签中点击链接到同一个链接的 -->
					<a class="lk" href="javascript:void(0)">
						<div class="lazyimg">
							<img class="lazyimg-img" :src='playlist.coverImgUrl' alt="这是一张图片">
						</div>
						<div class="info">
							<div class="info-l">
								<p class="listName"><span class="icon queen"></span>{{ playlist.listTitle }}<span class="icon next"></span></p>
								<p class="info-tit">{{playlist.name}}</p>
								<p class="info-subtit">{{playlist.subDesc}}</p>
							</div>
						</div>
					</a>
				</div>
				
			</div>
			<div class="listType">
				<div class="type"><span class="text">{{ playlist.listName }}</span><span class="icon"></span></div>
				<div class="typeItem">
					<a  v-for="(item, index) in playlist.tags">{{ item }}</a>
				</div>
			</div>
			 <ul class="musicList">
				<div class="inner">
					<li v-for="(list,index) in catlist">
						<div class="musicPic">
							<img :src='list.coverImgUrl' alt="">
							<div class="listenNum"><span class="icon"></span><span class="num">{{ list.playCount }}</span></div>
							<div class="musicType"><span class="icon"></span><span class="type">{{ list.creator.nickname }}</span></div>
						</div>
						<p class="musicDesc">{{ list.name }}</p>
					</li>
				</div>
        	</ul> 
		</div>
		<Footer></Footer>  
    </div>
</template>
<script>
import Footer from '../components/Footer';
import PlayListHeader from '../components/PlayListHeader';
export default {
  name: 'HelloWorld',
  data () {
    return {
		playlist:{},
		catlist:[],
		StyleRecommendDay:[]
		
    }
  },
  components: {
	  Footer,
	  PlayListHeader
  },
  created () {
	//   fetch("http://localhost:3000/musiclist").then((res)=>{
	// 	  console.log(res.json())
	// 	//   return res.json()
	// 	  console.log(res.data)
	//   }).then((res)=>{
	// 	  console.log
	//   });
		$.get('http://localhost:3000/heightquality', (data)=> {
				// console.log(data);
				// console.log(data.status)
				this.playlist=data.obj.playlist
				// console.log(this.playlist);
		});

		// 所有歌单数据
		$.get('http://localhost:3000/catlist', (data)=> {
				// console.log(data);
				this.catlist=data.obj.playlists
				// console.log(this.catlist);
				
		});
		$.get('http://localhost:3000/zfy',(data)=>{
			console.log(data);
			this.StyleRecommendDay=data.obj.StyleRecommendDay;
			console.log(this.StyleRecommendDay)
		});
		
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
					}
					.icon{
						display:inline-block;
						width:$iconSize;
						height:$iconSize;
						background-size: contain;
						vertical-align: middle;
					}
    			}
				.listenNum{
					top:.05rem;
					right: .05rem;
					.icon{
						background-image: url(#{$backgroundUrl}erji30×30.png)
					}
				}
				.musicType{
					left:.05rem;
					bottom:.05rem;
					.icon{
						background-image: url(#{$backgroundUrl}persmall30×30.png)
					}
				}
				
       		}
			.musicDesc{
				margin-top: .05rem;
				padding: 0 .05rem;
				height:.2rem;
			}
      	}
    }


</style>
