<template lang="html">
  <div class="bg">
    <div class="bg-ui">
      <div class="bgTop">
        <img src="../../static/shezhiback.png" @click="shezhiback()" alt="">
        <span>我的电影票</span>
      </div>
  </div>
  <main>
    <img src="../../static/Kong.png" alt="">
    <p>你还没有购买过电影票</p>
    <p>在线选座,随时购买，无需排队</p>
    <button type="button" name="button" @click="hotPlay()">查看上映电影</button>
  </main>



  </div>

</template>

<script>
export default {
  data() {
    return {
      bol: false,
      footer: false
    };
  },
  methods: {
    shezhiback() {
      history.back();
    },
    hotPlay() {
      this.$router.push({ path: "/HotPlaydss" });
    }
  }
};
</script>

<style lang="css" scoped>
.bg {
  background-color: #fdfdfd;
  width: 100%;
  height: 9rem;
}
.wrap {
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.4);
  position: fixed;
  top: 0.8rem;
  bottom: 0;
  left: 0;
  right: 0;
}
.alertbox {
  position: absolute;
  left: 50%;
  margin-left: -2.5rem;
  top: 50%;
  margin-top: -3rem;
  width: 3rem;
  height: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.alertbox > p {
  width: 100%;
  text-align: center;
  font-size: 0.4rem;
  margin-top: 0.3rem;
}
.alertbox > button {
  width: 0.8rem;
  height: 0.6rem;
  margin-top: 0.3rem;
  border-radius: 0.1rem;
}
.bgTop {
  background-color: white;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.3rem;
  border-bottom: 0.01rem solid #c6c7c7;
  margin-bottom: 0.8rem;
}
.bgTop img {
  width: 0.4rem;
  height: 0.4rem;
  float: left;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
main {
  background-color: #fdfdfd;
  text-align: center;
}
main p:nth-of-type(1) {
  color: black;
  font-size: 0.3rem;
  margin-bottom: 0.3rem;
}
main p:nth-of-type(2) {
  color: #bebebe;
  font-size: 0.2rem;
  margin-bottom: 0.3rem;
}

main img {
  width: 50%;
}
main button {
  border: 0.01rem solid #0abe25;
  background-color: #fdfdfd;
  padding: 0.2rem 0.4rem;
  color: #0abe25;
  border-radius: 0.2rem;
}
</style>
