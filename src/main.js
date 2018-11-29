// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import globalConfig from './utils/globalConfig'
import { ConfirmPlugin, AlertPlugin, LoadingPlugin } from 'vux'

const FastClick = require('fastclick')
/* 路由名称 */
Vue.use(globalConfig)

/* vux UI 组件 */
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.config.productionTip = false
window.eventBus = new Vue()
/* 解决移动端点击延迟300毫秒效果 */
FastClick.attach(document.body)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  ...App
})
