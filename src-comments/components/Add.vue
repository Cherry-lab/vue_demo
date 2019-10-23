<template>
  <div class="c-add">
    <form >
      <div>
        <span>用户名</span>
        <br>
        <input type="text" placeholder="用户名" class="name-left" v-model="name">
      </div>
      <div>
        <span>评论内容</span>
        <br>
        <textarea class="comment-left" placeholder="评论内容" v-model="content"></textarea>
        <button type="button" class="sub" @click="add">提交</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default{
    props:{
      addComment: {// 指定属性名，属性值类型，必要性
        type: Function,
        required: true
      }
    },
    data () {
      return{
        name: '',
        content: ''
      }
    },
    methods:{
      add: function () {
        // 1.检查输入的合法性
        const name = this.name.trim()
        const content = this.content.trim()
        if (!name || !content) {
          alert('姓名或内容不能为空')
          return
        }
        // 2.根据输入的数据，封装成一个comment对象
        const comment = {
          name,
          content
        }
        // 3.添加到comments中
        this.addComment(comment)
        // 4.清除输入
        this.name = ''
        this.content = ''
      }
    }
  }
</script>

<style>
  .c-add{
    /*border: 1px black solid;*/
    width: 385px;
    height: 400px;
    float: left;
  }
  h1{
    display: inline-block;
    font-size: 55px;
    margin-top: 60px;
    font-weight: 400;
  }
  span{
    display: inline-block;
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
  }
  .name-left{
    width: 350px;
    height: 24px;
    size: 15px;
    padding: 5px 10px;
    margin-left: 10px;
  }
  .comment-left{
    width: 350px;
    height: 150px;
    font-size: 15px;
    padding: 10px;
    margin-left: 10px;
  }
  .sub{
    padding: 3px 5px;
    margin: 10px;
    float: right;
  }
</style>
