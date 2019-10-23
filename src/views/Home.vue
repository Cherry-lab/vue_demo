<template>
  <div>
    <h2>Home</h2>
    <ul>
      <li>
        <router-link to="/home/news">News</router-link>
        <router-link to="/home/messages">Messages</router-link>
      </li>
    </ul>
    <div>
      <router-view></router-view>
      <hr>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>

</style>
