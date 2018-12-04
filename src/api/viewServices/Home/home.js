
import axios from 'axios'
import HomeUrl from './homeUrl'

/**
 * @description test-home service, 属于 home 主页中的所有异步请求
 * @module testHomeService
 */
export default {
  /**
   * @desc 从 json placeholder 中获取 comments 列表。
   * @returns {Promise<AxiosResponse<any> | never>}
   */
  getJSONPlaceholderComments () {
    return axios.get(HomeUrl.JSONPLACEHOLDER_COMMENTS).then((res) => {
      return Promise.resolve(res)
    })
  },
  /**
   * @desc 使用 post 方式从 json placeholder 中获取 comments 列表。
   * @returns {Promise<AxiosResponse<any> | never>}
   */
  getPostComments (ops) {
    return axios.post(HomeUrl.POST_DATA, ops).then((res) => {
      return Promise.resolve(res)
    })
  }
}
