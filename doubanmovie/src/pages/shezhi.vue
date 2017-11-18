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
        <span @click="pingfen">给应用评分</span>
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
      <div class="footer" v-if="foote" >
        <p @click="clearLog()">退出登录</p>
      </div>
    </div>

    <div class="wrap" v-if="bol">
      <div class="alertbox">
        <p>是否清除缓存</p>
        <button type="button" name="button1" @click="clearCooki()">是</button>
        <button type="button" name="button2" @click="closeBox()">否</button>
      </div>
    </div>
    <div class="">
        <p class="unlogin" v-if="unlogin">该APP用户体验满意度为100%,无需评分,谢谢！</p>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      bol: false,
      foote: false,
      closeLogin: false,
      unlogin: false,
    };
  },
  methods: {
    shezhiback() {
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
    clearCookie() {
      var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
      if (keys) {
        for (var i = keys.length; i--; )
          document.cookie = keys[i] + "=0;expires=" + new Date(0).toUTCString();
      }
    },
    clear() {
      this.bol = true;
    },
    closeBox() {
      this.bol = false;
    },
    pingfen() {
      this.unlogin = true;
      setTimeout(() => {
        this.unlogin = false;
      }, 1500);
    },
    aboutdb (aboutdb) {
      this.$router.push({path : '/' + aboutdb})
    },
    clearLog() {
      this.clearCookie();
      this.closeLogin = true;
      this.$store.commit("isClearWantToSeeList");
      setTimeout(() => {
        this.closeLogin = false;
      }, 1500);
      this.$router.push({ path: "/Mine" });
    },
    clearCooki() {
      // this.clearCookie();
      this.bol = false;
      // this.$store.commit("isClearWantToSeeList");
      // this.$router.go(0);
      // this.foote = false;
    },
    suggest(suggest) {
      this.$router.push({ path: "/" + suggest });
    }
  },
  created() {
    if (document.cookie.length > 0) {
      this.foote = true;
    }
  }
};
</script>

<style lang="css" scoped>
.bg {
  background-color: #f6f6f6;
  width: 100%;
  height: 9rem;
}
.wrap {
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200, 0.4);
  position: fixed;
  top: 0.8rem;
  bottom: 0;
  left: 0;
  right: 0;
}
.alertbox {
  position: absolute;
  left: 50%;
  margin-left: -2.5rem;
  top: 50%;
  margin-top: -3rem;
  width: 3rem;
  height: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.alertbox > p {
  width: 100%;
  text-align: center;
  font-size: 0.4rem;
  margin-top: 0.3rem;
}
.alertbox > button {
  width: 0.8rem;
  height: 0.6rem;
  margin-top: 0.3rem;
  border-radius: 0.1rem;
}
.bgTop {
  background-color: white;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.3rem;
  border-bottom: 0.01rem solid #c6c7c7;
  margin-bottom: 0.8rem;
}
.bgTop img {
  width: 0.4rem;
  height: 0.4rem;
  float: left;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
main {
  overflow: hidden;
  background-color: white;
  border-top: 0.01rem solid #c6c7c7;
  border-bottom: 0.01rem solid #c6c7c7;
  margin-bottom: 0.5rem;
}
.bgconter {
  /*background-color:white;*/
  width: 95%;
  margin-left: 5%;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.3rem;
  border-bottom: 0.01rem solid #c6c7c7;

  /*float: right;*/
}
/*.first {
    border-top:.01rem solid #C6C7C7;
}*/
.last {
  border-bottom: 0.00000003rem solid #c6c7c7;
}
.bgconter img {
  width: 0.3rem;
  height: 0.3rem;
  float: right;
  margin-top: 0.15rem;
  margin-right: 0.1rem;
}
.bgconter span {
  float: left;
  margin-left: 0.1rem;
  font-size: 0.26rem;
  color: #030302;
}
.footer {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.3rem;
  background-color: white;
  border-bottom: 0.01rem solid #c6c7c7;
  border-top: 0.003rem solid #c6c7c7;
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
</style>
