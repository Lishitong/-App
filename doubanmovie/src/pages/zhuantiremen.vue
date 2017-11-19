<template lang="html">
  <div class="zhuantiremen">
    <back :title="'豆瓣热门'"></back>
    <div class="zh-bottom">
      <ul>
        <li v-for="(x,index) in data.length" :key="index" @click="push(data.id[index])">
          <img v-lazy="getImage(data.url[index])" alt="">
          <div class="">
            <h2>{{data.title[index]}}</h2>
            <p class="stars">
                <span class="star" v-for="(y,index2) in 5" :key="index2">
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
import back from "./../components/back.vue";
export default {
  name: "zhuantiremen",
  data() {
    return {
      // 标识符，当为滑到底部为并且标识符为false的时候才会请求数据，如果符合以上的条件，就把bol设置为true，这样就不会重复请求了，然后在请求下来数据的回调函数中把bol重新改为false，为下一次滑到底部能请求数据做准备
      bol: false,
      data: {
        // start 代表了每次请求从第几个请求开始
        start: 0,
        url: [],
        title: [],
        stars: [],
        fen: [],
        dao: [],
        act: [],
        length: 0,
        id: []
      }
    };
  },
  components: {
    back
  },
  methods: {
    reStar(in1, in2) {
      if (in2 * 10 < in1 - 5) {
        return "../../static/star1.png";
      } else {
        return "../../static/star2.png";
      }
    },
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
    // 这个函数时用来请求数据的函数，参数start是上边data里的start，在created里边调用了一次，之后每次滑到底部都会触发一次
    getdata(start) {
      this.JSONP(
        "https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=" + start + "&count=5&client=somemessage&udid=dddddddddddddddddddddd",
        null,(err, data) => {
          // 把bol改为false
          this.bol = false;
          this.data.length += data.subjects.length;
          // 让循环变量等于start，这样才能在原有的数据后边拼接数据
          let i = this.data.start;
          // console.log(this.data.id);
          // 一次请求5个数据，所以i应该小于start加5
          for (; i < this.data.start + 5; i++) {
            // data.total是请求下来数据里的一个属性，代表了这个接口里数据的总长度，当i小于data.total时代表有这个数据，以下是一系列的数据解析操作
            if (i < data.total) {
              this.data.id[i] = data.subjects[i - this.data.start].id;
              this.data.url[i] =
                data.subjects[i - this.data.start].images.small;
              this.data.title[i] = data.subjects[i - this.data.start].title;
              this.data.stars[i] =
                data.subjects[i - this.data.start].rating.stars;
              this.data.fen[i] =
                data.subjects[i - this.data.start].rating.average;
              this.data.dao[i] =
                data.subjects[i - this.data.start].directors[0].name;
              this.data.act[i] = "";
              for (
                let j = 0;
                j < data.subjects[i - this.data.start].casts.length;
                j++
              ) {
                this.data.act[i] +=
                  data.subjects[i - this.data.start].casts[j].name;
                if (j < data.subjects[i - this.data.start].casts.length - 1) {
                  this.data.act[i] += "/";
                }
              }
            } else {
              // 当i小于data.total时，就把bol改为true，即不能加载数据了
              this.bol = true;
            }
          }
        }
      );
    }
  },
  created() {
    // 手机浏览器在下滑页面时有时候会隐藏网址栏，导致可视区域变化，通过监听window的resize事件重新获取当前的浏览器高度
    let winHeight = window.innerHeight;
    window.addEventListener("resize", function(event) {
      winHeight = window.innerHeight;
    });
    // 调用了请求数据的函数，传入了start，这个时候start为0，即从第0个开始加载数据
    this.getdata(this.data.start);
    // 这里监听的是touchmove事件，即滑到底部时手指在屏幕上滑动触发
    // 和scroll事件是差不多的
    window.addEventListener(
      "touchmove",
      () => {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop || 0;
          // documentElement在电脑上可以实现功能，但是在手机上不能
          // body在手机上可以实现功能，但是在电脑上不能
          // bol是标识符，为false时才符合请求条件
        if (
          scrollTop + winHeight == document.documentElement.offsetHeight &&
          this.bol == false
        ) {
          this.bol = true;
          this.data.start += 5;
          this.getdata(this.data.start);
        }
      },
      true
    );
  }
};
</script>

<style lang="less" scoped>
.zhuantiremen {
  padding: 0.8rem 0;
  .star {
    float: left;
    width: 0.27rem;
    height: 0.27rem;
  }
  .zh-bottom {
    h2 {
      font-size: 0.35rem;
      margin-top: 0.2rem;
      overflow: hidden;
      height: 0.7rem;
      line-height: 0.7rem;
    }
    p {
      font-size: 0.25rem;
      width: 4.3rem;
      margin-top: 0.2rem;
    }
    li {
      padding: 0.3rem;
      overflow: hidden;
      border-bottom: 1px solid #ccc;
      & > img {
        float: left;
        width: 2rem;
        height: 3rem;
      }
      div {
        float: left;
        margin-left: 0.2rem;
        width: 4.3rem;
      }
    }
    img {
      width: 0.25rem;
      height: 0.25rem;
    }
  }
}
.aa {
  height: 2rem;
  border-top: 1px solid #ccc;
  background-color: #fff;
  text-align: center;
}
</style>
