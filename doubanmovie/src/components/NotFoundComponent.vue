<template>
  <div id="not">
    <h1>404</h1>
    <h3 @click="inde">返回</h3>
  </div>

</template>

<script>
export default {
  methods: {
    inde() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
#not {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 5rem;
  margin-top: 3rem;

  h1 {
    color: green;
    font-size: 2rem;
  }

  h3 {
    color: #000;
    margin-top: 1rem;
  }
}
</style>

