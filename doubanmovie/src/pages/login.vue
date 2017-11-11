<template lang="html">
<div class=" all">
  <nav>
      <img src="../../static/loginback.png" @click="back" alt="">
      <span v-if="logindb">登录豆瓣</span>
  </nav>

  <main>
    <p class='welcomedb'>欢迎来到豆瓣</p>
    <input type="text" name="" value="" placeholder="手机 / 邮箱">
    <input type="password" name="" value="" placeholder="密码">
    <button type="button" class="loginin" name="button">登录</button>
    <div class="enroll">
      <span>注册豆瓣</span>
      <span>|</span>
      <span>忘记密码</span>
    </div>

  </main>
  <footer>

      <img src="../../static/weibo.png" alt="">
      <span>微博登录</span>


    <span>|</span>

      <img src="../../static/weixin.png" alt="">
      <span>微信登录</span>


  </footer>
</div>
</template>

<script>
export default {
  data(){
    return {
      logindb:false
    }
  },
  methods:{
    back(){
      history.back();
    }
  }
}
</script>

<style lang="css"  scoped>
  .all{
    position: relative;
  }
  nav{
    width: 100%;
    height: 5%;
  }
  nav img{
    padding: .2rem;
    width: .4rem;
    height: .4rem;
  }
  main{
    width: 90%;
    margin-left: 5%;
    text-align: center;
    height: 7rem;

  }
  main .welcomedb{
    font-size: .7rem;
    color: #3FBC53;
    height: .7rem;
    text-align: center;
    margin: .6rem 0;
  }
  main input{
    border: .01rem solid #C2C2C2;
    display:block;
    border-radius: .03rem ;
    width: 80%;
    margin-left: 10%;
    height: .6rem;
    padding-left: .2rem;
    font-size: .22rem;
    /*color: #C8C8CE;*/
  }
  main input:nth-of-type(2){
    border-top: 0;
    margin-bottom: .3rem;
  }
  .loginin{
    width: 83%;
    margin-left: 10%;
    height: .6rem;
    background-color: #3FBC53;
    border-radius: .13rem;
    color: white;
    font-weight: 600;
    font-size: .26rem;
    display: block;
  }
  .enroll{
    margin-top: .3rem;
    font-size: .26rem;
    font-weight: 400;
    color: #747474;
  }

  .enroll span:nth-of-type(1){
    color:#3FBC53;

  }
  .enroll span:nth-of-type(2){
    margin: 0 2%;
    color: #C1C1C1;

  }
  footer{
    width: 60%;
    text-align: center;
    position: relative;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: space-around;
    font-weight: normal;
    font-size: .26rem;
    margin-left: 20%;
    color: #747474;
  }
  footer img{
    width: .34rem;
    height: .34rem;

  }

</style>
