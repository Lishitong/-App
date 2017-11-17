<template lang="html">
  <div class="hotsearch">
    <li v-for="(item,del) in obj.subjects" :key="del" @click="push(item.id)">
      <h2>
        <span>{{del+1}}</span>
        {{item.title}}
      </h2>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {}
    };
  },
  methods: {
    getHero(start) {
      this.JSONP(
        "https://api.douban.com/v2/movie/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&count=8&start=0&client=somemessage&udid=dddddddddddddddddddddd",
        null,
        (err, data) => {
          if (err) {
            console.error(err.message);
          } else {
            this.obj = data;
          }
        }
      );
    },
    push(item) {
      this.$router.push({
        path: "/movxiangqing/" + item
      });
    }
  },
  created() {
    this.getHero();
  }
};
</script>

<style lang="css" scoped>
li {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.26rem;
  padding: 0.2rem;
  border-bottom: 0.0003rem solid #c7c7c7;
}
li span {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  margin: 0 0.2rem;
  text-align: center;
}
li:nth-of-type(1) span {
  background: url(../../static/first.png) no-repeat;
  background-size: cover;
  color: transparent;
}
li:nth-of-type(2) span {
  background: url(../../static/second.png) no-repeat;
  background-size: cover;
  color: transparent;
}
li:nth-of-type(3) span {
  background: url(../../static/third.png) no-repeat;
  background-size: cover;
  color: transparent;
}
</style>
