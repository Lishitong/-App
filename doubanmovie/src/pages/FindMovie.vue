<template lang="html">
  <div class="">
    <TabBar></TabBar>
    <remen></remen>
    <top250></top250>
    <TabBar></TabBar>
  </div>
</template>

<script>
import remen from './remen'
import top250 from './top250'
import TabBar from './TabBar'

  export default {
    components:{
      remen,
      top250,TabBar
    }
  }
</script>


<style lang="less" scoped>

</style>
