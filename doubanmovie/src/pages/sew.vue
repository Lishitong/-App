<template lang="html">
  <div class="">
    <p class="nologin"></p>
    <div v-if="showlogin" class="">
      <p  class="nofind">您还没有登录哦，豆儿等您！</p>
    </div>
    <div v-else class="loginin">
      <span>0部</span>
      <span>标签筛选</span>
    </div>

  </div>
</template>

<script>
export default {

  data(){
    return{
      showlogin:1
    }

  }
}
</script>

<style lang="css" scoped>
.nofind{
  width: 100%;
  background: url('../../static/wait.png') center center no-repeat;
  background-color: #F7F7F7;
  height: 9rem;
  text-align: center;
  line-height: 3rem;
  font-size: .3rem;
}
.loginin{
  width: 100%;
  background: url('../../static/Kong.png') center center no-repeat;
  /*background-size: 100% 100%;*/
  background-color: #fefefe;
  height: 9rem;
  /*text-align: center;*/
  line-height: 1rem;
  font-size: .3rem;
  /*padding: .4rem;*/
}
.loginin span:nth-of-type(1){
  /*float: right;*/
  color: black;
  padding-left: .4rem;
}
.loginin span:nth-of-type(2){
  float: right;
  color: #0abe25;
  padding-right: .4rem;
}
</style>
