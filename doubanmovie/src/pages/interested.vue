<template lang="html">

  <div class="interested">
    <h5>{{ fan }}</h5>
    <h3 v-if="bol" class="load">(◕ᴗ◕✿)</h3>
    <ul v-else>
      <li v-for="(itemarr, index) in arrbox" :key="index">
        <interestedcon :message="itemarr"></interestedcon>
      </li>
    </ul>
    <p class="wait" v-if="wait" >
      <!-- O(∩_∩)O哈哈~ -->
      <img src="./../../static/loading.gif" alt="">
    </p>
    <div class="footer" v-if="footer">
      <p>(｡◕ˇ∀ˇ◕)翻完了，下次再来吧</p>
    </div>
  </div>

</template>

<script>
import interestedcon from "./interested-con";
// import loading from './../components/loading'
export default {
  data() {
    return {
      articles: {},
      msg: "最近值得看的热门电影",
      pointUrl: "../../static/point.png",
      arr: [],
      arrbox: [],
      obj: [],
      a: {},
      bol: true,
      start: 0,
      scroll: 0,
      wait: true,
      footer: false,
      fan: "你可能感兴趣的"
    };
  },
  components: {
    interestedcon
  },
  methods: {
    getHero(start) {
      this.JSONP(
        "https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&count=8&start=" +
          this.start +
          "&client=somemessage&udid=dddddddddddddddddddddd",
        null,
        (err, data) => {
          if (err) {
            // console.error(err.message);
          } else {
            // console.log(data);
            var a = data.subjects;
            // this.a=data.subjects;

            for (var i = 0; i < a.length; i++) {
              this.obj.push(a[i]);
              this.obj.sort(function() {
                return Math.random() - 0.5;
              });
            }
            var count = 0;
            for (var i = 0; i < a.length; i++) {
              count++;
              this.arr.push(this.obj[i]);
              if (count % 4 == 0) {
                this.arrbox.push(this.arr);
                this.arr = [];
              }
            }

            this.bol = false;
            // console.log(this.arrbox);
          }
        }
      );
    },

    menu() {
      this.scroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      // console.log(this.scroll);
      // console.log(document.documentElement.scrollHeight-document.documentElement.clientHeight);
      if (
        this.scroll ==
          document.documentElement.scrollHeight -
            document.documentElement.clientHeight &&
        this.start < 88
      ) {
        // console.log(this.start);
        this.start += 8;
        // console.log(this.start);
        this.getHero(this.start);
      } else if (this.start == 88) {
        this.wait = false;
        this.footer = true;
      }
    }
  },
  computed: {},
  created() {
    this.getHero(this.start);
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  },
  updated() {}
};
</script>

<style lang="css" scoped>
.interested > h5 {
  font-size: 0.3rem;
  padding: 0.3rem 0.3rem 0 0.3rem;
  color: gray;
}
.footer {
  height: 2rem;
  line-height: 1rem;
  color: gray;
  font-size: 0.25rem;
  text-align: center;
}
.wait {
  height: 2rem;
  line-height: 1rem;
  color: gray;
  font-size: 0.35rem;
  text-align: center;
}
.load {
  font-size: 0.5rem;
  text-align: center;
  margin: 1rem 0 0.5rem 0;
}
</style>
