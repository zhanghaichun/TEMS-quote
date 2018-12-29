/**
 * Author: Huibin.guan
 * Date: 2018-08-01
 * Time: 22:53
 *
 */
import name from './name'
// import home from '../views/testViews/home/home'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    name: name.login,
    meta: {
      title: '首页',
      keepAlive: false
    },
    component: Login
  }
]
