<template>
  <div class="navbar">
    <div class="logo">
      <h3>Covid - 19</h3>
    </div>
    <div class="flex-end">
      <div class="navbar__content">
        <el-button class="noti-button" icon="el-icon-bell" circle />
        <div class="navbar__content-profile">
          <el-dropdown class="profile-dropdown">
            <span class="el-dropdown-link">
              <i class="el-icon-user-solid"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Profile</el-dropdown-item>
              <el-dropdown-item>Logou</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
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
