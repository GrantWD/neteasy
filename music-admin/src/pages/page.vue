<template>
    <div class="page">
        <Header ></Header>
       <div class="main">
           <div class="side">
               <Side></Side> 
           </div>
           <div class="bd-r">
                <Search></Search>
                <Operate></Operate>
                <Table :info = 'info'></Table>
                <PageTurner></PageTurner>
           </div>
	    <Edit v-show='flag'></Edit>
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
export default {
  name: 'page',
  data () {
    return {
        flag:true,
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
		]
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
      Edit
  },
  methods: {
      add () {
          flag:true
      }
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
