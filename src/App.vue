<template>
  <div class="container">
    <div class="header">
      <h1>Router basic - 01</h1>
    </div>
    <div class="router-content">
      <div class="left">
        <div class="left-r">
          <router-link to="/about">About</router-link>
        </div>
        <div class="left-r">
          <router-link to="/home">Home</router-link>
        </div>
      </div>
      <div class="right">
<!--        缓存路由组件对象-->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
  .container{
    margin: 20px 150px 10px;
    height: 600px;
  }
  .router-content{
    padding-top: 20px;
    border-top: 1px solid #cccccc;
    height: 500px;
  }
  .left{
    width: 200px;
    height: 500px;
    float: left;
  }
  .left-r{
    border: 1px solid #cccccc;
    margin: 0px auto;
    width: 55px;
    padding: 10px 15px;
  }
  .right{
    width: 700px;
    height: 500px;
    float: left;
  }
</style>
