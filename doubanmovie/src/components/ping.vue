<template lang="html">
  <div class="ping">
     <h1><span>短评</span><label>写短评</label></h1>
     <div class="perping" v-for="item of popular">
      <h2>
        <h3>
          <img :src="getImage(item.author.avatar)" alt="">
          <span>{{item.author.name}}</span>
          <div class="stars" >
              <img src="../../static/img/gray.png" alt="">
              <div class="starsbox" :style="{width:rating.average*0.1+'rem'}">
                  <img  src="../../static/img/huang.png" alt="" >
              </div>
          </div>
        </h3>
        <h4>
          <img src="../../static/img/zan.png" alt="">
          <label>{{item.useful_count}}</label>
        </h4>
     </h2>
     <p>{{item.content}}</p>
     </div>
     <div class="allping"  @click="pushping(id)">
       全部短评<span>{{counts}}</span>条
     </div>
  </div>
</template>

<script>
let jsonp = require('jsonp')
export default {
  name: 'ping',
  data() {
    return { // 在数据中接收
      id: this.$route.params.id,
      msg: {},
      popular:{},
      counts:'',
      rating:{}
    }
  },
  methods: {
    getImage(url) {
      if (url !== undefined) {
        return url.replace('https://', 'https://images.weserv.nl/?url=');
      }
    },
    getData() {
      jsonp("http://api.douban.com/v2/movie/subject/" + this.id + "?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=something&udid=dddddddddddddddddddddd", null, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          this.msg = data;
          this.popular = data.popular_comments;
          this.counts = data.comments_count;
          this.rating = data.rating;
          console.log(this.popular);
        }
      })
    },
    pushping(item) {
      this.$router.push({
        path:'/pingpage/' + item
      })
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
<style lang="css" scoped>
.ping h1 {
  width: 90%;
  height: .9rem;
  line-height: .9rem;
  color: #000;
  margin: 0 auto;
  font-size: .3rem;
}
.ping h1 label {
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
.ping h2 {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: .8rem;
}
.ping h2 h3>img ,.ping h2 h4 img {
  width: .5rem;
  height: .5rem;
  border-radius: 50%;
  vertical-align: middle;
}
.ping h2 h4 img {
  width: .35rem;
  height: .35rem;
}
.ping p {
  width: 90%;
  line-height: .5rem;
  margin: 0 auto;
}
.allping {
  width: 100%;
  text-align: center;
  color: green;
  font-size: .25rem;
  font-weight: 900;
  line-height: 1rem;
  border-bottom: .01rem solid lightgray;
}
.perping h2 h3 span {
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
</style>
