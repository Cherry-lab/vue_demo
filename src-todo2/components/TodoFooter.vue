<template>
  <div class="todo-footer">
    <label>
<!--      <input type="checkbox" v-model="isAllCheck">-->
      <slot name="checkAll"></slot>
    </label>
    <span>
<!--      <span>已完成{{completed}}</span> / 全部{{tasks.length}}-->
      <slot name="count"></slot>
    </span>
<!--    <button class="btn btn-danger" v-show="completed" @click="deleteCompleteItem">清除已完成任务</button>-->
    <slot name="delete"></slot>
  </div>
</template>

<script>
  export default {
    props: {

    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
</style>
