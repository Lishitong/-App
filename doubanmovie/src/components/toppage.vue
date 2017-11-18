<template lang="html">
  <div class="top250">
    <ul>
      <li v-for="(x,index) in 4" :key="index" @click="push(data.id[index])">
        <span>{{index+1}}</span>
        <img v-lazy="data.url[index]" alt="">
        <p>{{data.title[index]}}</p>
        <p class="stars">
            <span class="star" v-for="(y,index2) in 5" :key="index2">
              <img :src="reStar(data.stars[index],index2)" alt="">
            </span>
            <span>{{data.fen[index]}}</span>
            <span>{{data.ping[index]}}评价</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    reStar(in1, in2) {
      if (in2 * 10 < in1 - 5) {
        return "../../static/star1.png";
      } else {
        return "../../static/star2.png";
      }
    },
    push(item) {
      this.$router.push({
        path: "/movxiangqing/" + item
      });
    }
  }
};
</script>

<style lang="less" scoped>
.top250 {
  width: 100%;
  font-size: 0.32rem;
  float: left;
  li {
    margin-top: 0.26rem;
    text-align: center;
    width: 100%;
    overflow: hidden;
  }
  p{
    float: left;
    width: 70%;
    height: 0.4rem;
    margin: 0.1rem 0 0 0.1rem;
    text-align: left;
  }
  span {
    float: left;
    margin: 0.1rem 0.25rem auto 0.25rem;
  }
  img {
    width: 0.85rem;
    float: left;
    height: 1.15rem;
  }
  .stars {
    margin-top: 0.2rem;
    font-size: 0.22rem;
    color: #cccccc;
    border-bottom: 1px solid #ddd;
    span {
      float: left;
      height: 100%;
      line-height: 0.3rem;
      margin: 0;
    }
    .star {
      width: 0.27rem;
      height: 0.27rem;
    }
    span:nth-of-type(6) {
      margin-left: 0.1rem;
    }
    span:nth-of-type(7) {
      margin-left: 0.2rem;
    }
    img {
      width: 0.27rem;
      height: 0.27rem;
      vertical-align: middle;
    }
  }
}
</style>
