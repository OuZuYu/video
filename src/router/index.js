import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/home'
import Video from '@/components/video/video'
import Image from '@/components/images/images'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/videos'
    },
    {
    	path: '/home',
    	component: Home,
    	children: [
    		{
    			path: '/videos',
    			component: Video
    		},
    		{
    			path: '/images',
    			component: Image
    		}
    	]
    }
  ]
})
