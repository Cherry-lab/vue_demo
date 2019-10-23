/*
使用localStorage存储数据的工具模块
1. 函数
2. 对象
需要向外暴露1个功能还是多个功能
 */
const TASKS_KEY = 'tasks_key'
export default {
  saveTasks (tasks) {
    window.localStorage.setItem(TASKS_KEY, JSON.stringify(tasks))
  },
  readTasks () {
    return JSON.parse(window.localStorage.getItem(TASKS_KEY) || '[]')
  }
}
