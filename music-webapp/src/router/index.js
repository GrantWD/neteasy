import Vue from 'vue'
import Router from 'vue-router'
import PlayerMusic from '../page/PlayerMusic.vue'
import MusicList from "../page/MusicList.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MusicList',
      component: MusicList
    }
  ]
})
