<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body,
html,
p {
  margin: 0;
  padding: 0;
}
body,
html,
#app {
  height: 100%;
  width: 100%;
}
#app {
  font-family: "PingFangSC-Semibold", "PingFang SC", "Avenir", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
