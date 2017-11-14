<template lang="html">
  <div class="bg">
    <div class="bgTop">
      <img src="../../static/howSeeback.png" @click="shezhiback()" alt="">
      <span>如何在线观看电视/电影?</span>
      <img src="../../static/share.png" @click="s()" alt="">
    </div>
    <p>如何在线观看电视/电影?</p>
    <p>豆瓣是电影评论的分享平台，
不支持APP内在
线播放，但是对于部分可以在线观看的电
影，会附有第三方网站播放链接，在你想看
的电影条目中，如果有提示「观看全片」就
是可以点击跳转观看的。

</p>
<p>
  小提示: 部分电影会标注收费，我们提供的
  都是第三方视频网站的播放链接，是否收费
  由视频提供方决定。

</p>
<img class="howWatch" src="../../static/howWatch.png" alt="">
  <div id="sharesALL" v-if="Share">
    <shareALL :share="Shares"></shareALL>
  </div>
  </div>
</template>

<script>
import shareALL from '../components/shareALL'
export default {
  name:"sharesALL",
  components:{
    shareALL
  },
  data(){
    return{
      Share:false
    }
  },
  methods:{
    shezhiback(){
      history.back();
    },
    s(){
      this.Share=true;
    },
    Shares(a){
      console.log(a);
      this.Share = a;
    }
  }
}
</script>

<style lang="css" scoped="scoped">
.bg{
  background-color: #F9F9F9;
}
.bgTop{
  background-color:white;
  /*width: 100%;*/
  height:.8rem;
  line-height: .8rem;
  /*text-align: center;*/
  font-size: .3rem;
  font-weight:700;
  border-bottom: .01rem solid #C6C7C7;
  margin-bottom: .2rem;
  display: flex;
  justify-content: space-around;
}
.bgTop img{
  width: .3rem;
  height: .3rem;
  margin-top: .25rem;
}
p{
    font-size: .3rem;
    margin-left: 5%;
    margin-right: 5%;
    line-height: .5rem;
    margin-bottom: .1rem;
    font-weight:500;
    text-indent: .6rem;
}
p:nth-of-type(1){
  font-weight:800;
  font-size: .36rem;
}

.howWatch{
  width: 90%;
  margin: 5%
}

</style>
