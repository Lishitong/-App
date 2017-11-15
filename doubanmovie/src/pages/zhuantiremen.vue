<template lang="html">
  <div class="zhuantiremen">
    <back :title="'豆瓣热门'"></back>
    <div class="zh-bottom">
      <ul>
        <li v-for="(x,index) in data.length" @click="push(data.id[index])">
          <img v-lazy="getImage(data.url[index])" alt="">
          <div class="">
            <h2>{{data.title[index]}}</h2>
            <p class="stars">
                <span class="star" v-for="(y,index2) in 5">
                  <img :src="reStar(data.stars[index],index2)" alt="">
                </span>
                <span>{{data.fen[index]}}</span>
            </p>
            <p>导演：{{data.dao[index]}}</p>
            <p>演员：{{data.act[index]}}</p>
          </div>
        </li>
      </ul>
      <h2 class="aa" v-if="bol">没有数据了</h2>
    </div>
  </div>
</template>

<script>
import back from './../components/back.vue'
export default {
  name:'zhuantiremen',
  data(){
    return {
      bol:false,
      data:{
        start:0,
        url:[],
        title:[],
        stars:[],
        fen:[],
        dao:[],
        act:[],
        length:0,
        id:[]
      },
    }
  },
  components:{
    back
  },
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
    getdata(start){
      this.JSONP('https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start='+start+'&count=5&client=somemessage&udid=dddddddddddddddddddddd',null,(err,data) => {
        this.bol = false;
        this.data.length += data.subjects.length
        let i = this.data.start
        console.log(this.data.id);
        for (; i < this.data.start + 5; i++) {
          if (i<data.total) {
            this.data.id[i]=data.subjects[i-this.data.start].id;
            this.data.url[i] = data.subjects[i-this.data.start].images.small
            this.data.title[i] = data.subjects[i-this.data.start].title
            this.data.stars[i] = data.subjects[i-this.data.start].rating.stars
            this.data.fen[i] = data.subjects[i-this.data.start].rating.average
            this.data.dao[i] = data.subjects[i-this.data.start].directors[0].name
            this.data.act[i] = ''
            for (let j = 0; j < data.subjects[i-this.data.start].casts.length; j++) {
              this.data.act[i] += data.subjects[i-this.data.start].casts[j].name
              if (j < data.subjects[i-this.data.start].casts.length-1) {
                this.data.act[i] += '/'
              }
            }
          }else {
            this.bol = true
          }
        }
      });
    }
  },
  created(){
    // 手机浏览器在下滑页面时有时候会隐藏网址栏，导致可视区域变化，通过监听window的resize事件重新获取当前的浏览器高度
    let winHeight = window.innerHeight;
    window.addEventListener('resize', function(event){
        winHeight = window.innerHeight;
    });
    this.getdata(this.data.start);

    window.addEventListener('touchmove',()=>{
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollTop + winHeight ==  document.documentElement.offsetHeight && this.bol == false) {
        this.bol = true
        this.data.start += 5
        this.getdata(this.data.start)
      }
    },true)
  }
}
</script>

<style lang="less" scoped>
  .zhuantiremen{
    .star{
      float: left;
      width: .27rem;
      height: .27rem;
    }
    .zh-bottom{
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
  }
  .aa{
    height: 2rem;
    padding: 2rem 0;
    border-top: 1px solid #ccc;
    background-color: #fff;
    text-align: center;
  }
</style>
