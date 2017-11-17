<template lang="html">
    <div class="xq" :class="{'au':au}">
        <div class="xq-box">
          <div class="xq-top">
            <h1 class="lastpage" @click="back"></h1>
            <div class="fire" :class="{'firexian':fireT}">
              <img src="../../static/img/fire.png" alt="">
              <span><label>{{ msg.reviews_count }}</label>人正在热议 ></span>
            </div>
            <div class="baomihua">
              <img src="../../static/img/baomihua.png" alt="">电影
            </div>
            <h1 class="zhuanfa" @click="zhuanfa"></h1>
          </div>
          <img v-lazy="getImage(images.medium)" alt="">
        </div>
        <div id="xq-text">
          <div class="xq-text">
            <h1>{{ msg.title }}</h1>
            <p><span>{{ msg.year }}/</span><span>{{ countries[0] }}/</span><span v-for="item of msg.genres">{{ item }}/</span></p>
            <p>原名：{{ msg.original_title }}</p>
            <p>上映时间：{{pubdates[0]}}</p>
            <p>片长：{{durations}}</p>
          </div>
          <div class="stars-zong">
            <p>豆瓣评分</p>
              <h1>{{ rating.average }}</h1>
              <div class="stars" >
                 <img src="../../static/img/gray.png" alt="">
                  <div class="starsbox" :style="{width:rating.average*0.1+'rem'}">
                      <img src="../../static/img/huang.png" alt="" >
                    </div>
                  </div>
            <p v-if="flag">暂无评分</p>
            <h4 v-if="flag1">{{msg.collect_count}}人</h4>
          </div>
        </div>
        <div class="xiangkan">
          <h1>想看</h1>
          <h2>看过<img src="../../static/img/s.png"/><img src="../../static/img/s.png"/><img src="../../static/img/s.png"/><img src="../../static/img/s.png"/><img src="../../static/img/s.png"/></h2>
        </div>
        <div class="xuanzuo">
          <h1><img src="../../static/img/movepiao.png" alt="">选组购票</h1>
          <h2>￥{{rand(2,4)}}{{rand(0,9)}}起></h2>
        </div>
        <div class="jianjie">
         <h6>剧情简介</h6>
         <div class="kai">
           <p :class="{'zhankai':flag2}">{{ msg.summary }}</p>
           <span @click="zhankai">{{ kai }}</span>
         </div>
        </div>
        <div class="yingren">
          <h1>影人</h1>
          <div class="yingimg">
             <div class="yingbig">
               <div class="yinbox" v-for="item of directors" @click="pushperson(item.id)">
                 <img  v-lazy="getImage(item.avatars.large)" alt="">
                 <p>{{item.name}}</p>
                 <p>导演</p>
               </div>
               <div class="yinbox"  v-for="item of casts" @click="pushperson(item.id)">
                 <img v-lazy="getImage(item.avatars.large)" alt="">
                 <p>{{item.name}}</p>
                 <p>英文名：{{item.name_en}}</p>
               </div>
             </div>
          </div>
        </div>
        <div class="juzhao">
           <h1>预告片/剧照</h1>
           <div class="juzhaoimg">
             <div class="juzhaobox">
               <div class="jz" v-for="item of msg.photos">
                 <img v-lazy="getImage(item.image)" alt="">
               </div>
             </div>
           </div>
        </div>
        <div class="pinglun" @click="getData">
          <router-link :to="'/movxiangqing/ping/'+id">评论</router-link>
          <router-link :to="'/movxiangqing/lun/'+id">讨论区</router-link>
        </div>
        <router-view></router-view>
        <div class="yingping">
          <h1><span>影评</span><label>写影评</label></h1>
          <div class="reviews" v-for="item of reviews">
            <h1>{{item.title}}</h1>
            <h2>{{item.author.name}}</h2>
            <p>{{item.summary}}</p>
          </div>
          <h2  @click="ying(id)">全部影评{{msg.reviews_count}}条</h2>
        </div>
        <div class="foo1">
            <p>(｡◕ˇ∀ˇ◕)翻完了，下次再来吧</p >
        </div>
        <goTop></goTop>
        <div id="xiang" :class="{'fa':fa}">
          <fen></fen>
          <h1  @click="auto">取消</h1>
        </div>
    </div>
</template>

<script>
import fen from './fen'
import goTop from './gotop'
let jsonp = require('jsonp')
export default {
  name: 'movxiangqing',
  components:{
    goTop,fen
  },
  data() {
    return { // 在数据中接收
      id: this.$route.params.id,
      msg: {},
      images: {},
      countries: [],
      pubdates: [],
      rating:[],
      flag:false,
      flag1:true,
      flag2:true,
      kai:'展开',
      directors:{},
      casts:{},
      reviews:{},
      fireT:false,
      au:false,
      fa: true,
      durations:''
    }
  },
  methods: {
    getImage(url) {
      if (url !== undefined) {
        return url.replace('http://', 'https://images.weserv.nl/?url=');
      }
    },
    pushperson(item) {
      this.$router.push({
        path:'/per/' + item
      })
    },
    ying(item) {
      this.$router.push({
        path:'/ying/' + item
      })
    },
    back() {
      history.back()
    },
    zhuanfa() {
      if(this.fa) {
        this.fa = false;
        this.au = true;
      }else {
        this.fa = true;
        this.au = false;
      }
    },
    auto() {
      this.zhuanfa()
    },
    getData() {
      jsonp("http://api.douban.com/v2/movie/subject/" + this.id + "?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd", null, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(data);
          this.msg = data;
          this.images = data.images;
          this.countries = data.countries;
          this.pubdates = data.pubdates;
          this.rating = data.rating;
          this.directors = data.directors;
          this.casts = data.casts;
          this.reviews = data.popular_reviews;
          this.durations = data.durations[0];
          if (this.rating.average == 0) {
            this.rating.average = '';
            this.flag = true,
            this.flag1 = false;
          }
          // 正在热议
          // this.msg.reviews_count = 0
          if (this.msg.reviews_count == 0) {
            this.fireT = true;
          }else {
            this.fireT = false;
          }
          console.log('movexiangqingye打印');
          console.log(this.msg);
          // 传值
          databus.$emit('alldata',this.msg);
        }
      })
    },
    rand(m, n) {
      return parseInt(Math.random() * (m - n) + n);
    },
    colors() {
      let color = "0123456789abcdef";
      return '#' + color[this.rand(0, 15)] + color[this.rand(0, 15)] + color[this.rand(0, 15)]
    },
    zhankai() {
      if (this.flag2) {
        this.flag2 = false;
        this.kai = '收起';
      }else {
        this.flag2 = true;
        this.kai = '展开';
      }
    }
  },
  created() {
    this.getData();
  },
  updated() {
    let xq = document.querySelector('.xq-box');
    let t = document.querySelector('.xq-top');
    let c = this.colors();
    if (xq) {
      xq.style.background = c;
      t.style.background = c;
    }
  }
}
</script>
<style lang="css">
.xq-box{
  width: 100%;
  height: 7rem;
  font-size: .2rem;
}
.xq-box>img {
  margin-top: 1rem;
  margin-left: 25%;
  width: 50%;
  height: 5rem;
}
.xq-top{
  position: fixed !important;
  top: 0 !important;
  z-index: 6 !important;
  width: 100%;
  height: .8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.baomihua {
  font-size: .3rem;
  font-weight: 900;
  color: #fff;
}
.baomihua img {
  width: .4rem;
  height: .4rem;
  margin-top: -.1rem;
  margin-right: .1rem;
}
.fire {
  width: 40%;
  height: .5rem;
  line-height: .5rem;
  background: #fff;
  border-radius: .3rem;
  font-size: .2rem;
  text-align: center;
  transition: all 1s;
  animation: xiayi 1s;
  position: absolute;
  top: .16rem;
  left: 30%;
}
@keyframes xiayi {
  from {
    top: -10rem;
  }
  50% {
    top: -.5rem;
  }
  to {
    top: .16rem;
  }
}
.fire img {
  width: .3rem;
  height: .3rem;
  margin-top: -.1rem;
}
.lastpage,.zhuanfa {
  width: .5rem;
  height: .4rem;
  background: url(../../static/img/lastpage.png) no-repeat top/100% 100%;
  margin-left: .1rem;
}
.zhuanfa {
  width: .4rem;
  background: url(../../static/img/zhuanfa.png) no-repeat top/100% 100%;
  margin-right: .2rem;
}
.xq-text {
  width: 50%;
  margin-top: .3rem;
  margin-left: .2rem;
}
#xq-text {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.xq-text h1 {
  font-size: .35rem;
  font-weight: 900;
  color: #000;
  line-height: .5rem;
}
.xq-text p{
  line-height: .4rem;
}
/*星星等级*/
.stars-zong{
  width: 25%;
  height: 2rem;
  margin-right: .3rem;
  box-shadow: 0rem .05rem .05rem .05rem lightgray;
  color: gray;
}
.stars-zong h4 {
  width: 100%;
  text-align: center;
  font-size: .15rem;
}
.stars-zong p ,.stars-zong h1 {
  width: 100%;
  text-align: center;
  line-height: .5rem;
}
.stars-zong h1 {
  font-size: .3rem;
  color: #000;
  font-weight: 900;
}
.stars {
  height: .2rem;
  line-height: .2rem;
  width:1rem;
  position: relative;
  display: inline-block;
}
.stars-zong .stars {
  margin-left: .4rem;
}
.starsbox{
  overflow: hidden;
  position:absolute;
  height: .35rem;
}
.stars img{
  width: 1rem;
  position:absolute;
  height: .2rem;
}
.xiangkan {
  width: 100%;
  font-size: .2rem;
  text-align: center;
  margin-top: .2rem;
}
.xiangkan h1,.xiangkan h2 {
  height: .7rem;
  line-height: .7rem;
  text-align: center;
  color: #FFD741;
  font-size: .25rem;
  font-weight: 900;
  display: inline-block;
  border: .02rem solid #FFD741;
  border-radius: .1rem;
}
.xiangkan h1{
  width: 30%;
  margin-right: .2rem;
}
.xiangkan h2{
  width: 55%;
}
.xiangkan h2 img {
  width: .3rem;
  height: .3rem;
  vertical-align: text-bottom;
  margin-left: .03rem;
}
.xuanzuo {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-bottom: .02rem solid lightgray;
}
.xuanzuo h1 {
  line-height: 1rem;
  text-indent: .2rem;
  font-size: .3rem;
}
.xuanzuo h2 {
  line-height: 1rem;
  font-size: .25rem;
  color: #D35855;
}
.xuanzuo h1 img {
  width: .4rem;
  height: .4rem;
  vertical-align: text-bottom;
  margin-right: .1rem;
}
.jianjie{
  width: 100%;
}
.jianjie p ,.jianjie h6 {
  width: 90%;
  margin: 0 auto;
  line-height: .45rem;
  color: #000;
}
.jianjie h6 {
  color: gray;
  line-height: .7rem;
}
.jianjie span {
  line-height: .7rem;
  font-size: .25rem;
  font-weight: 600;
  color: green;
  float: right;
  margin-right: 5%;
}
.zhankai {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.yinimg ,.juzhao{
  width: 100%;
}
.yingren h1 ,.juzhao h1{
  width: 90%;
  margin:  0 auto;
  text-indent: .3rem;
  margin-top: 1rem;
  line-height: .7rem;
}
.juzhao h1 {
  margin-top: .1rem;
}

.yingbig ,.juzhaobox{
  overflow: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.yingbig img ,.juzhaobox img {
  width: 2rem;
  height: 2.7rem;
}
.yinbox {
  width: 2.2rem;
  margin-left: .04rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.yinbox p {
  font-size: .18rem;
  width: 1.7rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.juzhaobox {
  margin-left: .2rem;
}
.jz {
  margin-right: .2rem;
}
.juzhaobox img {
  width: 4.5rem;
  height: 3.5rem;
}
.pinglun {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background:#EEEFF1;
}
.pinglun a {
  display: inline-block;
  width: 49%;
  line-height: 1rem;
  text-align: center;
  color: #949597;
}
.router-link-active {
  border-bottom: 0.02rem solid #123;
  color: #123 !important;
}
.yingping>h1 {
  width: 90%;
  height: .9rem;
  line-height: .9rem;
  color: #000;
  margin: 0 auto;
  font-size: .3rem;
}
.yingping>h1 label {
  float: right;
  margin-top: .2rem;
  font-size: .15rem;
  text-align: center;
  color: green;
  width: .8rem;
  height: .4rem;
  line-height: .4rem;
  border: .01rem solid green;
  border-radius: .04rem;
}
.reviews {
  width: 90%;
  margin: 0 auto;
  color: gray;
}
.reviews h1,.reviews h2,.reviews p {
  width: 100%;
  text-align: left;
  line-height: .6rem;
}
.reviews>p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.reviews h1 {
  color: #000;
  font-size: .3rem;
  font-weight: 900;
}
.reviews h2 {
  color: #000;
}
.yingping>h2 {
  width: 100%;
  text-align: center;
  color: green;
  font-size: .25rem;
  font-weight: 900;
  line-height: 1rem;
  border-bottom: .01rem solid lightgray;
}
.foo1 {
  width: 100%;
  height: 2rem;
}
.foo1 p {
  width: 100%;
  text-align: center;
  line-height: 1rem;
  font-size: .3rem;
  font-weight: 900;
}
.firexian {
  display: none;
}
.au {
  overflow: hidden;
  height: 10rem;
}
.fa {
  display: none;
}
#xiang {
  width: 100%;
  height: 6rem;
  position: fixed;
  bottom: 0;
  z-index: 33;
}
#xiang h1 {
  background: #ffe;
  width: 100%;
  height: 2rem;
  font-size: .25rem;
  font-weight: 900;
  line-height: 1rem;
  text-align: center;
}

</style>
