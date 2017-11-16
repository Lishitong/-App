<template lang="html">
    <div class=" all">
      <nav>
          <span class="img" @click="back">取消</span>
          <span >豆瓣账号</span>
      </nav>

      <main>
        <p class='welcomedb' >欢迎加入豆瓣</p>
        <input ref="loginUserName"  id='loginUserName' type="text" name="user" value="" placeholder="手机 / 邮箱">
        <div class="mima">
                <input ref="loginPassWord" v-if="show"  class="loginPassWord" type="password" name="pwd" value="" placeholder="验证码">

                <p class="img"> <span>|</span>获取验证码</p>
        </div>


        <button type="button"  @click="ulogin()" class="loginin" name="button">确定</button>
      </main>
        <p class="unlogin" v-if="unlogin">该登录接口暂未开放，敬请期待！</p>
    </div>

</template>

<script>
export default {
  data(){
    return {
      logindb:false,
      welcome:true,
      footer:true,
      unlogin:false,
      show:true
    }
  },
  methods:{
    back(){
      history.back();
    },
    ulogin(){
          this.unlogin = true;
          setTimeout(()=>{
            this.unlogin = false;
          },1500)
    },

    }
  }

</script>

<style lang="css"  scoped>
  .all{
    position: relative;
  }
  nav{
    width: 100%;
    height: 1rem;
    text-align: center;
    overflow: hidden;
    font-weight: normal;
    font-size: .26rem;
    line-height: 1rem;
    border-bottom: 1px solid #C2C2C2;
  }

  nav .img{
    margin-left: .2rem;
    float: left;
    vertical-align: bottom;
  }
  nav span{
    /*margin-top: 3%;*/
    vertical-align: bottom;
    display: inline-block;
  }
  main{
    width: 90%;
    margin-left: 5%;
    text-align: center;
    height: 8rem;

  }
  main .welcomedb{
    font-size: .7rem;
    color: #3FBC53;
    height: .7rem;
    text-align: center;
    margin: .6rem 0;
    transition:display 3s;
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
  .loginPassWord{
    border:0;
    margin-left: 0;
    padding-left: 0;

  }
  .mima .img{
      position: absolute;
      right: 0;
      top: 25%;
      color:#3CBB55;
  }
  .mima .img span{
    margin-right: .2rem;
  }
  .mima{
    width: 80%;
    margin-left: 10%;
    border-left: .01rem solid #C2C2C2;
    border-right: .01rem solid #C2C2C2;
    border-bottom: .01rem solid #C2C2C2;
    padding-left: .2rem;
    position: relative;
    margin-bottom: 1rem;
  }
  main input:nth-of-type(2){

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
  .unlogin{
    position: absolute;
    left: 50%;
    margin-left: -2.5rem;
    top: 50%;
    margin-top: -3rem;
    width: 3rem;
    height: 2rem;
    padding: 1rem;
    background-color: #F9F9F9;
    border-radius: .4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: .26rem;
  }




</style>
