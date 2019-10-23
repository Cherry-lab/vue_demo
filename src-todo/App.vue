<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos"
                  :select-all-todos="selectAllTodos" />
    </div>
  </div>
</template>

<script>
  import TodoHeader from "./components/TodoHeader";
  import TodoFooter from "./components/TodoFooter";
  import TodoList from "./components/TodoList";
  export default {
    data(){
      return{
        todos:[
          {title: '吃饭' , complete: false},
          {title: '睡觉' , complete: false},
          {title: '学习' , complete: false},
          {title: '锻炼' , complete: false},
        ]
      }
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      deleteTodo(index){
        this.todos.splice(index,1)
      },
      deleteCompleteTodos(){
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      selectAllTodos(check){
        this.todos.forEach(todo => todo.complete = check)
      }
    },
    components:{
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