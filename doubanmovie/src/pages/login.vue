<template lang="html">
    <div class=" all" @click="show()">
      <nav>
          <img src="../../static/loginback.png" @click="back" alt="">
          <span v-if="logindb">登录豆瓣</span>
      </nav>
      <transition name="bounce">
        <p v-if="shows" :class="{'greenshow':l}" ref="pleasePut" class="pleasePut">{{msg}}</p>
      </transition>

      <main>
        <p class='welcomedb' v-show="welcome">欢迎来到豆瓣</p>
        <input ref="loginUserName"  @click.stop="anim()" id='loginUserName' type="text" name="user" value="" placeholder="手机 / 邮箱">
        <input ref="loginPassWord" @click.stop="anim()"  id ="loginPassWord" type="password" name="pwd" value="" placeholder="密码">
        <button type="button"  @click.stop="loginOn()" class="loginin" name="button">登录</button>
        <div class="enroll">
          <span @click="register('register')">注册豆瓣</span>
          <span>|</span>
          <span @click="losepassword('losepassword')">忘记密码</span>
        </div>

      </main>
      <footer>

          <img src="../../static/weibo.png" alt="">
          <span @click.stop="ulogin" >微博登录</span>


        <span>|</span>

          <img src="../../static/weixin.png" alt="">
          <span @click.stop="ulogin">微信登录</span>


      </footer>
      <p class="unlogin" v-if="unlogin">该登录接口暂未开放，敬请期待！</p>
    </div>

</template>

<script>
export default {
  data() {
    return {
      l: false,
      shows: false,
      logindb: false,
      welcome: true,
      footer: true,
      unlogin: false,
      msg: "请输入正确的用户名密码"
    };
  },
  methods: {
    back() {
      history.back();
    },
    setCookie(c_name, value, expiredays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + expiredays);
      document.cookie =
        c_name +
        "=" +
        escape(value) +
        (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
    },
    getCookie(c_name) {
      if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
          c_start = c_start + c_name.length + 1;
          var c_end = document.cookie.indexOf(";", c_start);
          if (c_end == -1) c_end = document.cookie.length;
          return unescape(document.cookie.substring(c_start, c_end));
        }
      }
      return "";
    },
    loginOn(Mine) {
      // console.log(this.$refs);
      let rm = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$|^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
      let mima = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Za-z0-9]).*$/;

      if (
        this.$refs.loginUserName.value == "" &&
        this.$refs.loginPassWord.value == ""
      ) {
        this.msg = "请输入用户名和密码";
      } else if (this.$refs.loginUserName.value == "") {
        this.msg = "请输入账号";
      } else if (this.$refs.loginPassWord.value == "") {
        this.msg = "请输入密码";
      } else if (!rm.test(this.$refs.loginUserName.value)) {
        this.msg = "请输入正确的用户名";
      } else if (!mima.test(this.$refs.loginPassWord.value)) {
        this.msg = "请输入正确的密码";
      } else {
        this.JSONP(
          "http://192.168.43.134:8888/login?user=" +
            this.$refs.loginUserName.value +
            "&pwd=" +
            this.$refs.loginPassWord.value,
          { name: "callback" },
          (err, data) => {
            data = JSON.parse(data);
            if (data.status == 1) {
              this.setCookie("user", this.$refs.loginUserName.value, 30);
              this.setCookie("pwd", this.$refs.loginPassWord.value, 30);
              this.setCookie("userId", data.userId, 30);
              this.msg = "登录成功";
              this.l = true;
              setTimeout(() => {
                this.$router.push({
                  path: "/Mine",
                  query: { userId: data.userId }
                });
              }, 2000);
            }
          }
        );
      }

      this.shows = true;
      setTimeout(() => {
        this.shows = false;
      }, 1500);
    },
    register(register) {
      this.$router.push({ path: "/register" });
    },
    anim() {
      this.welcome = false;
      this.logindb = true;
    },
    show() {
      this.welcome = true;
      this.logindb = false;
    },
    ulogin() {
      this.unlogin = true;
      setTimeout(() => {
        this.unlogin = false;
      }, 1500);
    },
    losepassword(losepassword) {
      this.$router.push({ path: "/losepassword" });
    }
  }
};
</script>

<style lang="css"  scoped>
.all {
  position: relative;
}
nav {
  width: 100%;
  height: 1rem;
  text-align: center;
  overflow: hidden;
  font-weight: normal;
  font-size: 0.26rem;
  line-height: 1rem;
}
nav img {
  padding: 0.2rem;
  width: 0.4rem;
  height: 0.4rem;
  float: left;
  vertical-align: bottom;
}
nav span {
  /*margin-top: 3%;*/
  vertical-align: bottom;
  display: inline-block;
}
.pleasePut {
  width: 40%;
  margin-left: 30%;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  background-color: #f66028;
  color: #fff;
  border-radius: 0.4rem;
  position: absolute;
  left: 0;
  top: 10%;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
main {
  width: 90%;
  margin-left: 5%;
  text-align: center;
  height: 8rem;
  margin-top: 1rem;
}
main .welcomedb {
  font-size: 0.7rem;
  color: #3fbc53;
  height: 0.7rem;
  text-align: center;
  margin: 0.6rem 0;
  transition: display 3s;
}
main input {
  border: 0.01rem solid #c2c2c2;
  display: block;
  border-radius: 0.03rem;
  width: 80%;
  margin-left: 10%;
  height: 0.6rem;
  padding-left: 0.2rem;
  font-size: 0.22rem;
  /*color: #C8C8CE;*/
}
main input:nth-of-type(2) {
  border-top: 0;
  margin-bottom: 0.3rem;
}
.loginin {
  width: 83%;
  margin-left: 10%;
  height: 0.6rem;
  background-color: #3fbc53;
  border-radius: 0.13rem;
  color: white;
  font-weight: 600;
  font-size: 0.26rem;
  display: block;
}
.enroll {
  margin-top: 0.3rem;
  font-size: 0.26rem;
  font-weight: 400;
  color: #747474;
}

.enroll span:nth-of-type(1) {
  color: #3fbc53;
}
.enroll span:nth-of-type(2) {
  margin: 0 2%;
  color: #c1c1c1;
}
footer {
  width: 60%;
  text-align: center;
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-around;
  font-weight: normal;
  font-size: 0.26rem;
  margin-left: 20%;
  color: #747474;
}
footer img {
  width: 0.34rem;
  height: 0.34rem;
}
.unlogin {
  position: absolute;
  left: 50%;
  margin-left: -2.5rem;
  top: 50%;
  margin-top: -3rem;
  width: 3rem;
  height: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 0.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 0.26rem;
  border: 1px solid #c2c2c2;
}
.l {
  background: #41b883;
}
</style>
