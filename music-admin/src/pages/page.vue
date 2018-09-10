<template>
    <div class="page">
        <Header ></Header>
       <div class="main">
           <div class="side">
               <Side></Side> 
           </div>
           <div class="bd-r">
                <Search v-on:searchName='search'></Search>
                <Operate></Operate>
                <Table :playlists = 'playlists' :num = 'num'></Table>
                <PageTurner :len = 'len' v-on:transfern-num='getNum'></PageTurner>
				<!-- <Menu></Menu> -->

           </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
import Operate from '../components/Operate'
import Table from '../components/Table'
import Side from '../components/Side'
import Search from '../components/Search'
import PageTurner from '../components/PageTurner'
import PromptMessage from '../components/PromptMessage'
import Edit from '../components/Edit'
import Menu from '../components/Menu'
export default {
  name: 'page',
  data () {
    return {
		flag:true,
		playlists:[],
        info:[
			{
				id:588558,
				name:'海阔天空',
				singer:'Beyound',
				time:'100',
				album:'海阔天空',
				alubmArt:'wwww',
				number:'52'
			},
			{
				id:588558,
				name:'海阔天空',
				singer:'Beyound',
				time:'100',
				album:'海阔天空',
				alubmArt:'wwww',
				number:'52'
			},
			{
				id:569875,
				name:'海阔天空',
				singer:'Beyound',
				time:'100',
				album:'海阔天空',
				alubmArt:'wwww',
				number:'52'
			},
			{
				id:969639,
				name:'海阔天空',
				singer:'Beyound',
				time:'100',
				album:'海阔天空',
				alubmArt:'wwww',
				number:'52'
			},
			{
				id:885966,
				name:'海阔天空',
				singer:'Beyound',
				time:'100',
				album:'海阔天空',
				alubmArt:'wwww',
				number:'52'
			},
			{
				id:788979,
				name:'海阔天空',
				singer:'Beyound',
				time:'100',
				album:'海阔天空',
				alubmArt:'wwww',
				number:'52'
			},
			{
				id:588558,
				name:'海阔天空',
				singer:'Beyound',
				time:'100',
				album:'海阔天空',
				alubmArt:'wwww',
				number:'52'
			},
			{
				id:588558,
				name:'海阔天空',
				singer:'Beyound',
				time:'100',
				album:'海阔天空',
				alubmArt:'wwww',
				number:'52'
			},
			{
				id:588558,
				name:'海阔天空',
				singer:'Beyound',
				time:'100',
				album:'海阔天空',
				alubmArt:'wwww',
				number:'52'
			},
			{
				id:588558,
				name:'海阔天空',
				singer:'Beyound',
				time:'100',
				album:'海阔天空',
				alubmArt:'wwww',
				number:'52'
			},
		],
		len:0,
		num:1
    }
  },
  components: {
      Header,
      Table,
      Side,
      Operate,
      Search,
      PageTurner,
      PromptMessage,
	  Edit,
	  Menu,
  },
  methods: {
	  getNum (num) {
		  this.num=Number(num);
		 fetch(`http://localhost:3000/page?num=${num}`)
			.then((res)=>{
				return res.json()
			})
			.then((res)=>{
				console.log(res)
				this.playlists = res.arr;
			})
	  },
	  search(name){
		  console.log(name);
		  fetch(`http://localhost:3000/search?search=${name}`)
			.then((res)=>{
				return res.json()
			})
			.then((res)=>{
				console.log(res)
				this.playlists = res.arr;
				// 获得当前过滤的len
				this.len = res.filterLen;
				console.log(this.len)
			})
		  
	  }
  },
  created () {
	  fetch('http://localhost:3000/page?num=1')
	  	.then((res)=>{
			  return res.json()
		  })
		.then((res)=>{
			console.log(res)
			this.playlists = res.arr;
			this.len = res.len;
			console.log(this.len)
		})
  }
}
</script>

<style lang='scss' scoped>
    .page{
        height:100%;
        .main{
            margin-top: 60px;
            position: absolute;
            left:0;
            top:0;
            bottom:0;
            right: 0;
            overflow:hidden;
            .side{
                float:left; 
                height:100%;
                margin-right: -200px;
            }
            .bd-r{
                float: rigth;
                margin-left: 210px;
                margin-top: 30px;
                text-align: left;
            }
        }
    }
</style>
