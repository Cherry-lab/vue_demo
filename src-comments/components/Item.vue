<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteItem">删除</a>
        </div>
        <p class="user">{{comment.name}}说：</p>
        <p class="content-right">{{comment.content}}</p>
    </li>
</template>

<script>
  export default {
    // props:['comment'] // 只指定属性名
    props: { // 指定属性名和属性值的类型
      comment: Object,
      deleteComment: Function,
      index: Number
    },
    methods: {
      deleteItem(){
        const {deleteComment, index, comment} = this
        if (window.confirm(`确定要删除${comment.name}的评论吗？`)){
          deleteComment(index)
        }
      }
    }
  }
</script>

<style>
  .list-group-item{
    border: 1px #cccccc solid;
    padding: 20px 30px;
    width: 640px;
    margin: 0;
  }
  .user{
    font-size: 22px;
    font-weight: 500;
  }
  .content-right{
    font-size: 16px;
    padding:10px 0px 0px 50px;
  }
  .handle{
    background-color: #eceeeb;
    border: 1px black solid;
    float: right;
    padding: 2px 5px;
  }
  a{
    text-decoration: none;
    color: #8fa7c9;
  }
  li{
    list-style: none;
  }
</style>
