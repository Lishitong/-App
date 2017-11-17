<template lang="html">

  <div class="">
    <div class="top">
      <img class="shezhi" @click="shezhi('shezhi')" src="../../static/shezhi.png" alt="">
      <div class="login" v-if="bol==false">
        <img class="loginImg" @click="login('login')" src="../../static/login.png" alt="">
        <span id="loginSpan"  @click="login('login')">未登录</span>
      </div>
      <div class="succ login" v-else>
        <img class="loginImg" src="../../static/men.jpg" alt="">
        <span id="loginSpan">{{user}}</span>
         <div v-if="myfiles" class="myfiles" @click="myfil()"> <img src="../../static/myfile.png" alt="">我的电影票</div>
      </div>
    </div>
      <div class="Sees">
        <router-link :class="{'router-link-active':ok}"   class="See" to='/Mine/wantSee'>想看</router-link>
        <router-link class="See" to="/Mine/nowSee">在看</router-link>
        <router-link class="See" to="/Mine/sew">看过</router-link>
        <router-link class="See" to="/Mine/seeSpeak">影评</router-link>
        <router-link class="See" to="/Mine/movieMen">影人</router-link>
      </div>
      <router-view></router-view>
</div>
</template>

<script>
export default {
  props: ["show"],
  data() {
    return {
      bol: false,
      ok: true,
      user: "",
      myfiles: false
    };
  },
  methods: {
    shezhi(shezhi) {
      this.$router.push({
        path: "/" + shezhi
      });
    },
    login(login) {
      this.$router.push({
        path: "/" + login
      });
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
    myfil() {
      this.$router.push({
        path: "/myfil"
      });
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
    }
  },
  watch: {
    $route(newValue, oldValue) {
      this.ok = false;
    }
  },
  // created () {
  //   if (this.$route.path != '/Mine/wantSee'&&  this.ok==true ) {
  //     this.ok = false;
  //   }
  // }
  created() {
    if (this.getCookie("user") != "") {
      (this.bol = true),
        (this.user = this.getCookie("userId")),
        (this.myfiles = true);
    }
  }

  // props: ['show']
};
</script>


<style lang="less" scoped>
.shezhi {
  width: 0.4rem;
  height: 0.4rem;
  float: right;
  padding: 0.4rem;
}
.top {
  width: 100%;
  height: 3rem;
  background: url("../../static/dbminebg.png") no-repeat;
  background-size: 100% 3rem;
}
.myfiles {
  margin-left: 1.2rem;
  margin-top: -0.2rem;
  padding-top: 0.1rem;
  color: #fff;
  border-top: 0.03rem solid #fff;
  font-size: 0.2rem;
  width: 40%;
  display: inline-block;
}
.login {
  padding: 0.8rem;
}
.loginImg {
  width: 1.2rem;
  height: 0.1.2rem;
  vertical-align: middle;
  border-radius: 50%;
}
#loginSpan {
  font-size: 0.3rem;
  color: white;
  font-wight: 800;
  padding: 0.1rem;
  vertical-align: middle;
}
.Sees {
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-size: 0.3rem;
  color: #432443;
}
.Sees .See {
  margin-top: 0.2rem;
  color: gray;
  display: inline-block;
  padding-bottom: 0.2rem;
}
.Seemoren {
  // border-bottom:.02rem solid #666;
}
.router-link-active {
  color: black !important;
  border-bottom: 0.02rem solid black !important;
}
</style>
