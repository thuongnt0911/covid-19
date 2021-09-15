<template>
  <div class="sidebar">
    <el-menu default-active="1" class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span slot="title">Dashboard</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-s-data"></i>
        <span slot="title">Statistics</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">Medical Declaration</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-circle-check"></i>
        <span slot="title">Prevention</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-phone-outline"></i>
        <span slot="title">Help</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="scss">
@import './index.scss';
</style>
