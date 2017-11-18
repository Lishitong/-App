<template lang="html">
  <div class="per">
    <div class="pertop">
      <div class="per-top">
        <h1 class="lastpage" @click="back"></h1>
        <div class="per-top-text">影人</div>
        <h1 class="zhuanfa" @click="zhuanfa"></h1>
      </div>
      <div class="per-img">
        <div class="big" :class="{'aul':au}">
          <div class="big-img">
            <img v-lazy="getImage(avatars.large)" alt="">
          </div>
          <div class="little">
            <div>
              <img v-lazy="getImage(photos[0])" alt="">
            </div>
            <div>
              <img v-lazy="getImage(photos[1])" alt="">
            </div>
          </div>
          <div class="little">
            <div>
              <img v-lazy="getImage(photos[2])" alt="">
            </div>
            <div>
              <img v-lazy="getImage(photos[3])" alt="">
            </div>
          </div>
          <div class="little">
            <div>
              <img v-lazy="getImage(photos[4])" alt="">
            </div>
            <div>
              <img v-lazy="getImage(photos[5])" alt="">
            </div>
          </div>
          <div class="little">
            <img v-lazy="getImage(photos[6])" alt="">
            <div class="little-box">
               <p>全部图片</p>
               <p>{{num}}张</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="per-midd">
      <div class="midd-top">
        <h1>
          <p>{{msg.name}}</p>
          <p class="gray">{{msg.name_en}}</p>
        </h1>
        <h2>
          <p class="border">+收藏</p>
          <p class="gray">{{rand(2000,10000)}}人</p>
        </h2>
      </div>
      <h1>个人简介</h1>
      <p :class="{'zhankai':flag2}">{{msg.summary}}</p>
      <p class="green"><span @click="zhankai">{{ kai }}</span></p>
    </div>
    <div id="xiang1" :class="{'fa':fa}">
      <fen></fen>
      <h1  @click="auto">取消</h1>
    </div>
    <div class="foo3">
        <p>(｡◕ˇ∀ˇ◕)</p>
    </div>
  </div>
</template>

<script>
import fen from "./fen";
import goTop from "./gotop";
let jsonp = require("jsonp");
export default {
  data() {
    return {
      id: this.$route.params.id,
      msg: {},
      avatars: {},
      photos: [],
      num: 0,
      flag2: true,
      kai: "展开",
      au: false,
      fa: true
    };
  },
  components: {
    goTop,
    fen
  },
  methods: {
    getImage(url) {
      if (url !== undefined) {
        return url.replace("http://", "https://images.weserv.nl/?url=");
      }
    },
    zhuanfa() {
      if (this.fa) {
        this.fa = false;
        this.au = true;
      } else {
        this.fa = true;
        this.au = false;
      }
    },
    auto() {
      this.zhuanfa();
    },
    zhankai() {
      if (this.flag2) {
        this.flag2 = false;
        this.kai = "收起";
      } else {
        this.flag2 = true;
        this.kai = "展开";
      }
    },
    back() {
      history.back();
    },
    rand(m, n) {
      return parseInt(Math.random() * (m - n) + n);
    },
    colors() {
      let color = "0123456789abcdef";
      return (
        "#" +
        color[this.rand(0, 15)] +
        color[this.rand(0, 15)] +
        color[this.rand(0, 15)]
      );
    },
    getData() {
      jsonp(
        "http://api.douban.com/v2/movie/celebrity/" +
          this.id +
          "?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=",
        null,
        (err, data) => {
          if (err) {
            console.error(err);
          } else {
            this.msg = data;
            this.avatars = data.avatars;
            for (let i = 0; i < data.photos.length; i++) {
              this.photos.push(data.photos[i].image);
            }
            this.num = this.photos.length;
            // console.log(this.msg);
          }
        }
      );
    }
  },
  created() {
    if (this.id) {
      this.getData();
    }
  },
  updated() {
    let p = document.querySelector(".pertop");
    if (p) {
      p.style.background = this.colors();
    }
  },
  watch: {
    $route(newdata, olddata) {
      this.id = newdata.params.id;
    }
  }
};
</script>

<style lang="css">
.pertop {
  width: 100%;
  height: 7rem;
  font-size: 0.2rem;
}
.per-top-text {
  color: #fff;
  font-weight: 900;
  font-size: 0.3rem;
}
.per-top {
  width: 100%;
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.lastpage,
.zhuanfa {
  width: 0.5rem;
  height: 0.4rem;
  background: url(../../static/img/lastpage.png) no-repeat top/100% 100%;
  margin-left: 0.1rem;
}
.zhuanfa {
  width: 0.4rem;
  background: url(../../static/img/zhuanfa.png) no-repeat top/100% 100%;
  margin-right: 0.2rem;
}
.big {
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.big-img img {
  margin-top: 0.05rem;
  width: 3.5rem;
  height: 5.1rem;
}
.little {
  margin-left: 0.1rem;
}
.little {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.little img,
.little-box {
  margin-top: 0.1rem;
  width: 2.7rem;
  height: 2.5rem;
}
.little-box {
  background: #007;
  color: #fff;
}
.little-box p {
  margin: 0 auto;
  width: 60%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
}
.little-box p:nth-of-type(1) {
  margin-top: 0.3rem;
  border-bottom: 0.01rem solid #fff;
}
.midd-top {
  height: 1.5rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.3rem;
  font-weight: 900;
}
.gray {
  color: gray;
}
.border {
  border-bottom: 0.01rem solid gray;
}
.midd-top h2 p {
  font-size: 0.2rem;
}
.per-midd > h1,
.per-midd > p {
  width: 90%;
  line-height: 0.5rem;
  margin: 0 auto;
  color: gray;
}
.per-midd > p {
  color: black;
}
.green {
  text-align: right;
}
.green span {
  color: green;
}
.zhankai {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.aul {
  overflow: hidden;
}
.fa {
  display: none;
}
#xiang1 {
  width: 100%;
  height: 6rem;
  position: fixed;
  bottom: 0;
  z-index: 2;
}
#xiang1 h1 {
  background: #ffe;
  width: 100%;
  height: 2rem;
  font-size: 0.25rem;
  font-weight: 900;
  line-height: 1rem;
  text-align: center;
}
.foo3 {
  width: 100%;
  height: 1rem;
}
.foo3 p {
  width: 100%;
  text-align: center;
  line-height: 1rem;
  font-size: 0.3rem;
  font-weight: 900;
}
</style>
