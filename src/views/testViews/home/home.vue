<style src="./style.less" scoped lang="less"></style>
<template src="./template.html"></template>


<script type="text/ecmascript-6">
  
  import HomeServices from '../../../api/viewServices/Home/home'
  import NavMenu from 'components/navMenu/navMenu'
  import Qs from 'qs'

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
        // 自己创建一个 axios 实例
        const axiosInstance = this.$http.create({
          baseURL: 'https://jsonplaceholder.typicode.com',
          timeout: 20000,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': 'application/json, text/plain, */*'
          },
          transformRequest: [data => {
            // let requestBodyString = ''
            let qsRequestBodyString = Qs.stringify(data)
            // console.warn(qsRequestBodyString)
            // for (let key in data) {
            //   requestBodyString += key + '=' + data[key] + '&'
            // }
            return qsRequestBodyString
          }],
          transformResponse: [data => {
            let returnedData = Object.assign({}, JSON.parse(data), {
              age: 30
            })
            console.warn(data)
            return returnedData
          }]
        })
        // 设置请求拦截器, 请求拦截器传入的参数是
        // 请求时候的配置对象
        // *** 响应拦截器传入的参数是返回的 response 数据
        axiosInstance.interceptors.request.use((config) => {
          return Object.assign({}, config, {
            params: {
              id: 2
            }})
        }, err => {
          throw new Error('request failed: ' + err)
        })
        // 传递配置对象, 对于这种方式，默认使用的是
        // get 方法。
        axiosInstance.get('/todes')
        .then(res => {
          self.testJSONPlaceholderContent = res.data
        })
        .catch(err => {
          throw new Error('request failed: ' + err)
        })
        .then(() => {})
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
