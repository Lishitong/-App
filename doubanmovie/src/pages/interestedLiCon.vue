<template lang="html">
  <div class="interestedLiCon" @click="push(item.id)">
    <div  v-if="flagLi" class="li">
      <div class="delete" v-show="flag" @click.stop="deleteFn()" >
        不感兴趣
      </div>
      <div class="div">
        <div class="img-box">
          <img v-lazy="getImage(item.images.large)" alt="">
        </div>

        <div class="interested-info">
          <div class="point">
            <img  @click.stop="show()" id="point" v-lazy="pointUrl" alt="" >
          </div>
          <h1>{{item.title}}</h1>

          <div class="director">
            <p>
              <div class="stars" >
                <img src="../../static/stargray5.png" alt="">
                <div class="starsbox" :style="{width:item.rating.average*0.2+'rem'}">

                  <img  src="../../static/star5.png" alt="" >
                </div>
              </div>
              <span>{{item.rating.average}}</span>
            </p>
            <p>
              <span>导演：</span>
              <span>{{item.directors.name}}</span>
            </p>
            <p>
              <span>演员：</span>
              <span v-for="items of item.casts ">{{items.name}}/</span>
            </p>

          </div>
          <h6>{{msg}}</h6>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      articles: {},
      msg: "最近值得看的热门电影",
      pointUrl: "../../static/point.png",
      arr: [],
      arrbox: [],
      flag: false,
      flagLi: true,
      name:''
    }
  },
  created() {},
  methods: {
    getImage(url) {
      if (url !== undefined) {
        return url.replace("https://", "https://images.weserv.nl/?url=");
      }
    },
    push(item) {
      this.$router.push({
        path: "/movxiangqing/" + item
      });
    },
    show() {
      var that;
      if (this.flag == false) {
        this.flag = true;
        // console.log(this.flag);
        that = this;
        document.body.onclick = function() {
          if (that.flag == true) {
            that.flag = false;
            // console.log(that.flag);
          }
          return false;
        };
        // console.log(this.flag);
      }
    },
    deleteFn() {
      this.flagLi = false;
    }
  },
  updated() {}
};
</script>

<style lang="css" scoped>
.delete {
  width: 1.5rem;
  height: 0.5rem;
  position: absolute;
  right: 0.45rem;
  top: 0.4rem;
  text-align: center;
  line-height: 0.5rem;
  border: 0.01rem solid lightgray;
  background: white;
}
ul {
  list-style: none;
}
.li {
  position: relative;
}
.div {
  height: 4.3rem;
  padding: 0.4rem 0 0 0.3rem;
  border-bottom: 1px solid #e9e9e9;
}
.img-box {
  width: 2.8rem;
  height: 3.9rem;
  display: inline-block;
  box-shadow: 0.1px -0.1px 5 gray;
}

.img-box img {
  width: 2.8rem;
  height: 3.9rem;
}
.interested-info {
  width: 55%;
  display: inline-block;
  float: right;
}
.interested-info h1 {
  font-size: 0.4rem;
  margin: 0.2rem 0 0.3rem 0;
}
.interested-info .director {
  margin-right: 0.3rem;
  padding:0 0rem 0.2rem 0;
  font-size: 0.2rem;
  color: gray;

  border-bottom: 1px solid #f2f2f2;
}
.interested-info span {
  font-weight: 10;
}
.interested-info h6 {
  padding-top: 0.3rem;
  font-size: 0.25rem;
  color: gray;
  font-weight: 100;
}
#point {
  float: right;
  width: 0.4rem;
  height: 0.55rem;
  margin-right: 0.15rem;
}
.director .stars {
  height: 0.3rem;
  width: 2rem;
  position: relative;
  display: inline-block;
}
.starsbox {
  overflow: hidden;
  position: absolute;
  height: 0.35rem;
}
.stars img {
  position: absolute;
  height: 0.35rem;
  width: 2rem;
}
</style>
