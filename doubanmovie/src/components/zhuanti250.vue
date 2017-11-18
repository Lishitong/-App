<template lang="html">
  <div class="zhuanti250">
    <back :title="title"></back>
    <div class="bar" v-if="type==1">
      <div @click="changemain(index)" :class="nowpage==index?'active':''" v-for="(x,index) in list" :key="index">{{x}}</div>
    </div>
    <div class="bar3" v-if="type==3">
      <div class="active">
        全国
      </div>
      <div class="">
        北美
      </div>
    </div>
    <div class="main" v-if="bol">
      <ul>
        <li v-for="(x,index) in dat.rank.length" :key="index" @click="push(id[index])">
          <div class="ma-top">
            <span class="gang"></span>
            <span>{{dat.rank[index]}}</span>
            <span class="gang"></span>
          </div>
          <div class="ma-bot">
            <img v-lazy="getImage(dat.sub[index].images.small)" alt="">
            <div class="tick">
              <h2>{{dat.sub[index].title}}</h2>
              <p class="stars">
                  <span class="star" v-for="(y,index2) in 5" :key="index2">
                    <img :src="reStar(dat.sub[index].rating.stars,index2)" alt="">
                  </span>
                  <span>{{dat.sub[index].rating.average}}</span>
              </p>
              <p>导演：{{dat.sub[index].directors[0].name}}</p>
              <p>演员：<span v-for="(l,index3) in dat.sub[index].casts" :key="index3">{{index3 | actname(l.name,dat.sub[index].casts.length)}} </span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="loadpage" v-else>
      <img src="./../../static/loading.gif" alt="">
    </div>
    <goTop></goTop>
  </div>
</template>

<script>
import goTop from "./gotop";
import back from "./../components/back.vue";
export default {
  name: "zhuanti250",
  data() {
    return {
      title: "专题",
      type: 1,
      list: ["Top1-50", "51-100", "101-150", "151-200", "201-250"],
      start: [0, 50, 100, 150, 200],
      nowpage: 0,
      bol: false,
      dat: {
        rank: [],
        delta: [],
        sub: []
      },
      id: []
    };
  },
  components: {
    back,
    goTop
  },
  filters: {
    actname(index3, l, num) {
      if (index3 != num - 1) {
        return l + "/";
      } else {
        return l;
      }
    }
  },
  methods: {
    getdata(start) {
      this.JSONP(
        "https://api.douban.com/v2/movie/" +
          this.$route.params.id +
          "?apikey=0b2bdeda43b5688921839c8ecb20399b&count=50&start=" +
          start,
        null,
        (err, data) => {
          this.bol = true;
          this.title = data.title;
          // console.log(data);
          // console.log(start);
          for (let i = 0; i < data.subjects.length; i++) {
            this.dat.sub.splice(i, 1, data.subjects[i]);
            this.dat.rank.splice(i, 1, i + 1 + start);
            this.dat.delta.splice(i, 1, data.subjects.length - i);
            this.id[i] = data.subjects[i].id;
          }
        }
      );
    },
    push(item) {
      this.$router.push({
        path: "/movxiangqing/" + item
      });
    },
    getImage(url) {
      if (url !== undefined) {
        return url.replace("https://", "https://images.weserv.nl/?url=");
      }
    },
    reStar(in1, in2) {
      if (in2 * 10 < in1 - 5) {
        return "../../static/star1.png";
      } else {
        return "../../static/star2.png";
      }
    },
    changemain(e) {
      if (this.nowpage != e) {
        this.bol = false;
        this.nowpage = e;
        this.getdata(this.start[e]);
      }
    }
  },
  created() {
    if (this.$route.params.id === "top250") {
      this.type = 1;
      this.getdata(0);
    } else {
      if (this.$route.params.id == "weekly") {
        this.type = 2;
      } else if (this.$route.params.id == "us_box") {
        this.type = 3;
      }
      this.JSONP(
        "https://api.douban.com/v2/movie/" +
          this.$route.params.id +
          "?apikey=0b2bdeda43b5688921839c8ecb20399b&",
        null,
        (err, data) => {
          this.bol = true;
          this.title = data.title;
          for (let i = 0; i < data.subjects.length; i++) {
            this.dat.sub[i] = data.subjects[i].subject;
            this.dat.rank[i] = data.subjects[i].rank;
            this.dat.delta[i] = data.subjects[i].delta;
            this.id[i] = data.subjects[i].subject.id;
          }
        }
      );
    }
  }
};
</script>

<style lang="less">
.zhuanti250 {
  padding: 1rem 0;
  width: 100%;
  .bar {
    position: fixed;
    background-color: #fff;
    width: 100%;
    top: 0.8rem;
    z-index: 3;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    div {
      width: 12%;
      text-align: center;
      height: 0.6rem;
      line-height: 0.6rem;
      white-space: nowrap;
    }
    .active {
      border-bottom: 2px solid #444;
    }
  }
  .bar3 {
    display: flex;
    justify-content: center;
    margin-top: 0.6rem;
    line-height: 1rem;
    div {
      font-size: 0.4rem;
      width: 2rem;
      text-align: center;
      height: 1rem;
      border-bottom: 2px #ddd solid;
    }
    .active {
      border-bottom: 2px green solid;
    }
  }
  .ma-top {
    padding: 0.7rem 0 0.4rem;
    height: 0.5rem;
    text-align: center;
    font-size: 0.5rem;
    color: red;
    font-style: italic;
    display: flex;
    justify-content: center;
    span {
      width: 1rem;
    }
    .gang {
      height: 0.2rem;
      border-bottom: 1px solid #aaa;
    }
  }
  .ma-bot {
    margin: 0 auto;
    width: 85%;
    padding: 0.3rem;
    border: 1px solid #aaa;
    overflow: hidden;
    box-shadow: 1px 1px 5px #ccc;
    & > img {
      width: 25%;
      float: left;
    }
  }
  .loadpage {
    margin-top: 4rem;
    text-align: center;
  }
  .tick {
    float: left;
    width: 70%;
    margin-left: 5%;
    img {
      width: 0.27rem;
      height: 0.27rem;
    }
    .stars {
      width: 100%;
    }
    .star {
      width: 0.27rem;
      height: 0.27rem;
      float: left;
    }
    h2 {
      font-size: 0.3rem;
      font-weight: bold;
      margin: 0.2rem 0;
    }
    p {
      color: #666;
      font-size: 0.2rem;
      line-height: 0.26rem;
      margin: 0.1rem;
    }
  }
}
</style>
