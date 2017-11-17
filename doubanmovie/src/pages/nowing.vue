<template lang="html">
  <div class="nowing">
    <div class="each-movie" v-for="item of msg">
      <div class="movie-img">
        <img v-lazy="getImage(item.images.large)" alt=""  @click="push(item.id)">
      </div>
      <div class="movie-text"  @click="push(item.id)">
        <!-- 标题 -->
         <h1>{{ item.title }}</h1>
        <!-- 星级评分 -->
        <div class="score">
          <p v-if="flag">{{ item.rating.average }}</p>
          <p v-else>暂无评分</p>
          <div class="stars" >
             <img src="../../static//img/gray.png" alt="">
              <div class="starsbox" :style="{width:item.rating.average*0.1+'rem'}">
                <img  src="../../static/img/huang.png" alt="" >
              </div>
          </div>
        </div>
        <ul>
          <li class="name">
            导演：{{ item.directors[0].name }}
          </li>
          <li class="zhuyan">
            <div>主演：</div>
            <div class="zhuyan-person" v-for="obj of item.casts">
              <span>{{ obj.name }}/</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="text-right" @click="goupiao">
        <p>{{ item.collect_count }}人看过</p>
        <div class="btn">{{ item.shop }}</div>
      </div>
    </div>
    <div class="foo">
        <p>(｡◕ˇ∀ˇ◕)</p >
    </div>
    <goTop></goTop>
  </div>
</template>

<script>
import goTop from "../components/gotop";
let jsonp = require("jsonp");
export default {
  name: "Nowing",
  data() {
    return {
      msg: {},
      flag: true
    };
  },
  components: {
    goTop
  },
  methods: {
    getHero() {
      jsonp(
        "https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=somemessage&udid=dddddddddddddddddddddd",
        null,
        (err, data) => {
          if (err) {
            console.error(err);
          } else {
            this.msg = data.subjects;
            for (let i = 0; i < this.msg.length; i++) {
              if (this.msg[i].rating.average == 0) {
                this.flag = false;
                this.msg[i].rating.average = "未评";
                this.msg[i].shop = "预售";
              } else {
                this.flag = true;
                this.msg[i].shop = "购票";
                if (this.msg[i].collect_count >= 10000) {
                  this.msg[i].collect_count =
                    (this.msg[i].collect_count / 10000).toFixed(1) + "万";
                }
              }
            }
          }
        }
      );
    },
    getImage(url) {
      if (url !== undefined) {
        return url.replace("https://", "https://images.weserv.nl/?url=");
      }
    },
    push(item) {
      this.$router.push({
        path:'/movxiangqing/' + item
      })
    },
    goupiao() {
      this.$router.push({
        path:'/goupiao'
      })
    },
},
  created() {
    this.getHero();
  }
};
</script>

<style lang="css" scoped>
.each-movie {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.01rem solid #888;
}

.movie-img > img {
  width: 2.3rem;
  height: 3rem;
  margin-top: 0.4rem;
  margin-left: 0.4rem;
  margin-bottom: 0.4rem;
}
.movie-text {
  width: 60%;
  height: 3.4rem;
  margin-top: 0.2rem;
  text-align: left;
  color: gray;
  font-size: 0.25rem;
}
.movie-text > h1 {
  color: #000;
  font-size: 0.35rem;
  line-height: 0.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.score {
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.zhuyan {
  width: 50%;
}
.zhuyan div {
  width: 1rem;
  display: inline-block;
}
.zhuyan .zhuyan-person {
  width: auto;
}
.text-right {
  position: absolute;
  right: 0.3rem;
  top: 1.4rem;
  font-size: 0.25rem;
  color: #ffaeb1;
  font-weight: 900;
}
.text-right p {
  text-align: right;
  font-size: 0.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.text-right .btn {
  width: 1rem;
  height: 0.5rem;
  line-height: 0.5rem;
  border: 0.02rem solid #ffaeb1;
  border-radius: 0.04rem;
  margin-left: 0.4rem;
  text-align: center;
}
/*星星等级*/
.stars {
  height: 0.2rem;
  line-height: 0.2rem;
  width: 1rem;
  position: relative;
  display: inline-block;
}
.starsbox {
  overflow: hidden;
  position: absolute;
  height: 0.35rem;
}
.stars img {
  width: 1rem;
  position: absolute;
  height: 0.2rem;
}
.nowing .foo {
  width: 100%;
  height: 2rem;
}
.nowing .foo p {
  width: 100%;
  text-align: center;
  line-height: 1rem;
  font-size: 0.3rem;
  font-weight: 900;
}
</style>
