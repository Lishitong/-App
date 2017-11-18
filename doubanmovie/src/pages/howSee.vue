<template lang="html">
  <div class="bg">
    <div class="bgTop">
      <img src="../../static/howSeeback.png" @click="shezhiback()" alt="">
      <span>如何查看电影榜单？</span>
      <img src="../../static/share.png"  @click="s()" alt="">
    </div>
    <p>如何查看电影榜单？</p>
    <p>『书影音』- 『电影』,下滑页面至『精选榜单』,即可查看到豆瓣Top250、本周口碑榜、新片榜、票房榜。</p>
    <p>精选榜单</p>
    <img class="howSee" src="../../static/howSee.png" alt="">

    <div id="sharesAL" v-if="Share">
      <shareAL :share="Shares"></shareAL>
    </div>

    </div>
</template>

<script>
import shareAL from "../components/shareALL";
export default {
  name: "sharesAL",
  components: {
    shareAL
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
  height: 13rem;
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
  line-height: 0.6rem;
  margin-bottom: 0.2rem;
}
p:nth-of-type(1) {
  font-weight: 800;
}
p:nth-of-type(3) {
  font-weight: 800;
  font-size: 0.26rem;
}
.howSee {
  width: 90%;
  margin: 5%;
}
</style>
