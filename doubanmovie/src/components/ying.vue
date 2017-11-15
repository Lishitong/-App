<template lang="html">
 <div class="yingpage">
   <div class="yingpage-head">
    <div @click="yingback"><img src="../../static/img/lastpage.png" alt=""></div>
    <div>全部影评</div>
    <div><h1>看过</h1></div>
   </div>
   <h1>影评<span>{{msg.total}}</span>条</h1>
   <div class="yingpagedata" v-for="item of msg.reviews">
     <yingpagedata :yingpagedata="item"></yingpagedata>
   </div>
   <div class="foo3">
       <p>(｡◕ˇ∀ˇ◕)</p >
   </div>
   <goTop></goTop>
 </div>
</template>

<script>
import goTop from './gotop'
import yingpagedata from './yingpagedata'
let jsonp = require('jsonp')
export default {
  name: 'yingpage',
  data() {
    return { // 在数据中接收
      id: this.$route.params.id,
      msg: {},
      start:0
    }
  },
  components:{
    yingpagedata,goTop
  },
  methods: {
    yingback() {
      history.back()
    },
    getData() {
      jsonp("https://api.douban.com/v2/movie/subject/" + this.id + "/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b&start="+this.start+"&count=20&client=something&udid=dddddddddddddddddddddd", null, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          this.msg = data;
          // console.log('全部影评页面打印');
          // console.log(this.msg);
          console.log(data.reviews);
        }
      })
    },
    menu() {
    this.scroll =document.body.scrollTop|| document.documentElement.scrollTop;
    // console.log(this.scroll);
    // console.log(document.documentElement.scrollHeight-document.documentElement.clientHeight);
    if (this.scroll ==(document.documentElement.scrollHeight-document.documentElement.clientHeight)&&this.start<88) {
      // console.log(this.start);
      // this.start+=8;
      // console.log(this.start);
      this.getHero(this.start);
    }else if (this.start==88) {
      this.wait=false;
      this.footer=true;
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
  /*position: fixed;
  top: 0;
  z-index: 1;*/
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
  height: 1rem;
  margin: 0 auto;
  line-height: 1rem;
}

.foo3 {
  width: 100%;
  height: 2rem;
}
.foo3 p {
  width: 100%;
  text-align: center;
  line-height: 1rem;
  font-size: .3rem;
  font-weight: 900;
}
</style>
