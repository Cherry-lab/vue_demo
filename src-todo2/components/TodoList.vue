<template>
<ul class="todo-main">
<TodoItem v-for="(task, index) in tasks" :key="index" :task="task" :index="index"/>
</ul>
</template>

<script>
  import TodoItem from './TodoItem'

  export default {
    props: {
      tasks: Array,
    },
    components: {
      TodoItem
    }
  }
</script>

<style>
.todo-main {
margin-left: 0px;
border: 1px solid #dddddd;
border-radius: 2px;
padding: 0px;
}

.todo-empty {
height: 40px;
line-height: 40px;
border: 1px solid #dddddd;
border-radius: 2px;
padding-left: 5px;
margin-top: 10px;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
