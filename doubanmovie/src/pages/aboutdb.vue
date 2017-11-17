<template lang="html">
  <div class="bg">
    <div class="bgTop">
      <img src="../../static/shezhiback.png" @click="shezhiback()" alt="">
      <span>关于</span>
    </div>
    <main>
      <img src="../../static/aboutdb.png" alt="">
      <p>4.4.3</p>
      <p>&copy;2005-2006 douban.com. All rights reserved.</p>
    </main>
    <footer>
      <p @click="whyOpendb(whyOpendb)">开源许可</p>
    </footer>
  </div>

</template>


<script>
export default {
  methods: {
    shezhiback() {
      history.back();
    },
    whyOpendb(whyOpendb) {
      this.$router.push({
        path: "/whyOpendb",
        component: resolve => require(["../pages/whyOpendb.vue"], resolve)
      });
    }
  }
};
</script>

<style lang="css" scoped>
.bg {
  background-color: #f6f6f6;
  width: 100%;
  height: 12rem;
}
.bgTop {
  background-color: white;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.3rem;
  border-bottom: 0.01rem solid #c6c7c7;
  margin-bottom: 0.2rem;
  font-weight: 700;
}
.bgTop img {
  float: left;
  width: 0.4rem;
  height: 0.4rem;
  margin: 0.2rem 0 0.2rem;
}
main {
  text-align: center;
  margin-top: 1rem;
}
footer {
  text-align: center;
  margin-top: 4rem;
  color: #12851b;
}
</style>
