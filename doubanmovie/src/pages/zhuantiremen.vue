<template lang="html">
  <div class="zh-top">
    <img @click="back" src="./../../static/arrow.png" alt="">
    <h1>豆瓣热门</h1>
    <img src="./../../static/share.png" alt="">
  </div>
</template>

<script>
export default {
  methods:{
    back(){
      history.back();
    },
  }
}
</script>

<style lang="css">
</style>
