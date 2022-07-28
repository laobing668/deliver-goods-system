<template>
  <div class="headerContainer">
    <!-- <span class="title">打包台</span> -->
    <div class="companyBox">
        <span>公司：10010</span>
        <span>仓库：OLATY</span>
      </div>
    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        用户信息<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'headerContainer',
  components: {
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.headerContainer {
  width: 100%;
  position: relative;
  .title {
    font-size: 18px;
    font-weight: 700;
  }
  .companyBox {
    height:40px ;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
      color: red;
      span:first-child {
        margin-right: 30px;
      }
  }
  .el-dropdown {
    position: absolute;
    top: 10px;
    right: 0;
  }
}
</style>
