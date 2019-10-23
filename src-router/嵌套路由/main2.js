/*
入口JS:创建Vue实例
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

// 1.定义（路由）组件
const user = {
  template:
    `<div>
      <h2>{{$route.params.id}}</h2>
      <router-view></router-view>
    </div>`
}

const fooHome = {template: `<div>fooHome</div>`}
const foo11 = {template: `<div>foo1</div>`}
const foo22 = {template: `<div>foo2</div>`}


// 2.定义路由
const routes = [
  {path: '/user/:id', component: user,
    children: [
      {path: '', component: fooHome},
      {path: 'foo1', component: foo11},
      {path: 'foo2', component: foo22},
      {path: 'foo2', component: foo22}
    ]
  }
]

// 3.创建router实例，然后传 'routes' 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes:routes
})


new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  // 4. 创建和挂载根实例
  router
})
