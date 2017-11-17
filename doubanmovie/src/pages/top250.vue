<template lang="html">
  <div id="top250">
    <loading v-if="bol"></loading>
    <div v-else>
      <h2>{{title.title}}</h2>
      <div id="box">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <toppage :data="dat1"></toppage>
          </swiper-slide>
          <swiper-slide>
            <toppage :data="dat2"></toppage>
          </swiper-slide>
          <swiper-slide>
            <toppage :data="dat3"></toppage>
          </swiper-slide>
        </swiper>
      </div>
      <p @click="zhuanti250()" :dataurl="list[nowpage]">全部{{title.bu}}部</p>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import loading from "./../components/loading.vue";
import toppage from "./../components/toppage.vue";
require("swiper/dist/css/swiper.css");
export default {
  name: "top250",
  data() {
    return {
      nowpage: 0,
      swiperOption: {
        notNextTick: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        onSlideChangeEnd: swiper => {
          swiper.update();
          if (swiper.activeIndex == 0) {
            this.title.title = this.dat1.tit;
            this.title.bu = this.dat1.bu;
            this.nowpage = 0;
          } else if (swiper.activeIndex == 1) {
            this.title.title = this.dat2.tit;
            this.title.bu = this.dat2.bu;
            this.nowpage = 1;
          } else {
            this.title.title = this.dat3.tit;
            this.title.bu = this.dat3.bu;
            this.nowpage = 2;
          }
        }
      },
      bol: true,
      title: {
        title: "",
        bu: ""
      },
      list: [],
      data1: {},
      data2: {},
      data3: {},
      dat1: {
        link:
          "https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b",
        url: [],
        title: [],
        stars: [],
        fen: [],
        ping: [],
        id: [],
        bu: "",
        tit: ""
      },
      dat2: {
        link:
          "https://api.douban.com/v2/movie/weekly?apikey=0b2bdeda43b5688921839c8ecb20399b",
        url: [],
        title: [],
        stars: [],
        fen: [],
        ping: [],
        id: [],
        bu: "",
        tit: ""
      },
      dat3: {
        link:
          "https://api.douban.com/v2/movie/us_box?apikey=0b2bdeda43b5688921839c8ecb20399b",
        url: [],
        title: [],
        stars: [],
        fen: [],
        ping: [],
        id: [],
        bu: "",
        tit: ""
      }
    };
  },
  components: {
    loading,
    toppage,
    swiper,
    swiperSlide
  },
  methods: {
    getImage(url) {
      if (url !== undefined) {
        return url.replace("https://", "https://images.weserv.nl/?url=");
      }
    },
    zhuanti250() {
      (this.list = ["top250", "weekly", "us_box"]),
        this.$router.push("/zhuanti250/" + this.list[this.nowpage]);
    }
  },
  created() {
    this.JSONP(this.dat1.link, null, (err, data) => {
      this.bol = false;
      this.data1 = data;
      this.dat1.tit = this.data1.title;
      this.title.title = this.data1.title;
      this.dat1.bu = this.data1.total;
      this.title.bu = this.data1.total;
      for (let x = 0; x < 4; x++) {
        this.dat1.url[x] = this.getImage(this.data1.subjects[x].images.small);
        this.dat1.title[x] = this.data1.subjects[x].title;
        this.dat1.stars[x] = this.data1.subjects[x].rating.stars;
        this.dat1.fen[x] = this.data1.subjects[x].rating.average;
        this.dat1.ping[x] = this.data1.subjects[x].collect_count;
        this.dat1.id[x] = data.subjects[x].id;
      }
    });
    this.JSONP(this.dat2.link, null, (err, data) => {
      this.data2 = data;
      this.dat2.tit = this.data2.title;
      this.dat2.bu = data.subjects.length;
      for (let x = 0; x < 4; x++) {
        this.dat2.url[x] = this.getImage(
          this.data2.subjects[x].subject.images.small
        );
        this.dat2.title[x] = this.data2.subjects[x].subject.title;
        this.dat2.stars[x] = this.data2.subjects[x].subject.rating.stars;
        this.dat2.fen[x] = this.data2.subjects[x].subject.rating.average;
        this.dat2.ping[x] = this.data2.subjects[x].subject.collect_count;
        this.dat2.id[x] = this.data2.subjects[x].subject.id;
      }
    });
    this.JSONP(this.dat3.link, null, (err, data) => {
      this.data3 = data;
      this.dat3.tit = this.data3.title;
      this.dat3.bu = data.subjects.length;
      for (let x = 0; x < 4; x++) {
        this.dat3.url[x] = this.getImage(
          this.data3.subjects[x].subject.images.small
        );
        this.dat3.title[x] = this.data3.subjects[x].subject.title;
        this.dat3.stars[x] = this.data3.subjects[x].subject.rating.stars;
        this.dat3.fen[x] = this.data3.subjects[x].subject.rating.average;
        this.dat3.ping[x] = this.data3.subjects[x].subject.collect_count;
        this.dat3.id[x] = this.data3.subjects[x].subject.id;
      }
    });
  }
};
</script>

<style lang="less" scoped>
#top250 {
  width: 100%;
  padding-bottom: 1rem;
  & > div {
    width: 100%;
  }
  & > div > p {
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    color: #bbb;
    font-size: 0.25rem;
  }
  ul {
    width: 100%;
  }
  h2 {
    font-size: 0.36rem;
    float: left;
    height: 0.7rem;
    line-height: 0.7rem;
    margin: 0 0 0.2rem 0.2rem;
    // overflow: hidden;
  }
}
ul {
  width: 100%;
}
h2 {
  font-size: 0.36rem;
  float: left;
  height: 0.7rem;
  line-height: 0.7rem;
  margin: 0 0 0.2rem 0.2rem;
  overflow: hidden;
}

#box {
  width: 100%;
  overflow-x: auto;
}
</style>
