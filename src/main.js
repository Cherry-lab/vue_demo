/*
入口JS:创建Vue实例
 */
import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({ //配置对象的属性名都是一些确定的名称， 不能随便修改
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  // 4. 创建和挂载根实例
  router
})
