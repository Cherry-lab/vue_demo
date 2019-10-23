/*
入口JS:创建Vue实例
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

// 0.如果使用模块化机制编程，导入Vue和VueRouter，要调用Vue.use(VueRouter)
Vue.use(VueRouter)

// 1.定义（路由）组件
// 可以从其他文件import进来
const user = {
  template: `<div>{{$route.params.id}}</div>`,
  //使用路由参数时，参数变化组件将被复用===》提高效率，组件生命周期钩子不会被调用
  //可以使用以下两种方式对路由参数变化进行监听
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  },
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
}

// 2.定义路由
/* 每个路由应该映射一个组件。其中 "component" 可以是
通过 Vue.extend()创建的组件构造器，或者，只是一个组件配置对象。
 */
const routes = [
  {path: '/user/:id', component: user}

  /*  {
      // 会匹配所有路径
      path: '*'
    }
    {
      // 会匹配以 `/user-` 开头的任意路径
      path: '/user-*'
    }*/
]

// 3.创建router实例，然后传 'routes' 配置
// 还可以传别的配置

const router = new VueRouter({
  routes // (缩写) 相当于 routes:routes
})

// 4. 创建和挂载根实例
// 记得要通过router 配置参数注入路由，从而让整个应用都有路由功能
/*const app = new Vue({
  router
}).$mount("#app")*/

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router
})
