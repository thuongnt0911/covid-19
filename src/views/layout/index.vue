vu
<template>
  <div class="base-layout">
    <div class="main">
      <navbar />
      <div class="base-layout__content">
        <sidebar />
        <div class="main-content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from './navbar/index.vue'
import Sidebar from './sidebar/index.vue'

export default {
  components: { Navbar, Sidebar },
}
</script>
<style lang="scss" scope>
@import '@/assets/styles/index.scss';
.main {
  height: 100%;
}

.base-layout {
  // height: 100vh;

  &__content {
    flex: 1;
    // height: calc(100vh - 60px);
    padding-top: 60px;
    display: flex;
    overflow: hidden;
  }
}

.main-content {
  margin-left: 200px;
  width: 100%;
  background-color: rgba(237, 238, 247, 0.5);
  padding: 20px;
}
</style>
