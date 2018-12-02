/**
 * Author: Huibin.guan
 * Date: 2018-08-01
 * Time: 22:53
 *
 */
import name from './name'
import home from '../views/home/home'

export default [
  {
    path: '/',
    name: name.home,
    meta: {
      title: '首页',
      keepAlive: false
    },
    component: home
  }
]
