<template lang="html">
    <div class=" all">
      <nav>
          <img src="../../static/loginback.png" @click="back" alt="">
          <span v-if="logindb">登录豆瓣</span>
      </nav>

      <main>
        <p class='welcomedb' v-show="welcome">欢迎来到豆瓣</p>
        <input ref="loginUserName"  @click="anim()" @blur="show()" id='loginUserName' type="text" name="user" value="" placeholder="手机 / 邮箱">
        <input ref="loginPassWord" @click="anim()" @blur="show()" id ="loginPassWord" type="password" name="pwd" value="" placeholder="密码">
        <button type="button"  @click="loginOn()" class="loginin" name="button">登录</button>
        <div class="enroll">
          <span @click="ll()">注册豆瓣</span>
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
  </div>
</template>

<script>
export default {
  data(){
    return {
      logindb:false,
      welcome:true,
      footer:true
    }
  },
  methods:{
    back(){
      history.back();
    },
    setCookie(c_name,value,expiredays){
      var exdate=new Date()
      exdate.setDate(exdate.getDate()+expiredays)
      document.cookie=c_name+ "=" +escape(value)+
      ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
    },
    getCookie(c_name){
      if (document.cookie.length>0)
        {
        var c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        {
        c_start=c_start + c_name.length+1
        var c_end=document.cookie.indexOf(";",c_start)
        if (c_end==-1) c_end=document.cookie.length
        return unescape(document.cookie.substring(c_start,c_end))
        }
        }
      return ""
    },
    loginOn(){

      //   console.log(this.$refs.loginUserName.value)
      // if(this.$refs.loginUserName.value=="douer"&&this.$refs.loginPassWord.value=="go"){
      //   // alert('fafafa')
      //     this.$router.push({path:'/Mine'});
      //     document.cookie="u=8";
      //     // document.cookie="pas=1";
      // }


      this.JSONP('http://localhost:8888?user='+this.$refs.loginUserName.value + '&pwd=' + this.$refs.loginPassWord.value,(err, data)=>{
        data = JSON.parse(data)
        if (data.status == 1) {
          this.setCookie('user',this.$refs.loginUserName.value,30)
          this.setCookie('pwd',this.$refs.loginPassWord.value,30)
          console.log('登陆成功')
        }else {
          console.log('登陆失败')
        }
      })

    },
    ll(){
      console.log(this.getCookie('user'));

    },
    anim(){
      this.welcome=false;
      this.logindb=true;

    },
    show(){
      this.welcome=true;
      this.logindb=false;

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
    height: 1rem;
    text-align: center;
    overflow: hidden;
    font-weight: normal;
    font-size: .26rem;
    line-height: 1rem;
  }
  nav img{
    padding: .2rem;
    width: .4rem;
    height: .4rem;
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
