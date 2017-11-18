<template lang="html">
  <div class="wantlook">
    <ul>
      <li v-for="(x,index) in list">
        <img v-lazy="getImage(x.imgUrl)" alt="">
        <div class="">
          <h2>{{x.title}}</h2>
          <p class="stars">
              <span class="star" v-for="(y,index2) in 5">
                <img :src="reStar(x.stars,index2)" alt="">
              </span>
              <span>{{x.average}}</span>
          </p>
          <p>导演：{{x.directors[0]}}</p>
          <p>演员：<span v-for="(l,index3) in x.casts" :key="index3">{{index3 | actname(l,x.casts.length)}} </span>
          </p>
        </div>
        <span class="timespan">{{x.date}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'wantlook',
  props:['list'],
  methods:{
    reStar(in1,in2){
      if (in2*10<in1-5) {
        return "../../static/star1.png"
      }else {
        return "../../static/star2.png"
      }
    },
    getImage(url){
      if(url !== undefined){
          return url.replace('https://','https://images.weserv.nl/?url=');
      }
    },
    push(item) {
      this.$router.push({
        path:'/movxiangqing/' + item
      })
    },
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
}
</script>

<style lang="less" scoped>
.wantlook{
    padding-bottom: 1rem;
    h2{
      font-size: .35rem;
      margin-top: .2rem;
      overflow: hidden;
      height: .5rem;
      line-height: .5rem;
    }
    p{
      font-size: .25rem;
      width: 4.3rem;
      height: .4rem;
      line-height: .4rem;
      margin-top: .2rem;
    }
    li{
      position: relative;
      padding: .3rem;
      overflow: hidden;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
      &>img{
        float: left;
        width: 2rem;
        height: 3rem;
      }
      div{
        float: left;
        margin-left: .2rem;
        width: 4.3rem;
      }
    }
    img{
      width: .25rem;
      height: .25rem;
    }
    .timespan{
      position: absolute;
      right:0.3rem;
      top: .4rem;
      font-size: .2rem;
    }
}
</style>
