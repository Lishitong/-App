<template lang="html">
  <div class="bg">
    <div class="bgTop">
      <img src="../../static/shezhiback.png" @click="shezhiback()" alt="">
      <span>设置</span>
    </div>
    <main>


    <div class="bgconter first"  @click="suggest('suggest')">
      <span class="suggest" >意见反馈</span>
      <img src="../../static/shezhigo.png" alt="">
    </div>
    <div class="bgconter">
      <span>给应用评分</span>
        <img src="../../static/shezhigo.png" alt="">
    </div>
    <div class="bgconter">
      <span>清除缓存</span>
        <img src="../../static/shezhigo.png" alt="">
    </div>
    <div class="bgconter last" @click="aboutdb('aboutdb')" >
      <span>关于</span>
        <img src="../../static/shezhigo.png" alt="">
    </div>
    </main>
    <div class="footer" v-if="footer" >
      <p>退出登录</p>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return {
        footer:false
    }

  },
  methods:{
    shezhiback() {
      history.back()
  },
  suggest(suggest){
    this.$router.push({path:'/'+suggest})
  },
  aboutdb(aboutdb){
    this.$router.push({path:'/'+aboutdb})
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
  margin-bottom: .8rem;
}
.bgTop img{
  width: .4rem;
  height: .4rem;
  float: left;
  margin-top: .2rem;
  margin-left: .2rem;
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
  border-bottom: .00000003rem solid #C6C7C7;
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
</style>
