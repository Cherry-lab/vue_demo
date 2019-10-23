<template>
  <div class="list">
    <h3>
      评论回复：
    </h3>
    <h2 v-show="comments.length === 0">暂无评论，点击右侧添加评论</h2>
    <ul class="list-group">
      <Item v-for="(comment, index) in comments" :key="index" :comment="comment"
            :deleteComment="deleteComment" :index = "index"/>
    </ul>
  </div>
</template>

<script>
  import Item from "./Item";
  export default {
    //声明接收属性:这个属性就会成为组件对象的属性
    props:['comments','deleteComment'],
    components:{
      Item
    }
  }
</script>

<style>
  .list{
    /*border: 1px black solid;*/
    width: 700px;
    height: 400px;
    float: right;
  }
  h3{
    font-size: 27px;
    font-weight: 500;
    padding: 5px 0;
  }
  h2{
    /*display: none;*/
    font-size: 32px;
    font-weight: 500;
  }
  .list-group{
    width: 700px;
    margin: 0;
    padding: 0;
  }
</style>
