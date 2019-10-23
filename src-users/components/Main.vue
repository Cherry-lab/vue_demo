<template>
  <div class="main-container">
    <h2 v-if="firstView">用户名搜索</h2>
    <h2 v-if="isLoad">LOADING...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar" style="width: 100px; height: 100px;">
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data () {
      return {
        firstView: true,
        isLoad: false,
        users: null, //[{url: '', avatar: '', name: ''}]
        errorMsg:''
      }
    },
    // 点击search时发ajax请求
    mounted () {
      // 订阅搜索消息
      PubSub.subscribe('search', (msg, searchName) => { // 调用此方法说明需要发ajax请求进行搜索
        const url = `https://api.github.com/search/users?q=${searchName}`
        console.log("订阅")
        // 更新状态（请求中）
        this.firstView = false
        this.isLoad = true
        this.users = null
        this.errorMsg = ''
        // 发ajax请求
        axios.get(url).then(response => {
          const result = response.data
          const users = result.items.map(item => ({
            url: item.html_url,
            avatar: item.avatar_url,
            name: item.login
          }))
          // 成功，更新状态（成功）
          this.isLoad = false
          this.users = users
        }).catch(error => {
          // 失败,更新状态（失败）
          this.isLoad = false
          this.errorMsg = '请求失败'
        })
      })
    }
  }
</script>

<style>
  .main-container {
    padding: 10px 100px;
  }
  .card {
  float: left;
  width: 30%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}
  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }
  .card-text {
    font-size: 85%;
  }
</style>
