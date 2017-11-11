<template lang="html">
  <div id="top250">
    <loading v-if="bol"></loading>
    <div v-else>
      <h2>{{data1.title}}</h2>
      <div id="box">
        <div @touchstart="toustart($event)" @touchmove="toumove($event)" @touchend="touend()" :style="{marginLeft:boxleft[a]}" class="box">
          <toppage :data="dat1"></toppage>
          <toppage :data="dat2"></toppage>
          <toppage :data="dat3"></toppage>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loading from './../components/loading.vue'
import toppage from './../components/toppage.vue'
export default {
  name:'top250',
  data(){
    return {
      bol : true,
      fingerstart:'',
      fingerend:'',
      boxleft:['0','-6.5rem','-13rem'],
      a:0,
      data1 : {},
      data2 : {},
      data3 : {},
      dat1:{
        url:[],
        title:[],
        stars:[],
        fen:[],
        ping:[]
      },
      dat2:{
        url:[],
        title:[],
        stars:[],
        fen:[],
        ping:[]
      },
      dat3:{
        url:[],
        title:[],
        stars:[],
        fen:[],
        ping:[]
      },
    }
  },
  methods:{
    getImage(url){
      if(url !== undefined){
          return url.replace('https://','https://images.weserv.nl/?url=');
      }
    },
    toustart(e){
      this.fingerstart = e.touches[0].clientX;
    },
    toumove(e){
      this.fingerend = e.touches[0].clientX;
    },
    touend(){
      let xx = this.fingerend-this.fingerstart
      if (xx>0) {
        if (xx>100) {
          console.log('asd');
          if (this.a == 2) {
            this.a = 1
          }else if (this.a == 2) {
            this.a = 0
          }else {
            this.a = 0
          }
        }else {
          this.a = this.a
        }
      }
    }
  },
  components:{
    loading,
    toppage
  },
  created(){
    this.JSONP('https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b',null,(err,data) => {
      this.bol = false;
      this.data1 = data;
      for (let x in this.data1.subjects) {
          this.dat1.url[x] = this.getImage(this.data1.subjects[x].images.small)
          this.dat1.title[x] = this.data1.subjects[x].title
          this.dat1.stars[x] = this.data1.subjects[x].rating.stars
          this.dat1.fen[x] = this.data1.subjects[x].rating.average
          this.dat1.ping[x] = this.data1.subjects[x].collect_count
        }
    });
    this.JSONP('https://api.douban.com/v2/movie/weekly?apikey=0b2bdeda43b5688921839c8ecb20399b',null,(err,data) => {
      this.data2 = data;
      for (let x in this.data2.subjects) {
          this.dat2.url[x] = this.getImage(this.data2.subjects[x].subject.images.small)
          this.dat2.title[x] = this.data2.subjects[x].subject.title
          this.dat2.stars[x] = this.data2.subjects[x].subject.rating.stars
          this.dat2.fen[x] = this.data2.subjects[x].subject.rating.average
          this.dat2.ping[x] = this.data2.subjects[x].subject.collect_count
        }
    });
    this.JSONP('https://api.douban.com/v2/movie/us_box?apikey=0b2bdeda43b5688921839c8ecb20399b',null,(err,data) => {
      this.data3 = data;
      for (let x in this.data3.subjects) {
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
  .box{
    width:19.5rem;
  }
</style>
