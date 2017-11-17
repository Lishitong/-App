<template lang="html">
  <div class="yingpage-all">
      <div class="yingpage-img">
        <img v-lazy="getImage(yingpagedata.author.avatar)" alt="">
      </div>
      <div class="yingpage-text">
       <h1>{{yingpagedata.title}}</h1>
        <div class="text-top">
          <div>
            {{yingpagedata.author.name}}
            <div class="stars" >
                <img src="../../static/img/gray.png" alt="">
                <div class="starsbox" :style="{width:yingpagedata.rating.max*0.1+'rem'}">
                 <img  src="../../static/img/huang.png" alt="" >
                </div>
            </div>
          </div>
          <h4 class="zan">
            <img src="../../static/img/zan.png" alt="" @click="zan">
            <label>{{yingpagedata.useful_count}}</label>
          </h4>
        </div>
        <p :class="{'zhankai':flag}">{{yingpagedata.content}}</p>
        <h6><span @click="zhankai">{{ kai }}</span></h6>
      </div>
  </div>
</template>

<script>
export default {
  props: ["yingpagedata"],
  data() {
    return {
      kai: "展开",
      flag: true
    };
  },
  methods: {
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
    zhankai() {
      if (this.flag) {
        this.flag = false;
        this.kai = "收起";
      } else {
        this.flag = true;
        this.kai = "展开";
      }
    }
  }
};
</script>
<style lang="css" scoped>
.yingpage-img img {
  margin-top: 1rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
.yingpage-all {
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: flex-start;
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
.yingpage-text > h1 {
  width: 90%;
  height: 1rem;
  line-height: 1rem;
  font-weight: 900;
  font-size: 0.26rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.yingpage-text > p {
  width: 94%;
  margin-bottom: 0.5rem;
  line-height: 0.7rem;
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
  line-height: 0.8rem;
  height: 0.8rem;
  text-align: right;
  color: green;
  font-weight: 900;
}
</style>
