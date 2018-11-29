import api from './../api'
import routerName from './../router/name'
// import * as sessionStorage from 'utils/sessionStorage'
// import * as localStorage from 'utils/localStorage'
// import * as storage from 'utils/storage'
// import rules from 'utils/rules'

export default function plugin (Vue) {
  // api 配置
  Vue.$api = Vue.prototype.$api = api
  // 路由界面配置
  Vue.$routerName = Vue.prototype.$routerName = routerName
  // // sessionStorage 全局配置
  // Vue.$sessionStorage = Vue.prototype.$sessionStorage = sessionStorage
  // // localStorage 全局配置
  // Vue.$localStorage = Vue.prototype.$localStorage = localStorage
  // // storageName 全局配置
  // Vue.$storageName = Vue.prototype.$storageName = storageName
}
