<template lang="html">
  <div id="top250">
    <loading v-if="bol"></loading>
    <div v-else>
      <h2>{{title}}</h2>
      <div id="box">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide>
            <toppage :data="dat1"></toppage>
          </swiper-slide>
          <swiper-slide>
            <toppage :data="dat2"></toppage>
          </swiper-slide>
          <swiper-slide>
            <toppage :data="dat3"></toppage>
          </swiper-slide>
        </swiper>
      </div>
      <p>全部{{dat1.bu}}部</p>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import loading from './../components/loading.vue'
import toppage from './../components/toppage.vue'
require('swiper/dist/css/swiper.css')
export default {
  name:'top250',
  data(){
    return {
      swiperOption: {
          notNextTick: true,
          autoplay: false,
          watchSlidesProgress:true,
        },
      bol : true,
      title:'',
      data1 : {},
      data2 : {},
      data3 : {},
      dat1:{
        url:[],
        title:[],
        stars:[],
        fen:[],
        ping:[],
        bu:'',
        tit:''
      },
      dat2:{
        url:[],
        title:[],
        stars:[],
        fen:[],
        ping:[],
        bu:'',
        tit:''
      },
      dat3:{
        url:[],
        title:[],
        stars:[],
        fen:[],
        ping:[],
        bu:'',
        tit:''
      },
    }
  },
  components:{
    loading,
    toppage,
    swiper,
    swiperSlide
  },
  methods:{
    getImage(url){
      if(url !== undefined){
          return url.replace('https://','https://images.weserv.nl/?url=');
      }
    }
  },
  created(){
    this.JSONP('https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b',null,(err,data) => {
      this.bol = false;
      this.data1 = data;
      this.title = this.data1.title;
      this.dat1.tit = this.data1.title;
      this.dat1.bu = this.data1.total;
      for (let x = 0;x < 4;x++) {
          this.dat1.url[x] = this.getImage(this.data1.subjects[x].images.small)
          this.dat1.title[x] = this.data1.subjects[x].title
          this.dat1.stars[x] = this.data1.subjects[x].rating.stars
          this.dat1.fen[x] = this.data1.subjects[x].rating.average
          this.dat1.ping[x] = this.data1.subjects[x].collect_count
        }
    });
    this.JSONP('https://api.douban.com/v2/movie/weekly?apikey=0b2bdeda43b5688921839c8ecb20399b',null,(err,data) => {
      this.data2 = data;
      this.dat2.tit = this.data2.title;
      this.dat2.bu = this.data2.total;
      for (let x = 0;x < 4;x++) {
          this.dat2.url[x] = this.getImage(this.data2.subjects[x].subject.images.small)
          this.dat2.title[x] = this.data2.subjects[x].subject.title
          this.dat2.stars[x] = this.data2.subjects[x].subject.rating.stars
          this.dat2.fen[x] = this.data2.subjects[x].subject.rating.average
          this.dat2.ping[x] = this.data2.subjects[x].subject.collect_count
        }
    });
    this.JSONP('https://api.douban.com/v2/movie/us_box?apikey=0b2bdeda43b5688921839c8ecb20399b',null,(err,data) => {
      this.data3 = data;
      this.dat3.tit = this.data3.title;
      this.dat3.bu = this.data3.total;
      for (let x = 0;x < 4;x++) {
          this.dat3.url[x] = this.getImage(this.data3.subjects[x].subject.images.small)
          this.dat3.title[x] = this.data3.subjects[x].subject.title
          this.dat3.stars[x] = this.data3.subjects[x].subject.rating.stars
          this.dat3.fen[x] = this.data3.subjects[x].subject.rating.average
          this.dat3.ping[x] = this.data3.subjects[x].subject.collect_count
        }
    });
  },
}
</script>

<style lang="less">
  #top250{
    padding-bottom:1rem;
    &>div>p{
      text-align: center;
      height: .6rem;
      line-height: .6rem;
      color:#bbb;
      font-size: .25rem;
    }
    h2{
      font-size:.36rem;
      float: left;
      margin:0 0 .2rem .2rem;
    }
    width: 100%;
  }
  #box{
    width: 100%;
    overflow-x:auto;
  }
</style>
