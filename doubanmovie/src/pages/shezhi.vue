<template lang="html">
  <div class="bg">
    <div class="bg-ui">
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
      <div class="bgconter" @click="clear()">
        <span>清除缓存</span>
          <img src="../../static/shezhigo.png" alt="">
      </div>
      <div class="bgconter last"  @click="aboutdb('aboutdb')" >
        <span>关于</span>
          <img src="../../static/shezhigo.png" alt="">
      </div>
      </main>
      <div class="footer" v-if="footer" >
        <p>退出登录</p>
      </div>
    </div>
    <div class="wrap" v-if="bol">
      <div class="alertbox">
        <p>是否清除缓存</p>
        <button type="button" name="button1" @click="clearCookie()">是</button>
        <button type="button" name="button2" @click="closeBox()">否</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return {
        bol:false,
        footer:false
    }

  },
  methods:{
    shezhiback() {
      history.back()
  },
  setCookie(c_name,value,expiredays){
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
  },
  clear(){
    this.bol = true;
  },
  closeBox(){
    this.bol = false
  },
  clearCookie(){
    this.setCookie('user','',-1)
    this.bol = false;
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
.wrap{
  width: 100%;
  height: 100%;
  background-color: rgba(200,200,200,.4);
  position: fixed;
  top: .8rem;
  bottom: 0;
  left: 0;
  right: 0;
}
.alertbox{
  position: absolute;
  left: 50%;
  margin-left: -2.5rem;
  top: 50%;
  margin-top: -3rem;
  width: 3rem;
  height: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: .2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.alertbox>p{
  width: 100%;
  text-align: center;
  font-size: .4rem;
  margin-top: .3rem;
}
.alertbox>button{
  width: .8rem;
  height: .6rem;
  margin-top: .3rem;
  border-radius: .1rem;
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
