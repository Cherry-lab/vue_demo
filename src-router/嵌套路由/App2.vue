<template>
  <div>
    <router-link to="/user/foo">/user/foo</router-link>
    <router-link to="/user/foo/foo1">/user/foo/foo1</router-link>
    <router-link to="/user/foo/foo2">/user/foo/foo2</router-link>
    <router-link to="/user/bar/foo2">/user/bar/foo2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>

</style>
