/**
 * Author: Huibin.guan
 * Date: 2018-11-29
 * Time: 10:36
 *
 */
import axios from 'axios'

// 分类Service
export const CategoryService = {
  // 获取分类列表
  obtainCategory () {
    const url = '/studentApi/teacher.do?method=obtainTeacherCategory'
    return axios.post(url).then((res) => {
      return Promise.resolve(res)
    })
  }
}
