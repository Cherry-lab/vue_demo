<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<TodoHeader @addTask="addTask"/>--><!-- 给TodoHeader标签对象绑定addTask事件监听 -->
      <TodoHeader ref="header"/>
      <TodoList :tasks="tasks" />
<!--      <TodoFooter :tasks="tasks" :deleteCompleteItem="deleteCompleteItem"-->
<!--                  :selectAllTasks="selectAllTasks"/>-->
      <TodoFooter>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
        <span slot="count">已完成{{completed}} / 全部{{tasks.length}}</span>
        <button class="btn btn-danger" v-show="completed" @click="deleteCompleteItem" slot="delete">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>
<!--
绑定事件监听-----订阅消息
触发事件-----发布消息
-->
<script>
  import PubSub from 'pubsub-js'
  import TodoFooter from './components/TodoFooter'
  import TodoList from './components/TodoList'
  import TodoHeader from './components/TodoHeader'
  import storageUtil from './util/storageUtil'
  export default {
    data () {
      return {// 从localStorage中读取tasks
        // JSON.parse()函数解析字符串，getItem()函数在文件中获取到的是字符串
        // tasks: JSON.parse(window.localStorage.getItem('tasks_key') || '[]')
        tasks: storageUtil.readTasks()
      }
    },
    computed: {
      completed () {
        return this.tasks.reduce((preTotal, task) => preTotal + (task.complete ? 1 : 0), 0)
      },
      isAllCheck: {
        get () {
          return this.completed === this.tasks.length && this.completed > 0
        },
        set (value) { // value是当前checkbox最新的值
          this.selectAllTasks(value)
        }
      }
    },
    mounted () { // 执行异步代码（绑定监听）
      // 给<TodoHeader/>绑定addTask事件监听
      // this.$on('addTask', this.addTask)  // 给App绑定监听，不正确
      this.$refs.header.$on('addTask', this.addTask)

      // 订阅消息
      PubSub.subscribe('deleteTask', (msg, index) => {
        this.deleteTask(index)
      })
    },
    methods: {
      addTask (task) {
        this.tasks.unshift(task)
      },
      deleteTask (index) {
        this.tasks.splice(index, 1)
      },
      // 全选 。 全不选
      selectAllTasks (check) {
        this.tasks.forEach(task => (task.complete = check))
      },
      // 删除所有选中的
      deleteCompleteItem () {
        this.tasks = this.tasks.filter(task => !task.complete)
      }
    },
    watch: { // 监视
      tasks: {
        deep: true, // 深度监视
        // handler: function (newValue, oldValue) {}
        /*
        handler: function (value) {
          // 将tasks最新值的JSON数据，保存到localStorage
          // 存取都为json格式的字符串
          // window.localStorage.setItem('tasks_key', JSON.stringify(value))
          storageUtil.saveTasks(value)
        }
         */
        handler: storageUtil.saveTasks
      }
    },
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 5px;
  }
</style>
