<template lang="html">
  <div class="">
    <movieTV></movieTV>
    <remen></remen>
    <top250></top250>
    <interested></interested>
    <goTop></goTop>
  </div>
</template>

<script>
import goTop from "../components/gotop";
import movieTV from "./movieTV";
import remen from "./remen";
import top250 from "./top250";
import interested from "./interested";
export default {
  components: {
    movieTV,
    remen,
    top250,
    interested,
    goTop
  }
};
</script>


<style lang="less" scoped>

</style>
