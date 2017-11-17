<template lang="html">
  <div class="">
    <span class="star" v-for="(y,index2) in 5" :key="index2">
      <img :src="reStar(index1,index2)" alt="">
    </span>
  </div>
</template>

<script>
export default {
  props: ["index1"],
  name: "star",
  methods: {
    reStar(in1, in2) {
      if (in2 * 10 < this.sub[in1].rating.stars - 5) {
        return "../../static/star1.png";
      } else {
        return "../../static/star2.png";
      }
    }
  }
};
</script>

<style lang="css" scoped>
.star {
  float: left;
  width: 0.3rem;
  height: 0.3rem;
}
</style>
