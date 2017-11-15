<template lang="html">
 <div class="pingpage">
   <div class="pingpage-head">
    <div @click="pingback"><img src="../../static/img/lastpage.png" alt=""></div>
    <div>全部短评</div>
    <div><h1>看过</h1></div>
   </div>
   <h1>短评<span>{{msg.total}}</span>条</h1>
   <div class="pingpage-all" v-for="item of msg.comments">
       <div class="pingpage-img">
         <img :src="getImage(item.author.avatar)" alt="">
       </div>
       <div class="pingpage-text">
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
             <img src="../../static/img/zan.png" alt="" @click="zan">
             <label>{{item.useful_count}}</label>
           </h4>
         </div>
         <p>{{item.content}}</p>
       </div>
   </div>
   <div class="foo2">
       <p>(｡◕ˇ∀ˇ◕)</p >
   </div>
 </div>
</template>

<script>
let jsonp = require('jsonp')
export default {
  name: 'pingpage',
  data() {
    return { // 在数据中接收
      id: this.$route.params.id,
      msg: {},
      start:0,
      scroll:0,
      obj:[]
    }
  },
  methods: {
    pingback() {
      history.back()
    },
    zan() {
      this.$router.push({
        path:'/login'
      })
    },
    getImage(url) {
      if (url !== undefined) {
        return url.replace('https://', 'https://images.weserv.nl/?url=');
      }
    },
    getData() {
      jsonp("https://api.douban.com/v2/movie/subject/" + this.id + "/comments?apikey=0b2bdeda43b5688921839c8ecb20399b&start="+this.start+"&count=20&client=something&udid=dddddddddddddddddddddd", null, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          this.msg = data;
          // console.log('全部短评页面打印');
          // console.log(this.msg);
        }
      })
    }
  },
  created() {
    if (this.id) {
      this.getData();
    }
  },
  watch: {
    '$route'(newdata,olddata) {
      this.id = newdata.params.id;
    }
  }
}
</script>
<style lang="css">
.pingpage-head {
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
.pingpage-head div img {
  width: .5rem;
  height: .4rem;
}
.pingpage-head div h1 {
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
.pingpage>h1 {
  width: 90%;
  margin: 0 auto;
  line-height: 1rem;
}
.pingpage-img img {
  width: .5rem;
  height: .5rem;
  border-radius: 50%;
}
.pingpage-all {
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content:flex-start;
  align-items: flex-start;
}
.pingpage-text {
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
.pingpage-text>p {
  width: 94%;
  line-height: .7rem;
}
.foo2 {
  width: 100%;
  height: 2rem;
}
.foo2 p {
  width: 100%;
  text-align: center;
  line-height: 1rem;
  font-size: .3rem;
  font-weight: 900;
}
</style>
