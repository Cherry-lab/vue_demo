<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
           v-model="title" @keyup.enter="addItem"/>
  </div>
</template>

<script>
  export default {
    props: {
      // addTask: {
      //   type: Function,
      //   required: true
      // }
      // addTask: Function
    },
    data () {
      return {
        title: ''
      }
    },
    methods: {
      addItem () {
        // 1.检查输入的合法性
        const title = this.title.trim()
        if (!title) {
          alert('任务不能为空')
          return
        }
        // 2.根据输入生成一个task对象
        const task = {
          title,
          complete: false
        }
        // 3.添加到tasks
        // this.addTask(task)
        // 触发自定义事件：addTask
        this.$emit('addTask', task)
        // 4.清除输入
        this.title = ''
      }
    }
  }
</script>

<style>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
  }
</style>
