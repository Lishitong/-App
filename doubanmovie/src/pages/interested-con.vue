<template lang="html">
  <div class="interested-con">

    <ul>
      <li v-for="(aa, bb) in message" :key="bb">
      <interestedLiCon :item="aa"></interestedLiCon>
      </li>
      <div v-if="flagJudge" class="judge" :style="{background:'url('+getImage(message[0].images.large)+')'}">
        <div class="delete" v-show="flag" @click.stop="deleteFn()" >
          不感兴趣
        </div>
        <img id="point" @click.stop="show()" :src="pointUrl" alt="" >
        <div class="judgeStr">
          <img src="" alt="">
          <h3>越看越没趣</h3>
          <p>漫威的英雄电影漫威的英雄电影漫威的英雄电影漫威的英雄电影漫威的英雄电影漫威的英雄电影电影</p>
          <h6>雪 评论《雷神3》</h6>
        </div>
        <img :src="getImage(message[0].images.large)" alt="">

      </div>
    </ul>
  </div>
</template>

<script>
import interestedLiCon from "./interestedLiCon";
export default {
  props: ["message"],
  data() {
    return {
      articles: {},
      msg: "最近值得看的热门电影",
      pp: "../../static/judgebg.jpg",
      pointUrl: "../../static/point.png",
      arr: [],
      arrbox: [],
      flag: false,
      flagLi: true,
      flagJudge: true
    };
  },
  components: {
    interestedLiCon
  },
  updated() {},
  methods: {
    getImage(url) {
      if (url !== undefined) {
        return url.replace("https://", "https://images.weserv.nl/?url=");
      }
    },
    show() {
      var that;
      if (this.flag == false) {
        this.flag = true;
        // console.log(this.flag);
        that = this;
        document.body.onclick = function() {
          if (that.flag == true) {
            that.flag = false;
            // console.log(that.flag);
          }
          return false;
        };
        // console.log(this.flag);
      }
    },
    deleteFn(el, e) {
      if (this.flagJudge == true) {
        this.flagJudge = false;
      }
    }
  }
};
</script>

<style lang="css" scoped>
.delete {
  width: 1.5rem;
  height: 0.5rem;
  position: absolute;
  right: 0.55rem;
  top: 0.6rem;
  text-align: center;
  line-height: 0.5rem;
  border: 0.01rem solid lightgray;
  background: white;
  color: gray;
}
#point {
  float: right;
  width: 0.4rem;
  height: 0.55rem;
  margin-right: 0.15rem;
}
.judge{
 height:3rem;
 padding:0.4rem 0 0.4rem 0.4rem;
 background:url(../../static/judgebg.jpg);
 /*margin-top: -0.38rem;*/
 color:white;
 position:relative;
}
.judge > img {
  float: right;
  width: 2rem;
  height: 2.5rem;
  margin-top: 0.2rem;
}
.judgeStr {
  width: 55%;
  display: inline-block;
}
.judgeStr h6 {
  margin-top: 0.3rem;
  border-top: 0.01rem solid lightgray;
}
</style>
