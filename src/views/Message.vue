<template>
  <div>
    <hr>
    <ul>
      <li v-for="(message, index) in messages" :key="message.id">
        <router-link :to="`/home/messages/detail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <hr>
    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        messages: []
      }
    },

    mounted () {
      // 模拟ajax请求从后台获取数据
      setTimeout(() => {
        const messages = [
          {
            id : 1,
            title: 'message001'
          },
          {
            id : 2,
            title: 'message002'
          },
          {
            id : 3,
            title: 'message003'
          }
        ]
        this.messages = messages
      }, 1000)
    },

    methods: {
      pushShow (id) {
        this.$router.push(`/home/messages/detail/${id}`)
      },
      replaceShow (id) {
        this.$router.replace(`/home/messages/detail/${id}`)
      }
    }
  }
</script>

<style>

</style>
