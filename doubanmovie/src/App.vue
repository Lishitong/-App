<template>
  <div id="app">
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from './pages/TabBar'


export default {
  name: 'app',
  components : { TabBar }
}
</script>

<style lang="less" scoped>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
