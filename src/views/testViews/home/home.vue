<style src="./style.less" scoped lang="less"></style>
<template src="./template.html"></template>


<script type="text/ecmascript-6">
  
  import HomeServices from '../../../api/viewServices/Home/home'
  import NavMenu from 'components/navMenu/navMenu'
  // import fs from 'fs'

  /**
   * @description 这是个用来测试的 Home 组件，当 Vue router 指向根目录的时候
   * router-link 指向该组件。
   * @module test-home
   */
  export default {
    data () {
      return {
        tabbarIndex: 0,
        commentsList: [],
        activeIndex: '1',
        testJSONPlaceholderContent: {name: 'jsonPlaceholder'}
      }
    },
    /**
     * @desc created 钩子函数，
     * 获取 comments 列表
     * */
    created () {
      this._obtainCommentsList()
    },
    methods: {
      /**
       * @desc 获取 comments 列表
       * @private
       */
      _obtainCommentsList () {
        let self = this
        HomeServices.getJSONPlaceholderComments().then((res) => {
          // 请求成功
          self.commentsList = res
        })
      },
      /**
       * @desc 第一个并发请求
       * @function _concurrentRequestOne
       * @private
       * */
      _concurrentRequestOne () {
        return this.$http.get('https://jsonplaceholder.typicode.com/todos/1')
      },
      /**
       * @desc 第二个并发请求
       * @function _concurrentRequestOne
       * @private
       * */
      _concurrentRequestTwo () {
        return this.$http.get('https://jsonplaceholder.typicode.com/todos/2')
      },
      /**
       * @desc 测试 axios
       * @function testAxiosPlugin
       * @private
       */
      _testAxiosPlugin () {
        let self = this
        // 传递配置对象, 对于这种方式，默认使用的是
        // get 方法。
        this.$http('https://jsonplaceholder.typicode.com/todos/2')
        .then(res => {
          self.testJSONPlaceholderContent = res
        })
        .catch(err => {
          console.warn('请求失败: ' + err)
        })
        .then(() => {
        })
      }
    },
    components: {
      NavMenu
    },
    mounted () {

    }
  }
</script>
<style scoped rel="stylesheet/less" lang="less">

</style>
