<template lang="html">
    <div class="">
      <div class="input-top">
        <div class="input">
          <img src="../../static/Search-search.png" alt="" >
          <input type="text" name="val" value="" placeholder="搜索电影 / 电视剧 / 影人" ref="input1"  @keyup="search()"
          @keyup.enter="enter()">
          <img v-if="flagimg" class="del" src="../../static/del.png" alt="" @click="del()">
        </div>
        <span @click="back()">取消</span>

      </div>
      <div class="hot" v-if="flagHot">
        <div class="history">
          <div class="nav" v-if="flaghistory">
            <p >搜索历史</p>
            <p>清除</p>
          </div>
          <div class="">

          </div>

        </div>
        <div class="hot">
          <p>热门搜索</p>
          <ul>
            <hotsearch></hotsearch>
          </ul>

        </div>

      </div>
      <div class="ul" v-if="ying">
        <p v-if="flag">影视</p>
        <ul>
          <li v-for="(item, i) in obj" :key="i">
            <img :src="getImage(item.images.medium)" alt="">
            <div class="divright">
              <h1>{{item.title}}</h1>
              <span>{{item.rating.average}}分/</span>
              <span>{{item.year}}</span>
            </div>


          </li>
        </ul>


      </div>
      <div class="" v-if="sear" >
        <interestedLiCon v-for='(aa, bb) in obj' :key="bb" :item="aa">

        </interestedLiCon>
      </div>



    </div>
</template>

<script>
import hotsearch from '../components/hotSearch'
import interestedLiCon from './interestedLiCon'
export default {
  data() {
    return {
      obj: [],
      flag: false,
      flagimg: false,
      flagHot: true,
      flaghistory: true,
      ying:false,
      sear:false
    }
  },
  components: {
    hotsearch,
    interestedLiCon
  },
  methods: {
    se(){
      this.JSONP('https://api.douban.com/v2/movie/search?q='+this.$refs.input1.value, null, (err, data) => {      
        if (err) {      
          console.error(err.message);      
        } else {
          this.flag = true;
          console.log(data.subjects);
          this.obj = data.subjects;

        }
      })
    },
    search() {
      this.flagimg = true;
      this.se();
      this.flagHot=false;
      this.ying=true;
      this.sear=false
    },
    enter(){
      this.ying=false;
      this.flagimg = true;
      this.se();
      this.sear=true
    },
    getImage(url) {
      if (url !== undefined) {
        return url.replace('https://', 'https://images.weserv.nl/?url=');
      }      
    },
    del() {
      this.$refs.input1.value = ''
      this.flagHot=true;
      this.sear=false
    },
    back() {
      history.back()
    }
  },
  updated(){
    console.log(this.$refs.input1.value);
    if (this.$refs.input1.value == false) {
      console.log('hh');
      this.flagHot=true;
      this.flagimg=false;
    }
  }




}
</script>


<style lang="less" scoped>
ul {
    list-style: none;
}
.ul li {
    height: 1rem;
    padding: 0.2rem;
}
.ul li img {
    width: 1.5rem;
    height: 1.3rem;
}
.divright {
    width: 75%;
    height: 1rem;
    float: right;
    margin-top: 0.3rem;
    display: inline-block;
}
.ul p {
    height: 0.1rem;
    font-size: 0.3rem;
    padding: 0.2rem;
    color: #c7c7c7;
}
.ul li h1 {
    font-size: 0.3rem;
    font-weight: 600;
}
.input-top {
    height: 0.6rem;
    background: #42BB54;
    padding: 0.2rem 0.3rem;
}
.input-top .input {
    width: 85%;
    height: 0.6rem;
    display: inline-block;
    padding: 0 0 0 0.2rem;
    border-radius: 0.1rem;
    background: white;
}
.input-top > span {
    color: white;
    font-size: 0.33rem;
}
.input-top input {
    width: 80%;
    height: 0.6rem;
    color: black;
    font-size: 0.3rem;
    font-weight: 100;
}
.del {}
::-webkit-input-placeholder {
    color: #C7C7C7;
}
:-moz-placeholder {
    color: #C7C7C7;
}
::-moz-placeholder {
    color: #C7C7C7;
}
:-ms-input-placeholder {
    color: #C7C7C7;
}
.nav {
    display: flex;
    justify-content:space-between;
}
.nav p{
  padding:.2rem;
  font-size:.24rem;
}
.nav p:nth-of-type(1){
  color:gray;
}
.hot>p{
  padding:.2rem;
  font-size:.27rem;
  color:gray;
}


</style>
