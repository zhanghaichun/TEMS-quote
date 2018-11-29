<template id="tabbar_">
  <tabbar slot="bottom"  @on-index-change="onIndexChange" v-if="isShow">
    <tabbar-item :selected="tabbarIndex==0">
      <img slot="icon" src="./imgs/tabbar-1-2.png">
      <img slot="icon-active" src="./imgs/tabbar-1.png">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item :selected="tabbarIndex==1">
      <img slot="icon" src="./imgs/tabbar-2.png">
      <img slot="icon-active" src="./imgs/tabbar-2-2.png">
      <span slot="label">约课</span>
    </tabbar-item>
    <tabbar-item :selected="tabbarIndex==2">
      <img slot="icon" src="./imgs/zhibo2@3x.png">
      <img slot="icon-active" src="./imgs/zhibo1@3x.png">
      <span slot="label">直播</span>
    </tabbar-item>
    <tabbar-item :selected="tabbarIndex==3">
      <img slot="icon" src="./imgs/tabbar-3.png">
      <img slot="icon-active" src="./imgs/tabbar-3-2.png">
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>
<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    name: 'tabbar2',
    props: {
      tabbarIndex: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      /* 跳转页面 */
      onIndexChange (newIndex, oldIndex) {
        if (newIndex == 0) {
          this.$router.push({
            name: this.$routerName.home
          })
        } else if (newIndex == 1) {
          this.$router.push({
            name: this.$routerName.subject
          })
        } else if (newIndex == 2) {
          this.$router.push({
            name: this.$routerName.liveVideo
          })
        } else if (newIndex == 3) {
          this.$router.push({
            name: this.$routerName.personal
          })
        }
      },
      reload () {
        this.isShow = false
        this.isShow = true
      }
    },
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>
<style>
  #tabbar_ .weui-tabbar{
    position: fixed;
  }
  #app .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
    color: #229eff;
  }
</style>
