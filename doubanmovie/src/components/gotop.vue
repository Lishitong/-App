<template lang="html">
  <div @scroll="xianshi()" class="scrolltop" @click="gotop" :class="{'xian':xian}"></div>
</template>

<script>
export default {
  name: "scrolltop",
  data() {
    return {
      scroll: 0,
      xian: true
    };
  },
  methods: {
    gotop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
    xianshi() {
      this.scroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (this.scroll >= 600) {
        this.xian = false;
      } else {
        this.xian = true;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.xianshi);
  }
};
</script>

<style lang="css">
.scrolltop {
  width: 0.5rem;
  height: 0.5rem;
  background: url(../../static/img/gotop.png) no-repeat top/100% 100%;
  position: fixed;
  right: 0.2rem;
  top: 70%;
  z-index: 3;
}
.xian {
  display: none;
}
</style>
