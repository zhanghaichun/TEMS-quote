<template class="popupGifi">
  <popup v-model="show" :hide-on-blur="true" @on-hide="onhide">
    <div class="content">
      <div class="head aliCenJusStart f16 borBot">
        约课独家优惠，预约即可获得:
        <div style="float: right;margin-left: 100px" @click="close()">关闭</div>
      </div>
      <div class="borBot ">
        <div  v-for="item in giftList" class="strip1 aliStartJusEnd f14 padRig">
          <span class="span1">
            预约礼
          </span>
          <div class="flex1">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div class="borBot promptBox">
      <div class="prompt aliJusCen flex1" v-for="(item,index) in promptList">
        <i></i>
        <div class="promptItem">
          <span>{{item}}</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="aliJusCen flex1" @click="appoBtn()">
        预约试听
      </div>
    </div>
  </popup>
</template>
<script>
  import { Popup, XInput } from 'vux'
  export default {
    name: 'popup-gifi',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      bind: {
        type: Boolean,
        default: false
      },
      giftList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        show: false,
        tele: '',
        veri: '',
        isType (value) {
          return {
            valid: '',
            msg: ''
          }
        },
        promptList: [ '无强行推销', '号码仅此老师课件' ],
        paracont: '获取验证码',
        paraevent: false,
        timePromise: null,
        second: 60,
        msg: '',
        str1: '预约成功,到我的-预约查看教师电话',
        str2: '预约失败,请稍后预约',
        appo: true,
        flag: false
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
      },
      getVeri () {
        this.timePromise = setInterval(() => {
          this.paraevent = true
          if (this.second === 0) {
            clearInterval(this.timePromise)
            this.paraevent = false
            this.paracont = '获取验证码'
            this.second = 60
            return false
          }
          this.paracont = this.second + '秒后可重发'
          this.second --
        }, 1000)
      },
      appoBtn () {
        this.show = !this.show
        this.flag = true
      },
      onhide () {
        let confirmAppo = this.flag ? {
          'appo': this.appo,
          'appoMsg': this.appo ? this.str1 : this.str2
        } : ''
        let obj = {
          'confirmAppo': confirmAppo,
          'show': this.show
        }
        this.$emit('callback2', obj)
        this.flag = false
      }
    },
    destroyed () {
      clearInterval(this.timePromise)
    },
    components: {
      Popup,
      XInput
    }
  }
</script>
<style lang="less" scoped>
  .vux-popup-dialog{
    background: none;
  }
  .weui-cell{
    padding: 0px;
  }
  .padRig{
    padding-right: 27/2px;
  }
  .borBot{
    border-bottom: 1px soild #ededed;
  }
  .aliJusCen{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .aliStartJusEnd{
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .aliCenJusStart{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .f14{
    font-size: 14px;
  }
  .f16{
    font-size: 16px;
  }
  .flex1{
    flex: 1;
  }
  .flex2{
    flex: 2;
  }
  .flex3{
    flex: 3;
  }
  .borBto{
    border-bottom: 1px solid #ededed;
  }
  .content{
    background-color: #fff;
    padding-left: 27/2px;
  }
  .head{
    height: 88/2px;
  }
  .strip1{
    height: 62/2px;
    display: felx;
  }
  .strip1 span{
    display: block;
    height: 20px;
    line-height: 20px;
    border-radius: 2px;
    padding: 0px 4px;
    margin-right: 8px;
  }
  .strip1 div{
    color: #6d6d6d;
  }
  .span1{
    border: 1px solid #ff4444;
    color: #ff4444;
  }
  .teleBox, .veriBox{
    height: 44px;
  }
  .teleTitle, .veriTitle{
    color: #989898;
    margin-right: 4px;
  }
  .veriTitle{
    flex: 1.1;
  }
  .getVeri{
    height: 25px;
    margin-right: 27/2px;
    button {
      width: inherit;
      height: inherit;
      outline: none;
      background-color: #fff;
      border: 1px solid #229eff;
      color: #229eff;
      border-radius: 4px;
      padding: 0px 6px;
      color: #2b9cff;
    }
    button:active {
      background-color: #c1c1c1;
    }
    button:disabled {
      background: #c1c1c1;
      color: #fff;
      border: 1px solid #c1c1c1;
    }
  }
  .promptBox{
    height: 74/2px;
    display: flex;
    font-size: 14px;
    background-color: #f5f5f5;
  }
  .prompt i{
    display: block;
    width: 23/2px;
    height: 27/2px;
    background: url('./imgs/1.png') no-repeat 0px 0px;
    background-size: 100%;
    margin-right: 2px;
  }
  .promptItem{
    width: auto;
  }
  .footer{
    height: 118/2px;
    background-color: #fff;
    display: flex;
    font-size: 16px;
    color: #fff;
  }
  .footer div{
    background-color: #229eff;
    border-radius: 4px;
    margin: 10px 27/2px;
  }
</style>
