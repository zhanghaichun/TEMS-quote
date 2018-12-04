<style src="./assets/css/students.css"></style>
<style src="./assets/css/cube.css"></style>
<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- 这个是移动端的导航栏，在这里是用不到的 -->
    <FTabbar :tabbarIndex="tabbarIndex" v-if="showTab"></FTabbar>
  </div>

</template>

<script>
import FTabbar from './components/tabbar/tabbar'

/**
 * @description 这个是用来服务根组件的
 * @module rootVue
 */
export default {
  name: 'app',
  data () {
    return {
      tabbarIndex: 1,
      showTab: false
    }
  },
  created () {

  },
  watch: {
    '$route' (to, from) {
      if (to.name !== 'openidCallback' && to.from !== 'openidCallback') {

      }
      if (to.name === 'subject') {
        to.meta.keepAlive = true
        this.showTab = true
      } else {
        from.meta.keepAlive = false
        this.showTab = false
      }
    }
  },
  methods: {
    /**
     * @description 这个是打印内容的方法
     * @method testLog
     */
    testLog () {
      console.warn('打印的内容')
    }
  },
  components: {
    FTabbar
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
html {
  height: 100%;
  body {
    font-family: PingFangSC-Regular, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fbf9fe;
    overflow-x: hidden;
    height: 100%;
    #app {
      height: 100%;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      /*padding-top: 61px;*/
    }
  }
  ::-webkit-scrollbar {
    display: none;
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.0);
    background: rgba(0, 0, 0, 0.0);
  }
}
</style>
