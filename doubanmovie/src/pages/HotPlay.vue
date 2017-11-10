<template>
    <div class="out">
      <swiper />
      <div class="wrap">
        <router-link to="/HotPlay/nowing">正在热映</router-link>
        <router-link to="/HotPlay/loading">即将上映</router-link>
      </div>
        <router-view/>
    </div>
</template>

<script>
import swiper from './swiper'
export default {
  name:'now',
  components:{
    swiper
  }
}
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 1rem;
}
.wrap a{
  float: left;
  width: 50%;
  font-size: .3rem;
  color: #4C4C4C;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
.router-link-active {
  border-bottom: 0.02rem solid #123;
  color: #123;
}
</style>
