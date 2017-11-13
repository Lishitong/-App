<template lang="html">
  <div class="nowing">
    <div class="each-movie" v-for="item of msg">
      <div class="movie-img">
        <img :src="getImage(item.images.large)" alt=""  @click="push(item.id)">
      </div>
      <div class="movie-text"  @click="push(item.id)">
        <!-- 标题 -->
         <h1>{{ item.title }}</h1>
        <!-- 星级评分 -->
        <div class="score">
          <p>{{ item.rating.average }}</p>
          <div class="starbox">
              <div class="stars-gray"></div>
            <div class="stars"></div>
          </div>
        </div>
        <ul>
          <li class="name">
            导演：{{ item.directors[0].name }}
          </li>
          <li class="zhuyan">
            <div>主演：</div>
            <div class="zhuyan-person" v-for="obj of item.casts">
              <span>{{ obj.name }}/</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="text-right">
        <p>{{ item.collect_count }}人看过</p>
        <div class="btn">{{ item.shop }}</div>
      </div>
    </div>
  </div>
</template>

<script>
let jsonp = require('jsonp')
export default {
  name: 'Nowing',
  data() {
    return {
      msg: {}
    }
  },
  methods: {
    getHero() {
      jsonp("https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=somemessage&udid=dddddddddddddddddddddd", null, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          this.msg = data.subjects;
          for (let i = 0;i <this.msg.length;i ++) {
            if (this.msg[i].rating.average == 0) {
              this.msg[i].rating.average = "尚未上映"
              this.msg[i].shop = "预售"
            }else {
              this.msg[i].shop = "购票"
              if (this.msg[i].collect_count >= 10000) {
                this.msg[i].collect_count =(this.msg[i].collect_count / 10000).toFixed(1) +'万'
              }
            }
          }
        }
      })
    },
    getImage(url) {
      if (url !== undefined) {
        return url.replace('https://', 'https://images.weserv.nl/?url=');
      }
    },
    createImg(el, score) {
      for (var i = 0; i < 5; i++) {
        var p = document.createElement('p');
        p.style.position = "absolute";
        p.style.left = i * 0.3 + 'rem';
        p.style.width = '0.3rem';
        p.style.height = '0.3rem';
        p.style.background = 'url(../../static/img/star2.png) no-repeat top/cover';
        el.appendChild(p);
      }
      el.style.width = score / 2 * 0.3 + 'rem';
    },
    push(item) {
      this.$router.push({
        path:'/movxiangqing' + item
      })
    },
  gray () {
    var stars = document.querySelectorAll('.stars');
    var starsG = document.querySelectorAll('.stars-gray');
    for (var i = 0; i < stars.length; i++) {
      this.createImg(stars[i], this.msg[i].rating.average);
      if (!isNaN(this.msg[i].rating.average)) {
        for (var j = 0;j < 5;j ++) {
          var p = document.createElement('p');
          p.style.display = 'inline-block';
          p.style.width = '0.3rem';
          p.style.height = '0.3rem';
          p.style.background = 'url(../../static/img/star1.png) no-repeat top/cover';
          starsG[i].appendChild(p);
        }
      }
    }
  }
},
  created() {
    this.getHero();
  },
  updated() {
    this.gray();
  }
}
</script>

<style lang="css" scoped>
.each-movie {
  position: relative;
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: .01rem solid #888;
}

.movie-img>img {
  width: 2.3rem;
  height: 3rem;
  margin-top: .4rem;
  margin-left: .4rem;
  margin-bottom: .4rem;
}
.movie-text {
  width: 60%;
  height: 3.4rem;
  margin-top: .2rem;
  text-align: left;
  color: gray;
  font-size: .25rem;
}
.movie-text>h1 {
  color: #000;
  font-size: .35rem;
  line-height: .5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.score{
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.zhuyan {
  width: 50%;
}
.zhuyan div {
  width: 1rem;
  display: inline-block;
}
.zhuyan .zhuyan-person {
  width: auto;
}
.text-right {
  position: absolute;
  right: .3rem;
  top: 1.4rem;
  font-size: .25rem;
  color: #ffaeb1;
  font-weight: 900;
}
.text-right p {
  text-align: right;
  font-size: .2rem;
  height: .4rem;
  line-height: .4rem;
}
.text-right .btn {
  width: 1rem;
  height: .5rem;
  line-height: .5rem;
  border: 0.02rem solid #ffaeb1;
  border-radius: .04rem;
  margin-left: .4rem;
  text-align: center;
}
/*星星等级*/
.starbox{
  position: relative;
}
.score .starbox .stars {
  overflow: hidden;
  height: .3rem;
  position: relative;
  z-index: -1;
}
.score .starbox .stars-gray{
  width: 1.5rem;
  height: .3rem;
  z-index: -2;
  position: absolute;
  left: 0;
}
</style>
