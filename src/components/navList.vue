<template>
    <el-menu
      class="navList"
      default-active="1"
      background-color="#545c64"
      >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">打包台</span>
      </el-menu-item>
    </el-menu>
</template>
<script>
export default {
  name: 'navList',
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
.navList {
  height: 100%;
}
</style>
