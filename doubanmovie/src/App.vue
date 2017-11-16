<template>
  <div id="app">
    <keep-alive><TabBar /></keep-alive>
  </div>
</template>

<script>
import rem from '../static/js/rem'
import TabBar from './pages/TabBar'


export default {
  name: 'app',
  components:{
    rem, TabBar
  }
}
</script>
<style lang="css" scoped>

</style>
