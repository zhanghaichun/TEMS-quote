/**
 * Author: Huibin.guan
 * Date: 2018-11-29
 * Time: 10:36
 *
 */
import axios from 'axios'
import HomeUrl from './homeUrl'

// Home Service
export default {
  // 获取分类列表
  obtainCategory () {
    // const url = '/studentApi/teacher.do?method=obtainTeacherCategory'
    return axios.post(HomeUrl.TEACHER_CATEGORYS).then((res) => {
      return Promise.resolve(res)
    })
  },
  // 从 json placeholder 中获取 comments 列表。
  getComments () {
    return axios.get(HomeUrl.JSONPLACEHOLDER_COMMENTS).then((res) => {
      return Promise.resolve(res)
    })
  },
  // 使用 post 方式来请求数据
  getPostComments (ops) {
    return axios.post(HomeUrl.POST_DATA, ops).then((res) => {
      return Promise.resolve(res)
    })
  }
}
