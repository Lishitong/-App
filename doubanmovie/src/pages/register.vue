<template lang="html">
    <div class=" all">
      <nav>
          <span class="img" @click="back">取消</span>
          <span >注册豆瓣</span>
      </nav>

      <main>
        <p class='welcomedb' >欢迎加入豆瓣</p>
        <input ref="loginUserName"  id='loginUserName' type="text" name="user" value="" placeholder="手机 / 邮箱">
        <div class="mima">
                <input ref="loginPassWord" v-if="show"  class="loginPassWord" type="password" name="pwd" value="" placeholder="密码(最少6位)">
                  <input ref="loginPassWord" v-else  class="loginPassWord" type="text" name="pwd" value="" placeholder="密码(最少6位)">
                <img src="../../static/nopass.png" ref="seePassword" @click="seePassword()" alt="">
        </div>
  <input ref="loginUser"   id='UserName' type="text" name="user" value="" placeholder="昵称">

        <button type="button"  @click="loginOn()" class="loginin" name="button">确定</button>
        <p>如果点击『确定』,代表你已经阅读并 <a href="#">同意用户使用协议</a></p>

      </main>

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
      this.$router.back();
    },
    loginOn(){
      this.JSONP("http://192.168.43.134:8888/register?user=" +
            this.$refs.loginUserName.value +
            "&pwd=" +
            this.$refs.loginPassWord.value + '&userId=' + this.$refs.loginUser.value,{name : 'callback'},
          (err, data) => {
            data = JSON.parse(data);
            console.log(data)
            if (data.status == 0) {
              console.log("注册失败");
            } else {
              console.log("注册成功");
            }
          }
        )
    },


    seePassword(){
       if(this.$refs.seePassword.src="../../../static/nopass.png" &&this.$refs.loginPassWord.type=="password" ){
      console.log(this.$refs.seePassword.src)
      this.$refs.seePassword.src="../../../static/seepass.png";
      this.show=false;
    }else{
        this.$refs.seePassword.src="../../../static/nopass.png";
        this.show=true;
    }
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
  .mima img{
      position: absolute;
      right: 0;
      top: 5%;
  }
  .mima{
    width: 80%;
    margin-left: 10%;
    border-left: .01rem solid #C2C2C2;
    border-right: .01rem solid #C2C2C2;
      padding-left: .2rem;
      position: relative;
  }
  main input:nth-of-type(2){
    /*border-top: 0;*/
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


</style>
