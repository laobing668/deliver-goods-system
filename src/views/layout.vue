<template>
  <el-container class="layoutContainer">
    <el-aside width="130px">
      <navList />
    </el-aside>
    <el-container>
      <el-header>
        <headerContainer />
      </el-header>
      <el-main class="routerMain">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import navList from '../components/navList.vue'
import headerContainer from '../components/header.vue'
export default {
  name: 'Home',
  components: {
    navList,
    headerContainer
  }
}
</script>
<style lang="scss" scoped>
.layoutContainer {
  height: 100%;
  .el-header {
    height: 40px!important;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
  }
  .routerMain {
    padding: 0 10px 0 0;
    box-sizing: border-box;
  }
}
</style>
