<template lang="html">
  <div class="bg">
    <div class="bgTop">
      <img src="../../static/shezhiback.png" @click="shezhiback()" alt="">
      <span>帮助与反馈</span>
    </div>
    <div class="question">
      <p>常见问题</p>
    </div>
    <main>


    <div class="bgconter first"  >
      <span class="suggest" @click="howSee('howSee')">如何查看电影榜单？</span>
      <img src="../../static/shezhigo.png" alt="">
    </div>
    <div @click="why('why')" class="bgconter" >
      <span >影评/短评为什么会被折叠？</span>
        <img src="../../static/shezhigo.png" alt="">
    </div>

    <div class="bgconter last" @click="howWatch('howWatch')">
      <span>如何在线观看电视/电影</span>
        <img src="../../static/shezhigo.png" alt="">
    </div>
    </main>
    <div class="footer" v-if="footer" @click ="feedBack('feedBack')" >
      <img src="../../static/pen.png" alt="">
      <span>我要反馈</span>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      footer: true
    };
  },
  methods: {
    shezhiback() {
      history.back();
    },
    howSee(howSee) {
      this.$router.push({ path: "/" + howSee });
    },
    why(why) {
      this.$router.push({ path: "/" + why });
    },
    howWatch(howWatch) {
      this.$router.push({ path: "/" + howWatch });
    },
    feedBack(feedBack) {
      this.$router.push({ path: "/" + feedBack });
    }
  }
};
</script>

<style lang="css" scoped>
.bg {
  background-color: #f6f6f6;
  width: 100%;
  height: 9rem;
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
.bgTop p {
}
.bgTop img {
  width: 0.4rem;
  height: 0.4rem;
  float: left;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.question {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: left;
  font-size: 0.16rem;
  color: #70706d;
}
main {
  overflow: hidden;
  background-color: white;
  border-top: 0.01rem solid #c6c7c7;
  border-bottom: 0.01rem solid #c6c7c7;
  margin-bottom: 0.5rem;
}
.bgconter {
  /*background-color:white;*/
  width: 95%;
  margin-left: 5%;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.3rem;
  border-bottom: 0.01rem solid #c6c7c7;

  /*float: right;*/
}
/*.first {
    border-top:.01rem solid #C6C7C7;
}*/
.last {
  border-bottom: 0.0003rem solid #c6c7c7;
}
.bgconter img {
  width: 0.3rem;
  height: 0.3rem;
  float: right;
  margin-top: 0.15rem;
  margin-right: 0.1rem;
}
.bgconter span {
  float: left;
  margin-left: 0.1rem;
  font-size: 0.26rem;
  color: #030302;
}
.footer {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.3rem;
  background-color: white;
  border-bottom: 0.01rem solid #c6c7c7;
  border-top: 0.003rem solid #c6c7c7;
}
.footer img {
  width: 0.4rem;
  height: 0.4rem;
}
</style>
