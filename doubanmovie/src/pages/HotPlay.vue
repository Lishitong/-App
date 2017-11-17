<template>
    <div class="out">
      <swiper />
      <div class="wrap">
        <router-link to="/HotPlay/nowing" :class="{'router-link-active':ok}">正在热映</router-link>
        <router-link to="/HotPlay/loading">即将上映</router-link>
      </div>
        <router-view/>
    </div>
</template>

<script>
import swiper from "./swiper";
export default {
  name: "now",
  data() {
    return {
      ok: true
    };
  },
  components: {
    swiper
  },
  watch: {
    $route(newValue, oldValue) {
      this.ok = false;
    }
  }
};
</script>

<style scoped>
.out {
  margin-top: 1rem;
}
.wrap {
  width: 100%;
  height: 1rem;
  /*position:fixed;
  background: white;
  z-index:2;*/
}
.wrap a {
  float: left;
  width: 50%;
  font-size: 0.3rem;
  color: #4c4c4c;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
.router-link-active {
  border-bottom: 0.02rem solid #123;
  color: #123;
}
</style>
