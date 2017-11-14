<template lang="html">
    <div class="">
      <div class="input-top">
        <div class="input">
          <img src="../../static/Search-search.png" alt="" >
          <input type="text" name="val" value="" placeholder="搜索电影 / 电视剧 / 影人" ref="input1" @keyup="search()">
          <img v-if="flagimg" class="del" src="../../static/del.png" alt="" @click="del()">
        </div>
        <span @click="back()">取消</span>

      </div>
      <div class="ul">
        <p v-if="flag">影视</p>
        <ul>
          <li v-for="item in obj">
            <img :src="getImage(item.images.medium)" alt="">
            <div class="divright">
              <h1>{{item.title}}</h1>
              <span>{{item.rating.average}}分/</span>
              <span>{{item.year}}</span>
            </div>


          </li>
        </ul>


      </div>

    </div>
</template>

<script>
  export default {
    data(){
      return {
        obj:[],
        flag:false,
        flagimg:false
      }
    },
    methods:{
      search(val){
        this.flagimg=true;
        this.JSONP('https://api.douban.com/v2/movie/search?q='+this.$refs.input1.value+'?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=somemessage&udid=dddddddddddddddddddddd', null, (err, data)=>{      
          if (err) {      
            console.error(err.message);      
          } else {
            this.flag=true;
            console.log(data.subjects);
            this.obj=data.subjects;

          }
      })
    },
    getImage(url) {
      if (url !== undefined) {
        return url.replace('https://', 'https://images.weserv.nl/?url=');
      }      
    },
    del(){
      this.$refs.input1.value=''
    },
    back(){
      history.back()
    }
  }




}
</script>


<style lang="less" scoped>
ul{
  list-style:none;
}
.ul li{
  height:1rem;
  padding:0.2rem;
}
.ul li img{
  width:1.5rem;
  height:1.3rem;
}
.divright{
  width:75%;
  height:1rem;
  float:right;
  margin-top:.3rem;
  display:inline-block;
}
.ul p{
  height:0.1rem;
  font-size:0.3rem;
  padding:.2rem;
  color:#c7c7c7;
}
.ul li h1{
  font-size:.3rem;
  font-weight:600;
}
.input-top{
  height:.6rem;
  background:#42BB54;
  padding:0.2rem .3rem;
}
.input-top .input{
  width:85%;
  height:.6rem;
  display:inline-block;
  padding:0 0 0 .2rem;
  border-radius:0.1rem;
  background:white;
}
.input-top>span{
  color:white;
  font-size:.33rem;
}
.input-top input{
  width:80%;
  height:.6rem;
  color:black;
  font-size:.3rem;
  font-weight:100;
}
.del{
}
::-webkit-input-placeholder {
    color:#C7C7C7;
}
:-moz-placeholder {
    color:#C7C7C7;
}
::-moz-placeholder {
    color:#C7C7C7;
}
:-ms-input-placeholder {
    color:#C7C7C7;
}
</style>
