<template>
  <div class="fk_dialog">
      <x-dialog :show="dialog" >
        <div class="dialog_box flex_box_com">
          <img class="wx_icon" src="./imgs/QRCode.png">
          <div class="touch flex_box_com">
            <img src="./imgs/touch.png" /><span>长按识别二维码关注</span>
          </div>
          <span class="kc">
            约课无忧
          </span>
        </div>
      </x-dialog>
      <img v-if="this.dialog" class="confirm" src="./imgs/ios-close-outline.png" @click="confirm"/>
  </div>
</template>
<script>
  import { XDialog } from 'vux'
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        dialog: false
      }
    },
    watch: {
      show (val) {
        setTimeout(() => {
          this.dialog = val
        }, 10)
      }
    },
    methods: {
      confirm () {
        this.dialog = false
        this.$emit('dialog', this.dialog)
      }
    },
    components: {
      XDialog
    }
  }
</script>
<style scoped lang="less">
  .fk_dialog {
    .weui-dialog {
      background-color: transparent;
    }
  }
  .dialog_box {
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    .wx_icon {
      width: 410px/2;
      height: 410px/2;
    }
    .touch {
      height: 30px;
      line-height: 30px;
      color: #fff;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .kc {
      color: #ffc521;
      border-radius: 20px;
      padding: 3px 10px;
      border: 1px solid #ffc521;
    }
  }
  .confirm {
    width: 70px/2;
    height: 70px/2;
    position: absolute;
    top:123px;
    right: 36px;
    z-index: 1000;
  }
</style>