/**
 * Author: Huibin.guan
 * Date: 2018-08-01
 * Time: 22:51
 *
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import map from './map'

Vue.use(VueRouter)

export default new VueRouter({
 // mode: 'history',
  saveScrollPosition: true,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: map
})
