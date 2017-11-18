<template lang="html">
  <div class="loading">
    <div class="nav">
      <p class="navleft">
        <span @click.stop="all()" :class="{active:flagClass1}">全部</span>
        <span @click.stop="one()" :class="{active:flagClass2}">{{nowmonth}}月</span>
        <span @click.stop="two()" :class="{active:flagClass3}">{{nowmonth1}}月</span>
        <span @click.stop="three()" :class="{active:flagClass4}">{{nowmonth2}}月</span>
      </p>
      <p class="navright">
        <span @click="time()" :class="{active:flagtime}">时间</span>
        <span @click="hot()" :class="{active:flaghot}">热度</span>
      </p>

    </div>

    <div class="load" v-if="flagLi">
      <!-- (◕ᴗ◕✿) -->
      <img src="./../../static/loading.gif" alt="">
    </div>
    <loadingli :objdate="obj" v-else></loadingli>
    <goTop></goTop>

  </div>
</template>

<script>
import goTop from "../components/gotop";
import loadingli from "./loading-li";
export default {
  data() {
    return {
      obj: {},
      obj1: {},
      obj2: {},
      obj3: {},
      obj4: {},
      objStr: [],
      objDate: [],
      flagLi: true,
      flagAver: true,
      director: [],
      flagClass1:false,
      flagClass2:false,
      flagClass3:false,
      flagClass4:false,
      flaghot:false,
      flagtime:true,
      nowmonth:'',
      nowmonth1:'',
      nowmonth2:''
    }
  },
  components: {
    loadingli,
    goTop
  },
  methods: {
    now(){
      var now=new Date();
      var month=now.getMonth()+1;
      // console.log(month);
      this.nowmonth=month;
      this.nowmonth1=month+1;
      this.nowmonth2=this.nowmonth1+1;
      if (month==11) {
        this.nowmonth2=1
      }
      if (month==12) {
        this.nowmonth1=1
        this.nowmonth2=2
      }
    },
    getHero() {
      this.JSONP(
        "https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=somemessage&udid=dddddddddddddddddddddd",
        null,
        (err, data) => {
          if (err) {
            console.error(err.message);
          } else {
            this.obj = data.subjects;
            this.objDate =
             data.subjects.slice(0);
            this.flagLi = false;
          }
        }
      );
    },
    compareArr(){
      // if (this.flaghot==true) {
      // console.log('22');
      function compare(property){
          return function(a,b){
            var value1 = a[property];
            var value2 = b[property];
            return value2 - value1;
          }
      }
      this.obj=this.obj.sort(compare('collect_count'))
    },
    all(){
      this.flagClass1=true;
      this.flagClass2=false;
      this.flagClass3=false;
      this.flagClass4=false;
      this.obj='';
      setTimeout(()=>{
        // console.log('33');
        this.flagLi=false;
        this.obj=this.objDate.slice(0);
        if (this.flaghot==true) {
          // console.log('aa');
          this.compareArr()
        }
      },600);
      this.flagLi=true;
    },
    one() {
      this.flagClass1 = false;
      this.flagClass2 = true;
      this.flagClass3 = false;
      this.flagClass4 = false;
      let one = this.objDate.slice(0);
      this.objStr = [];
      this.obj = "";
      setTimeout(() => {
        this.flagLi = false;
        for (let i = 0; i < one.length; i++) {
          // console.log(one[i].pubdates[0]);
          let pubdates=one[i].pubdates[0];
          if (pubdates.substring(5,7)=='11') {
            this.objStr.push(one[i]);
          }
        }
        this.obj=this.objStr;
        // console.log(this.obj);
        if (this.flaghot==true) {
          this.compareArr()
        }
      },600);
      this.flagLi=true;


    },
    two() {
      this.flagClass1 = false;
      this.flagClass2 = false;
      this.flagClass3 = true;
      this.flagClass4 = false;
      let one = this.objDate.slice(0);
      this.objStr = [];
      this.obj = "";
      setTimeout(() => {
        this.flagLi = false;
        for (let i = 0; i < one.length; i++) {
          // console.log(one[i].pubdates[0]);
          let pubdates = one[i].pubdates[0];
          if (pubdates.substring(5, 7) == "12") {
            this.objStr.push(one[i]);
            // console.log('>');
            // console.log(this.flaghot);
          }
        }
        this.obj=this.objStr;
        if (this.flaghot==true) {
          // console.log('??');
          this.compareArr()
        }
      },600);
      this.flagLi=true;
    },
    three() {
      this.flagClass1 = false;
      this.flagClass2 = false;
      this.flagClass3 = false;
      this.flagClass4 = true;
      let one = this.objDate.slice(0);
      this.objStr = [];
      this.obj = "";
      setTimeout(() => {
        this.flagLi = false;
        for (let i = 0; i < one.length; i++) {
          let pubdates = one[i].pubdates[0];
          if (pubdates.substring(5, 7) == "01") {
            this.objStr.push(one[i]);
          }
        }
        this.obj=this.objStr;
        if (this.flaghot==true) {
          this.compareArr()
        }
      },600);
      this.flagLi=true;


    },
    time(){
      this.flagtime=true;
      this.flaghot=false;
    },
    hot(){
      this.flagtime=false;
      this.flaghot=true;
      this.compareArr()
    }
  },
  created() {
    this.getHero();
    this.now()

  }
}
</script>

<style lang="css" scoped>
.loading {
  margin-top: 0.02rem;
}
.active {
  color: black;
}
.nav {
  line-height: 0.6rem;
  border: 0.001rem lightgray solid;
  border-left: none;
  border-right: none;
  color: gray;
  background: white;
  padding: 0 0.4rem;
  font-size: 0.2rem;
}
.nav p {
  display: inline-block;
}
.navleft {
  width: 70%;
  height: 0.6rem;
  line-height: 0.6rem;
}
.navright {
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: right;
  border-left: 0.005rem lightgray solid;
}
.navleft span:nth-of-type(1) {
  margin: 0;
}
.nav span {
  display: inline-block;
  margin-left: 0.2rem;
}

.load {
  font-size: 0.5rem;
  text-align: center;
  margin: 1rem 0 0rem 0;
  color: gray;
}
</style>
