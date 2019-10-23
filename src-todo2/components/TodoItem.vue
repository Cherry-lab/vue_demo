<template>
  <!--onmouseout="" onmouseover=""  -->
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="task.complete">
      <span>{{task.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  import PubSub from 'pubsub-js'

  export default {
    props: {
      task: Object,
      index: Number,
    },
    data () {
      return {
        bgColor: 'white', // 默认的背景颜色
        isShow: false // 默认按钮是否显示
      }
    },
    methods: {
      handleEnter (isEnter) {
        if (isEnter) {
          this.bgColor = '#aaaaaa'
          this.isShow = true
        } else {
          this.bgColor = 'white'
          this.isShow = false
        }
      },
      deleteItem () {
        const {task, index} = this
        if (window.confirm(`确认删除${task.title}吗？`)) {
          // deleteTask(index)
          // 发布消息
          PubSub.publish('deleteTask', index)
        }
      }
    }
  }
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #dddddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li lable li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
