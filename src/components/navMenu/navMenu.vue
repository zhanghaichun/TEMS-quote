<template>
  <el-menu
      :default-active="activeIndex"
      text-color="#fff"
      background-color="#545c64"
      class="el-menu-demo"
      active-text-color="#ffd04b"
      mode="horizontal"
  >
    <el-menu-item index="1">Listings</el-menu-item>
    <el-menu-item index="2">De-listings</el-menu-item>
    <el-menu-item index="3">Post Movers</el-menu-item>
    <el-menu-item index="4">Pre-Movers</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'navMenu',
    props: ['activeIndex']
  }
</script>

<style scoped lang="less">

  
  .el-menu-demo {
    position: fixed;
    display: flex;
    top: 0;
    width: 100%;
    margin-top: 0;
    padding: 0;
    /*justify-content: center;*/
  
    .el-menu-item {
      flex: 1;
      text-align: center;
      padding: 0;
    }
  
  }
</style>