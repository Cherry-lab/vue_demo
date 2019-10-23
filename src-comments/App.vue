<template>
    <div>
      <div class="header">
        <div class="title">
          <h1>请发表对Vue的评论</h1>
        </div>
      </div>
      <div class="container">
        <!-- 3. 使用组件标签  -->
        <Add :addComment="addComment"/>
        <List :comments="comments" :deleteComment="deleteComment"/>
      </div>
    </div>
</template>

<script>
// 1.引入组件
import Add from "./components/Add";
import List from "./components/List";
export default {
  data(){  //组件中的data必须是函数
    return{
      comments:[ // 数据在哪个组件，更新数据的行为（方法）就应该在哪个组件
        {
           name:'cat',
           content:'vue so easy'
        },
        {
          name:'bob',
          content:'vue 很不错'
        },
        {
          name:'dog',
          content:'很不错'
        }
      ]
    }
  },
  methods:{
    //添加评论
    addComment(comment){
      this.comments.unshift(comment)
    },
    //删除指定下标评论
    deleteComment(index){
      this.comments.splice(index,1)
    }
  },
  // 2.映射组件标签
  components: {
    Add,
    List
  }

}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .title{
    height: 200px;
    background-color: #eceeeb;
    padding: 0 100px;
  }
  .container{
    padding: 30px 100px;
  }
</style>
