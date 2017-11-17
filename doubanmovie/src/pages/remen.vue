<template lang="html">
  <div id="remen">
    <loading v-if="bol"></loading>
    <div id="top" v-else>
      <h2>豆瓣热门</h2>
      <span @click="turnzt(data)">全部99+></span>
    </div>
    <div id="bottom">
      <div class="wrap" :style="{width:wrapwidth}">
        <div v-for="(x,index1) in sub" class="movies" @click="push(x.id)">
          <img class="smallImg" v-lazy="getImage(x.images.small)"  alt="">
          <p class="title">{{x.title}}</p>
          <p class="fen">
            <span class="star" v-for="(y,index2) in 5">
              <img :src="reStar(index1,index2)" alt="">
            </span>
            {{x.rating.average}}
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import loading from "./../components/loading.vue";
export default {
  name: "remen",
  data() {
    return {
      data: {},
      sub: [],
      bol: true
    };
  },
  components: {
    loading
  },
  methods: {
    getImage(url) {
      if (url !== undefined) {
        return url.replace("https://", "https://images.weserv.nl/?url=");
      }
    },
    push(item) {
      this.$router.push({
        path: "/movxiangqing/" + item
      });
    },
    reStar(in1, in2) {
      if (in2 * 10 < this.sub[in1].rating.stars - 5) {
        return "../../static/star1.png";
      } else {
        return "../../static/star2.png";
      }
    },
    turnzt(data) {
      this.$router.push({
        path: "/zhuantiremen",
        component: resolve => require(["../pages/zhuantiremen.vue"], resolve)
      });
    }
  },
  computed: {
    wrapwidth() {
      return (this.sub.length / 2 * 217 + 17) / 100 + "rem";
    }
  },
  created() {
    this.JSONP(
      "https://api.douban.com/v2/movie/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b",
      null,
      (err, data) => {
        this.data = data;
        this.sub = data.subjects;
        this.bol = false;
      }
    );
  }
};
</script>

<style lang="less" scoped>
#remen {
  padding-bottom: 1rem;
  width: 100%;
  font-size: 0.36rem;
  p {
    width: 100%;
    overflow: hidden;
    height: 0.4rem;
  }
  #top {
    width: 100%;
    height: 0.3rem;
    padding: 0.3rem 0;
    text-align: right;
    span {
      font-size: 0.25rem;
      color: #c7c7c7;
      margin-right: 0.3rem;
    }
  }
  #bottom {
    width: 100%;
    overflow: auto;
  }
  .wrap {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }
  h2 {
    font-size: 0.36rem;
    margin-left: 0.34rem;
    font-weight: 300;
    float: left;
  }
  .title {
    text-align: left;
    font-size: 0.26rem;
    font-weight: 500;
    margin-top: 0.13rem;
    white-space: nowrap;
    overflow: hidden;
  }
  .smallImg {
    width: 2rem;
    height: 2.9rem;
  }
  .movies {
    width: 2rem;
    margin-left: 0.17rem;
    font-size: 0.23rem;
  }
  .star {
    float: left;
    width: 0.27rem;
    height: 0.27rem;
    img {
      width: 0.27rem;
      height: 0.27rem;
    }
  }
  .fen {
    margin-bottom: 0.2rem;
  }
}
</style>
