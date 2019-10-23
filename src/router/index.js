/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Messages from '../views/Message.vue'
import Search from '../views/Search.vue'
import MessageDetail from '../views/MessageDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // n个路由
  routes:[
    {
      path: '/about',
      component: About,
      children: [
        {path:'/about/search', component: Search},
        {path: '', redirect:'/about/search'}
      ]
    },
    {
      path: '/home',
      component: Home,
      children: [
        {path: 'news', component:News}, // path最左侧的/永远代表根路由
        {
          path: '/home/messages',
          component: Messages,
          children: [
            {
              path: '/home/messages/detail/:id',
              component: MessageDetail
            }
          ]
        },
        {path: '', redirect: '/home/news'}
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
