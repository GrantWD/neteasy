import Vue from 'vue'
import Router from 'vue-router'
import StyleRecommend from '../page/StyleRecommend'
import HostStation from '../page/HostStation'
import DailySpecial from '../page/DailySpecial'
import MyMusic from '../page/MyMusic'
import PlayerMusic from '../page/PlayerMusic'
import VideoRecommend from '../page/VideoRecommend'
import Friend from '../page/Friend'
import Account from '../page/Account'
import RdioClass from '../page/RdioClass'
import RadioDetail from '../page/RadioDetail'
import MusicList from '../page/MusicList'
import Ranking from '../page/Ranking'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StyleRecommend',
      component: StyleRecommend
    },
    {
      path: '/HostStation',
      name: 'HostStation',
      component: HostStation
    },
    {
      path:'/MyMusic',
      name:'MyMusic',
      component: MyMusic
    },
    {
      path: '/DailySpecial',
      name: 'DailySpecial',
      component: DailySpecial
    },
    {
      path: '/PlayerMusic',
      name: 'PlayerMusic',
      component: PlayerMusic
    },
    {
      path: '/VideoRecommend',
      name: 'VideoRecommend',
      component: VideoRecommend
    },
    {
      path: '/Friend',
      name: 'Friend',
      component: Friend
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account
    },
    {
      path:'/RdioClass',
      name:'RdioClass',
      component:RdioClass
    },
    {
      path:'/RadioDetail',
      name:'RadioDetail',
      component:RadioDetail
    },
    {
      path:'/MusicList',
      name:'MusicList',
      component:MusicList
    },
    {
      path:'/Ranking',
      name:'Ranking',
      component:Ranking
    }
  ]
})
