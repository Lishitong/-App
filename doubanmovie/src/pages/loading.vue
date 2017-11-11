<template lang="html">
  <div class="loading">
    <div class="nav">
      <p class="navleft">
        <span>全部</span>
        <span>11月</span>
        <span>12月</span>
        <span>1月</span>
      </p>
      <p class="navright">
        <span>时间</span>
        <span>热度</span>
      </p>

    </div>
    <div v-for="(item,del) in obj"    class="li">
      <div class="div" v-if="flagLi">
        <div class="img-box">
          <img :src="getImage(item.images.large)" alt="">
        </div>

        <div class="interested-info">
          <h1>{{item.title}}</h1>

          <div class="director">
            <p>
              <div class="stars">

              </div>
              <span v-if="flagAver">{{item.rating.average}}</span>
            </p>
            <p>
              <span v-for="itemArr of item.directors ">导演：{{ itemArr.name }}</span>
            </p>
            <p>
              <span>演员：</span>
              <span v-for="items of item.casts ">{{items.name}}/</span>
            </p>

          </div>
        </div>
        <div class="text-right">
          <p>{{ item.collect_count }}人看过</p>
          <div class="btn">想看</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      obj:{},
      flagLi:true,
      flagAver:true,
      director:[]
    }
  },
  methods:{
    getHero() {
          this.JSONP('https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=somemessage&udid=dddddddddddddddddddddd', null, (err, data)=>{      
            if (err) {      
              console.error(err.message);      
            } else {
              this.obj=data.subjects;
              console.log(this.obj);
              var a=this.obj;
              // for (var i = 0; i < a.length; i++) {
              //   if (a[i].rating.average==0) {
              //     this.flagAver=false;
              //   }
              //
              // }
                    
            }      
          })
      },
      getImage(url) {
        // console.log(url);
        // 把现在的图片连接传进来，返回一个不受限制的路径
        if (url !== undefined) {
          return url.replace('https://', 'https://images.weserv.nl/?url=');
        }      
      }
  },
  created(){
    this.getHero()
  }
}
</script>

<style lang="css" scoped>
.nav{
  position:relative;
  height:0.6rem;
  line-height:0.6rem;
  border:0.001rem lightgray solid;
  border-left: none;
  border-right: none;
  color:gray;
  background:white;
  padding:0 0.4rem;
  font-size: 0.2rem;

}
.nav p{
  display: inline-block;
}
.navleft{
  width:75%;
}
.navright{
  width:20%;
  height:0.4rem;
  line-height:0.4rem;
  text-align: right;
  border-left:0.005rem lightgray solid;
}
.nav span{
  display: inline-block;
  margin-left:0.2rem;
}
.nav span:nth-of-type(1){
  margin:0;
}
.li{
  /*position: relative;*/
}
.div{
  height:3.8rem;
  padding:0.3rem 0 0rem 0.3rem;
  border-bottom: 1px solid #e9e9e9;
}
.img-box{
  width:2.3rem;
  height:3.3rem;
  display: inline-block;
  float: left;
}

.img-box img{
  width:2.3rem;
  height:3.3rem;
}
.interested-info{
  width:38%;
  display: inline-block;
  margin-left:0.4rem;
}
.interested-info h1{
  font-size: 0.4rem;
  margin:0rem 0 0.2rem 0;
  line-height: 0.45rem;
}
.interested-info .director{
  font-size: 0.2rem;
  color:gray;
}
.interested-info span{
  font-weight:10;
}
.interested-info h6{
  padding-top: 0.3rem;
  font-size: 0.25rem;
  color:gray;
  font-weight: 100;
}
.text-right {
  font-size: .25rem;
  color: #F6B529;
  font-weight: 900;
  text-align: center;
  float: right;
  margin: 0.4rem 0.3rem 0 0;
}
.text-right p {
  font-size: .2rem;
  height: .4rem;
  line-height: .4rem;
}
.text-right .btn {
  width: 1rem;
  height: .5rem;
  line-height: .5rem;
  border: 0.02rem solid #F6B529;
  border-radius: .04rem;
  text-align: center;
}



</style>
