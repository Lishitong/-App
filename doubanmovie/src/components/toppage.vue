<template lang="html">
  <div class="top250">
    <ul>
      <li v-for="(x,index) in 4" @click="push(data.id[index])">
        <span>{{index+1}}</span>
        <img v-lazy="data.url[index]" alt="">
        <p>{{data.title[index]}}</p>
        <p class="stars">
            <span class="star" v-for="(y,index2) in 5">
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
  props:['data'],
  methods:{
    reStar(in1,in2){
      if (in2*10<in1-5) {
        return "../../static/star1.png"
      }else {
        return "../../static/star2.png"
      }
    },
    push(item) {
      this.$router.push({
        path:'/movxiangqing/' + item
      })
    }
  }
}
</script>

<style lang="less" scoped>
.top250{
  width: 100%;
  font-size: .32rem;
  float: left;
  li{
    margin-top:.26rem;
    text-align: center;
    width: 100%;
    overflow:hidden;
  }
  p{
    float: left;
    width: 70%;
    height: .4rem;
    margin: .1rem 0 0 .1rem;
    text-align:left;
  }
  span{
    float: left;
    margin:.1rem .25rem auto .25rem;
  }
  img{
    width: .85rem;
    float: left;
    height: 1.15rem;
  }
  .stars{
    margin-top:.2rem;
    font-size: .22rem;
    color:#cccccc;
    border-bottom: 1px solid #ddd;
    span{
      float: left;
      height: 100%;
      line-height:.3rem;
      margin:0;
    }
    .star{
      width: .27rem;
      height: .27rem;
    }
    span:nth-of-type(6){
      margin-left:.1rem;
    }
    span:nth-of-type(7){
      margin-left:.2rem;
    }
    img{
      width: .27rem;
      height: .27rem;
      vertical-align: middle;

    }
  }
}
</style>
