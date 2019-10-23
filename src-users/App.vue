<template>
  <div class="container">
    <Search/>
    <UsersMain/>
  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import Main from './components/Main.vue'
  export default {
    components: {
      Search,
      UsersMain: Main
    }
  }
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
