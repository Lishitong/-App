<template lang="html">
  <div class="alls">
    <p class="nologin"></p>
    <div v-if="showlogin" class="">
      <p  class="nofind">您还没有登录哦，豆儿等您！</p>
    </div>
    <div v-else class="loginin">
      <span>0部</span>
      <span @click="timpeShow()">标签筛选</span>
    </div>
    <div v-if="timpe" class="timpe">
      <p @click="timpeClose()">X</p>
      <button type="button" name="button">全部标签</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showlogin: 1,
      timpe: 0
    };
  },
  methods: {
    timpeShow() {
      this.timpe = 1;
    },
    timpeClose() {
      this.timpe = 0;
    }
  },
  created() {
    if (document.cookie.length > 0) {
      this.showlogin = 0;
      // console.log(document.cookie);
    }
  }
};
</script>

<style lang="css" scoped>
.alls {
  position: relative;
}
.nofind {
  width: 100%;
  background: url("../../static/wait.png") center center no-repeat;
  background-color: #f7f7f7;
  height: 9rem;
  text-align: center;
  line-height: 3rem;
  font-size: 0.3rem;
}
.loginin {
  width: 100%;
  background: url("../../static/Kong.png") center center no-repeat;
  /*background-size: 100% 100%;*/
  background-color: #fefefe;
  height: 9rem;
  /*text-align: center;*/
  line-height: 1rem;
  font-size: 0.3rem;
  /*padding: .4rem;*/
}
.loginin span:nth-of-type(1) {
  /*float: right;*/
  color: black;
  padding-left: 0.4rem;
}
.loginin span:nth-of-type(2) {
  float: right;
  color: #0abe25;
  padding-right: 0.4rem;
}
.timpe {
  margin-bottom: 3rem;
  position: fixed;
  right: 5%;
  top: 40%;
  width: 40%;
  height: 2rem;
  border: 1px solid #eeeeee;
  border-radius: 0.1rem;
}
.timpe p {
  margin: 0.2rem 0 0 0.2rem;
}
.timpe button {
  float: right;
  margin-right: 0.2rem;
  background: #0cbe25;
  color: white;
  border-radius: 0.01rem;
  padding: 0.1rem;
}
</style>
