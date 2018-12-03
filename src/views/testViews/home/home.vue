<style src="./style.less" scoped lang="less"></style>
<template src="./template.html"></template>


<script type="text/ecmascript-6">
  
  import FTabbar from 'components/tabbar/tabbar'
  import HomeServices from '../../../api/viewServices/Home/home'
  import NavMenu from 'components/navMenu/navMenu'

  export default {
    data () {
      return {
        tabbarIndex: 0,
        categoryList: ['Apple', 'Orange', 'Banana'],
        testArray: [1, 2, 3, 4],
        activeIndex: '3',
        comment: {id: 1, text: 'this'}
      }
    },
    created () {
      this._obtainCategory()
    },
    methods: {
      _obtainCategory () {
        let self = this
        HomeServices.obtainCategory().then((res) => {
          self.categoryList = res
        })
      },
      getData () {
        let self = this
        HomeServices.getPostComments({
          userId: 2,
          title: 'Good Answer',
          body: 'good one'
        })
        .then(res => {
          // self.comment = Object.assign({}, self.comment, res[0])
          self.comment = { ...res }
        })
        .catch(err => {
          console.warn(err)
        })
        // HomeServices.getPostComments('userId=2&title=good answer&body=good one')
        // .then(res => {
        //   // self.comment = Object.assign({}, self.comment, res[0])
        //   self.comment = { ...res.data }
        // })
        // .catch(err => {
        //   console.warn(err)
        // })
      }
    },
    components: {
      FTabbar,
      NavMenu
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
