<template>
  <el-container>
    <el-header>
      <slot name="page-header"></slot>
    </el-header>
    <el-main>
      <slot name="page-main"></slot>
    </el-main>
    <el-footer>
      <slot name="page-footer"></slot>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    name: 'layout'
  }
</script>

<style scoped lang="less">

</style>