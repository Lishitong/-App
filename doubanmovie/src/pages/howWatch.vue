<template lang="html">
  <div class="bg">
    <div class="bgTop">
      <img src="../../static/howSeeback.png" @click="shezhiback()" alt="">
      <span>如何在线观看电视/电影?</span>
      <img src="../../static/share.png" @click="s()" alt="">
    </div>
    <p>如何在线观看电视/电影?</p>
    <p>豆瓣是电影评论的分享平台，不支持APP内在线播放，但是对于部分可以在线观看的电影，会附有第三方网站播放链接，在你想看的电影条目中，如果有提示「观看全片」就是可以点击跳转观看的。</p>
    <p>小提示: 部分电影会标注收费，我们提供的都是第三方视频网站的播放链接，是否收费由视频提供方决定。</p>
<img class="howWatch" src="../../static/howWatch.png" alt="">
  <div id="sharesALL" v-if="Share">
    <shareALL :share="Shares"></shareALL>
  </div>
  </div>
</template>

<script>
import shareALL from "../components/shareALL";
export default {
  name: "sharesALL",
  components: {
    shareALL
  },
  data() {
    return {
      Share: false
    };
  },
  methods: {
    shezhiback() {
      history.back();
    },
    s() {
      this.Share = true;
    },
    Shares(a) {
      // console.log(a);
      this.Share = a;
    }
  }
};
</script>

<style lang="css" scoped="scoped">
.bg {
  background-color: #f9f9f9;
}
.bgTop {
  background-color: white;
  /*width: 100%;*/
  height: 0.8rem;
  line-height: 0.8rem;
  /*text-align: center;*/
  font-size: 0.3rem;
  font-weight: 700;
  border-bottom: 0.01rem solid #c6c7c7;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: space-around;
}
.bgTop img {
  width: 0.3rem;
  height: 0.3rem;
  margin-top: 0.25rem;
}
p {
  font-size: 0.3rem;
  margin-left: 5%;
  margin-right: 5%;
  line-height: 0.5rem;
  margin-bottom: 0.1rem;
  font-weight: 500;
  text-indent: 0.6rem;
}
p:nth-of-type(1) {
  font-weight: 800;
  font-size: 0.36rem;
}

.howWatch {
  width: 90%;
  margin: 5%;
}
</style>
