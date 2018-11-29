<style src="./style.less" scoped lang="less"></style>
<template src="./template.html"></template>

<script type="text/ecmascript-6">
  import FTabbar from 'components/tabbar/tabbar'
  import {CategoryService} from 'api/home'

  export default {
    data () {
      return {
        tabbarIndex: 0,
        categoryList: []
      }
    },
    created () {
      this._obtainCategory()
    },
    methods: {
      _obtainCategory () {
        let self = this
        CategoryService.obtainCategory().then((res) => {
          self.categoryList = res
        })
      }
    },
    components: {
      FTabbar
    },
    mounted () {

    },
    computed: {
      header () {
        return this.$refs.header
      },
      videoSwiper () {
        return this.$refs.videoSwiper
      },
      teachermedal () {
        return this.$refs.teacherMedal.swiper
      },
      medal () {
        return this.$refs.medal
      }
    }
  }
</script>
<style scoped rel="stylesheet/less" lang="less">

</style>
