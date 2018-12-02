// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import globalConfig from './utils/globalConfig'
import _ from 'lodash' // Lodash Library
import axios from 'axios'
import { ConfirmPlugin, AlertPlugin, LoadingPlugin } from 'vux'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css/animate.css'

/* eslint-config-standard 插件是用来约束 js 写法规则的 */
/* 详情请参见 https://standardjs.com/rules-zhcn.html */

const FastClick = require('fastclick')
/* 路由名称 */
Vue.use(globalConfig)

/* vux UI 组件 */
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)
Vue.config.productionTip = false

Vue.use(ElementUI)
window.eventBus = new Vue()
/* 解决移动端点击延迟300毫秒效果 */
FastClick.attach(document.body)
/* eslint-disable no-new */

Vue.prototype._ = _ // Refer Lodash library.
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  store,
  ...App
})
