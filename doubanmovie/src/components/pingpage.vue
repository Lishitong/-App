<template lang="html">
 <div class="pingpage">
   <div class="pingpage-head">
    <div @click="pingback"><img src="../../static/img/lastpage.png" alt=""></div>
    <div>热门短评</div>
    <div><h1>看过</h1></div>
   </div>
   <h1>短评<span>{{num}}</span>条</h1>
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
       <p>(｡◕ˇ∀ˇ◕)</p>
   </div>
   <goTop></goTop>
 </div>
</template>

<script>
import goTop from "./gotop";
let jsonp = require("jsonp");
export default {
  name: "pingpage",
  data() {
    return {
      // 在数据中接收
      id: this.$route.params.id,
      msg: {},
      num: 0
    };
  },
  components: {
    goTop
  },
  methods: {
    pingback() {
      history.back();
    },
    zan() {
      this.$router.push({
        path: "/login"
      });
    },
    getImage(url) {
      if (url !== undefined) {
        return url.replace("https://", "https://images.weserv.nl/?url=");
      }
    },
    getData() {
      jsonp(
        "https://api.douban.com/v2/movie/subject/" +
          this.id +
          "/comments?apikey=0b2bdeda43b5688921839c8ecb20399b&start=0&count=10000&client=something&udid=dddddddddddddddddddddd",
        null,
        (err, data) => {
          if (err) {
            console.error(err);
          } else {
            this.msg = data;
            this.num = data.comments.length;
          }
        }
      );
    }
  },
  created() {
    if (this.id) {
      this.getData();
    }
  },
  watch: {
    $route(newdata, olddata) {
      this.id = newdata.params.id;
    }
  }
};
</script>
<style lang="css">
.pingpage-head {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eeeff1;
  font-size: 0.3rem;
  font-weight: 900;
}
.pingpage-head div img {
  width: 0.5rem;
  height: 0.4rem;
}
.pingpage-head div h1 {
  width: 0.8rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  border: 0.01rem solid lightgray;
  border-radius: 0.04rem;
  margin-right: 0.2rem;
  font-size: 0.2rem;
  color: gray;
}
.pingpage > h1 {
  width: 90%;
  height: 1rem;
  margin: 0 auto;
  margin-top: 1rem;
  line-height: 1rem;
}
.pingpage-img img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
.pingpage-all {
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: flex-start;
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
  height: 0.2rem;
  line-height: 0.2rem;
  width: 1rem;
  position: relative;
  display: inline-block;
}
.starsbox {
  overflow: hidden;
  position: absolute;
  height: 0.35rem;
}
.stars img {
  width: 1rem;
  position: absolute;
  height: 0.2rem;
}
.zan img {
  width: 0.3rem;
  height: 0.3rem;
}
.pingpage-text > p {
  width: 94%;
  line-height: 0.7rem;
}
.foo2 {
  width: 100%;
  height: 1rem;
}
.foo2 p {
  width: 100%;
  text-align: center;
  line-height: 1rem;
  font-size: 0.3rem;
  font-weight: 900;
}
</style>
