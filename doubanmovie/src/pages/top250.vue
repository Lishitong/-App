<template lang="html">
  <div id="top250">
    <loading></loading>
    <h2>{{data1.title}}</h2>
    <div id="box">
      <div class="box">
        <div class="top250">
          <ul>
            <li v-for="(x,index) in 4">
              <span>{{index+1}}</span>
              <img :src="url1[index]" alt="">
              <p></p>
            </li>
          </ul>
        </div>
        <div class="top250">
          <ul>
            <li v-for="(x,index) in 4">
              <span>{{index+1}}</span>
              <img :src="url2[index]" alt="">
            </li>
          </ul>
        </div>
        <div class="top250">
          <ul>
            <li v-for="(x,index) in 4">
              <span>{{index+1}}</span>
              <img :src="url3[index]" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loading from './../components/loading.vue'
export default {
  name:'top250',
  data(){
    return {
      data1 : {},
      data2 : {},
      data3 : {},
      arr1: [],
      arr2: [],
      arr3: [],
      url1:[],
      url2:[],
      url3:[],
      title1:[],
      title2:[],
      title3:[],
    }
  },
  methods:{
    getImage(url){
      if(url !== undefined){
          return url.replace('https://','https://images.weserv.nl/?url=');
      }
    },
  },
  components:{
    loading
  },
  created(){
    this.JSONP('https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b',null,(err,data) => {
      this.data1 = data;
      this.arr1 = this.data1.subjects;
      for (let x in this.arr1) {
          this.url1[x] = this.getImage(this.arr1[x].images.small)
        }
    });
    this.JSONP('https://api.douban.com/v2/movie/weekly?apikey=0b2bdeda43b5688921839c8ecb20399b',null,(err,data) => {
      this.data2 = data;
      this.arr2 = this.data2.subjects;
      console.log(this.arr2);
      for (let x in this.arr2) {
          this.url2[x] = this.getImage(this.arr2[x].subject.images.small)
        }
    });
    this.JSONP('https://api.douban.com/v2/movie/us_box?apikey=0b2bdeda43b5688921839c8ecb20399b',null,(err,data) => {
      this.data3 = data;
      this.arr3 = this.data3.subjects;
      console.log(this.arr3);
      for (let x in this.arr3) {
          this.url3[x] = this.getImage(this.arr3[x].subject.images.small)
        }
    });
  },
}
</script>

<style lang="less">
  #top250{
    h2{
      font-size:.43rem;
      text-align:left;
    }
    width: 7.2rem;
  }
  #box{
    width: 7.2rem;
    overflow-x:auto;
  }
  .box{
    width: 18rem;
  }
  .top250{
    width: 6rem;
    height: 6rem;
    font-size: .32rem;
    float: left;
    li{
      margin-top:.26rem;
      text-align: center;
      width: 100%;
      overflow:hidden;
      span{
        float: left;
        margin:.1rem .35rem auto .45rem;
      }
      p{
        float: left;
        margin: .05rem 0 0 .3rem;
      }
    }
    img{
      width: .85rem;
      float: left;
      height: 1.15rem;
    }
  }
</style>
