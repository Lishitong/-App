<template lang="html">
  <div class="wantlook">
    <!-- <ul>
      <li>
        <img v-lazy="https://images.weserv.nl/?url=img3.doubanio.com/view/photo/s_ratio_poster/public/p2504027804.jpg" alt="">
        <div class="">
          <h2>正义联盟</h2>
          <p class="stars">
              <span class="star" v-for="(y,index2) in 5">
                <img :src="reStar(data.stars[index],index2)" alt="">
              </span>
              <span>{{data.fen[index]}}</span>
          </p>
          <p>导演：{{data.dao[index]}}</p>
          <p>演员：{{data.act[index]}}</p>
        </div>
        <span>2017-11-11</span>
      </li>
    </ul> -->
    <ul>
      <li>
        <img src="https://images.weserv.nl/?url=img3.doubanio.com/view/photo/s_ratio_poster/public/p2504027804.jpg" alt="">
        <div class="">
          <h2>正义联盟</h2>
          <p class="stars">
              <span class="star" v-for="(y,index2) in 5">
                <img  alt="">
              </span>
              <span>8.5</span>
          </p>
          <p>导演：wangyu</p>
          <p>演员：lishitong</p>
        </div>
        <span class="timespan">2017-11-11</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'wantlook',
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
}
</script>

<style lang="less">
.wantlook{
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
      top: 1.4rem;
    }
}
</style>
