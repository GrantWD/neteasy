import Vue from 'vue'
import Router from 'vue-router'
import StyleRecommend from '../page/StyleRecommend'
import HostStation from '../page/HostStation'
import DailySpecial from '../page/DailySpecial'
import MyMusic from '../page/MyMusic'


Vue.use(Router)

export default new Router({
  routes: [{
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
      path: '/MyMusic',
      name: 'MyMusic',
      component: MyMusic
    },
    {
      path: '/DailySpecial',
      name: 'DailySpecial',
      component: DailySpecial
    },
  ]
})