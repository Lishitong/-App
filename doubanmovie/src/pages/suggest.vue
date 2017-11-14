<template lang="html">
  <div class="bg">
    <div class="bgTop">
      <img src="../../static/shezhiback.png" @click="shezhiback()" alt="">
      <span>帮助与反馈</span>
    </div>
    <div class="question">
      <p>常见问题</p>
    </div>
    <main>


    <div class="bgconter first"  >
      <span class="suggest" @click="howSee('howSee')">如何查看电影榜单？</span>
      <img src="../../static/shezhigo.png" alt="">
    </div>
    <div @click="why('why')" class="bgconter" >
      <span >影评/短评为什么会被折叠？</span>
        <img src="../../static/shezhigo.png" alt="">
    </div>

    <div class="bgconter last" @click="howWatch('howWatch')">
      <span>如何在线观看电视/电影</span>
        <img src="../../static/shezhigo.png" alt="">
    </div>
    </main>
    <div class="footer" v-if="footer" @click ="feedBack('feedBack')" >
      <img src="../../static/pen.png" alt="">
      <span>我要反馈</span>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return {
        footer:true
    }

  },
  methods:{
    shezhiback() {
      history.back()
  },
  howSee(howSee){
    this.$router.push({path:'/'+howSee})
  },
  why(why){
    this.$router.push({path:'/'+why})
  },
  howWatch(howWatch){
    this.$router.push({path:'/'+howWatch})
  },
  feedBack(feedBack){
    this.$router.push({path:'/'+feedBack})
  }
}
}
</script>

<style lang="css" scoped>
.bg{
  background-color:#F6F6F6;
  width: 100%;
  height: 9rem;
}
.bgTop{
  background-color:white;
  width: 100%;
  height:.8rem;
  line-height: .8rem;
  text-align: center;
  font-size: .3rem;
  border-bottom: .01rem solid #C6C7C7;
  margin-bottom: .2rem;
    font-weight:700;



}
.bgTop p{

}
.bgTop img{
  width: .4rem;
  height: .4rem;
  float: left;
  margin-top: .2rem;
  margin-left: .2rem;
}
.question{
  height:.6rem;
  line-height: .6rem;
  text-align: left;
  font-size: .16rem;
  color:#70706D;

}
main{
  overflow: hidden;
  background-color: white;
  border-top: .01rem solid #C6C7C7;
  border-bottom: .01rem solid #C6C7C7;
  margin-bottom: .5rem;
}
.bgconter {
  /*background-color:white;*/
  width: 95%;
  margin-left:5%;
  height:.6rem;
  line-height: .6rem;
  text-align: center;
  font-size: .3rem;
  border-bottom: .01rem solid #C6C7C7;

  /*float: right;*/
}
/*.first {
    border-top:.01rem solid #C6C7C7;
}*/
.last{
  border-bottom: .0003rem solid #C6C7C7;
}
.bgconter img{
  width: .3rem;
  height: .3rem;
  float: right;
  margin-top: .15rem;
  margin-right: .1rem;
}
.bgconter span{
  float: left;
  margin-left: .1rem;
  font-size: .26rem;
  color:#030302;
}
.footer{
  width: 100%;
  height:.6rem;
  line-height: .6rem;
  text-align: center;
  font-size: .3rem;
  background-color:white;
  border-bottom: .01rem solid #C6C7C7;
  border-top: .003rem solid #C6C7C7;
}
.footer img{
  width: .4rem;
  height: .4rem;
}
</style>
