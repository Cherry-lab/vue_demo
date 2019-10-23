<template>
  <div class="header">
    <h3>Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName">
      <button @click="search">Search</button>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    data () {
      return {
        searchName: ''
      }
    },
    methods: {
      search () {
        const searchName = this.searchName.trim()
        console.log(searchName)
        if(searchName){
          // 发布搜索消息
          PubSub.publish('search', searchName)
        }
      }
    }
  }
</script>

<style>
  .header {
    height: 120px;
    background-color: #efefef;
    margin: 0 100px;
    padding: 40px;
}
  .header input {
    width: 200px;
    line-height: 20px;
    padding: 5px 5px;
    margin: 20px 0;
  }
  .header button {
    padding: 7px;
    margin: 0 20px;
    border: 0;
    line-height: 20px;
    background-color: #8fa7c9;
  }
</style>
