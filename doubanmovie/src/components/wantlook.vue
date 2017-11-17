<template lang="html">
  <div class="wangtlook">
    <ul>
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
    </ul>
  </div>
</template>

<script>
export default {
  name:'wangtlook',
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
.wangtlook{
    h2{
      font-size: .35rem;
      margin-top: .2rem;
      overflow: hidden;
      height: .7rem;
      line-height: .7rem;
    }
    p{
      font-size: .25rem;
      width: 4.3rem;
      margin-top: .2rem;
    }
    li{
      padding: .3rem;
      overflow: hidden;
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
}
</style>
