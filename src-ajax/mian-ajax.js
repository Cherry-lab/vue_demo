/*
入口JS:创建Vue实例
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

// 声明使用插件
Vue.use(VueResource) // 内部会给vm对象和组件对象添加一个属性：$http ,该属性具有两个方法 get post

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
