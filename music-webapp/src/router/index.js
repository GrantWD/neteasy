import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
// import StyleRecommend from '../page/StyleRecommend'
// import HostStation from '../page/HostStation'
// import MyMusic from '../page/MyMusic'
// import DailySpecial from '../page/DailySpecial'
=======
<<<<<<< HEAD
import PlayerMusic from '../page/PlayerMusic.vue'
import MusicList from "../page/MusicList.vue"
=======
import StyleRecommend from '../page/StyleRecommend'
import HostStation from '../page/HostStation'
import MyMusic from '../page/MyMusic'
import DailySpecial from '../page/DailySpecial'
>>>>>>> db2cb30d21b4b404c1a398df33d333f372df9191

>>>>>>> b58a65d117bb9290963432caee50746f4eb23f84

Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
    // {
    //   path: '/',
    //   name: 'StyleRecommend',
    //   component: StyleRecommend
    // },
    // {
    //   path: '/HostStation',
    //   name: 'HostStation',
    //   component: HostStation
    // },
    // {
    //   path: '/MyMusic',
    //   name: 'MyMusic',
    //   component: MyMusic
    // },
    // {
    //   path: '/DailySpecial',
    //   name: 'DailySpecial',
    //   component: DailySpecial
    // },
=======
    {
      path: '/',
<<<<<<< HEAD
      name: 'MusicList',
      component: MusicList
    }
=======
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
>>>>>>> b58a65d117bb9290963432caee50746f4eb23f84
>>>>>>> db2cb30d21b4b404c1a398df33d333f372df9191
  ]
})
