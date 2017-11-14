<template lang="html">
 <div class="yingpage">
   <div class="yingpage-head">
    <div @click="yingback"><img src="../../static/img/lastpage.png" alt=""></div>
    <div>全部影评</div>
    <div><h1>看过</h1></div>
   </div>
   <h1>影评<span>{{msg.total}}</span>条</h1>
   <div class="yingpage-all" v-for="item of msg.reviews">
       <div class="yingpage-img">
         <img :src="getImage(item.author.avatar)" alt="">
       </div>
       <div class="yingpage-text">
        <h1>{{item.title}}</h1>
         <div class="text-top">
           <div>
             {{item.author.name}}
             <div class="stars" >
                 <img src="../../static/img/gray.png" alt="">
                 <div class="starsbox" :style="{width:item.rating.max*0.1+'rem'}">
                  <img  src="../../static/img/huang.png" alt="" >
                 </div>
             </div>
           </div>
           <h4 class="zan">
             <img src="../../static/img/zan.png" alt="">
             <label>{{item.useful_count}}</label>
           </h4>
         </div>
         <p :class="{'zhankai':flag}">{{item.content}}</p>
         <h6><span @click="zhankai">{{ kai }}</span></h6>
       </div>
   </div>
   <div class="footer">
       <p>(｡◕ˇ∀ˇ◕)翻完了，下次再来吧</p >
   </div>
 </div>
</template>

<script>
let jsonp = require('jsonp')
export default {
  name: 'yingpage',
  data() {
    return { // 在数据中接收
      id: this.$route.params.id,
      msg: {},
      kai:'展开',
      flag:true
    }
  },
  methods: {
    yingback() {
      history.back()
    },
    getImage(url) {
      if (url !== undefined) {
        return url.replace('https://', 'https://images.weserv.nl/?url=');
      }
    },
    getData() {
      jsonp("https://api.douban.com/v2/movie/subject/" + this.id + "/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=10000&client=something&udid=dddddddddddddddddddddd", null, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          this.msg = data;
          // console.log('全部影评页面打印');
          // console.log(this.msg);
        }
      })
    },
    zhankai() {
      if (this.flag) {
        this.flag = false;
        this.kai = '收起';
      }else {
        this.flag = true;
        this.kai = '展开';
      }
    }
  },
  created() {
    if (this.id) {
      this.getData();
    }
  },
  updated() {

  },
  watch: {
    '$route'(newdata,olddata) {
      this.id = newdata.params.id;
    }
  }
}
</script>
<style lang="css">
.yingpage-head {
  width: 100%;
  margin: 0 auto;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #EEEFF1;
  font-size: .3rem;
  font-weight: 900;
}
.yingpage-head div img {
  width: .5rem;
  height: .4rem;
}
.yingpage-head div h1 {
  width: .8rem;
  height: .5rem;
  line-height: .5rem;
  text-align: center;
  border: .01rem solid lightgray;
  border-radius: .04rem;
  margin-right: .2rem;
  font-size: .2rem;
  color: gray;
}
.yingpage>h1 {
  width: 90%;
  margin: 0 auto;
  line-height: 1rem;
}
.yingpage-img img {
  margin-top: 1rem;
  width: .5rem;
  height: .5rem;
  border-radius: 50%;
}
.yingpage-all {
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content:flex-start;
  align-items: flex-start;
}
.yingpage-text {
  width: 98%;
  margin-left: 2%;
}
.text-top {
  width: 94%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.zan img {
  width: .3rem;
  height: .3rem;
}
.yingpage-text>h1 {
  width: 90%;
  height: 1rem;
  line-height: 1rem;
  font-weight: 900;
  font-size: .26rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.yingpage-text>p {
  width: 94%;
  margin-bottom: .5rem;
  line-height: .7rem;
}
.zhankai {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.yingpage-text h6 {
  width: 94%;
  margin: 0 auto;
  line-height: .8rem;
  height: .8rem;
  text-align: right;
  color: green;
  font-weight: 900;
}

.footer {
  width: 100%;
  height: 2rem;
}
.footer p {
  width: 100%;
  text-align: center;
  line-height: 1rem;
  font-size: .3rem;
  font-weight: 900;
}
</style>
