<template>
  <ul>
    <li>{{$route.params.id}}</li>
    <li>{{messageDetail.title}}</li>
    <li>{{messageDetail.content}}</li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        messageDetail: {}
      }
    },

    mounted () {
      setTimeout(() =>{
        const allMessageDetails = [
          {
            id : 1,
            title: 'message001',
            content: 'message001 content...'
          },
          {
            id : 2,
            title: 'message002',
            content: 'message002 content...'
          },
          {
            id : 3,
            title: 'message003',
            content: 'message003 content...'
          }
        ]
        this.allMessageDetails = allMessageDetails
        const id = this.$route.params.id*1
        this.messageDetail = allMessageDetails.find(detail => detail.id === id)
      },1000)
    },

    watch: {
      $route: function (value) { // 路由路径（param）发生了改变
        const id = value.params.id*1
        this.messageDetail = this.allMessageDetails.find(detail => detail.id === id)
      }
    }
  }
</script>

<style>

</style>
