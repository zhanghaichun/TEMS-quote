<template class="popupLookCurr">
  <popup v-model="show" :hide-on-blur="false" on-hide="showHide">
    <div class="content">
      <div class="header">
        <i @click="close()"></i>
      </div>
      <div class="tableBox">
        <div class="tabHead aliJusCen f16 borBto">
          <div class="tableTh flex1 aliJusCen" v-for="(item,index) in weekList">
            <div v-if="index==0" class="week">
              授课时间
            </div>
            <div>
              {{item}}
            </div>
          </div>
        </div>
        <div class="tableTbody f16">
          <div class="borBto timeBox" v-for="(item,index) in timeList">
            <div class="flex1 aliJusCen">
              {{item.title}}
            </div>
            <div class="flex1 aliJusCen"
              v-for="(data,j) in item.time"
              @click="selectTiem(data,j)">
              <div :class="{iden:data.iden}"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </popup>
</template>
<script>
  import { Popup } from 'vux'
  export default {
    name: 'popup-look-curr',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      timeList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        show: false,
        weekList: [ '', '周一', '周二', '周三', '周四', '周五', '周六', '周日' ]
      }
    },
    watch: {
      value (val) {
        this.show = val
      }
    },
    methods: {
      close () {
        this.show = false
        this.$emit('callback1', this.show)
      },
      selectTiem (data, j) {
        // data.iden = !data.iden
      }
    },
    components: {
      Popup
    }
  }
</script>
<style lang="less" scoped>
  .aliJusCen{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .f16{
    font-size: 16px;
  }
  .flex1{
    flex: 1;
  }
  .borBto{
    border-bottom: 1px solid #ededed;
  }
  .iden{
    width: 32/2px;
    height: 32/2px;
    border-radius: 32/2px;
    box-sizing: border-box;
    border: 2px solid #229eff;
  }
  .vux-popup-dialog{
    background: none;
  }
  .content{
    margin: 0px 27/2px;
  }
  .header{
    margin-bottom: 22px;
    display: flex;
    justify-content: center;
  }
  .header i{
    display: block;
    width: 27px;
    height: 27px;
    background: url('./imgs/1.png') no-repeat 0px 0px;
    background-size: 100%;
  }
  .tableBox{
    background-color: #dedede;
    border-radius: 4px 4px 0px 0px;
  }
  // .tabHead{
  //   display: flex;
  //   justify-content: center;
  //   align-item: center;
  // }
  .tableTh{
    height: 84/2px;
  }
  .tableTbody{
    background-color: #fff;
  }
  .week{
    font-size: 12px;
    color: #989898;
    margin: 0px 4px;
    text-align: center;
  }
  .timeBox{
    height: 76/2px;
    display: flex;
  }
</style>
