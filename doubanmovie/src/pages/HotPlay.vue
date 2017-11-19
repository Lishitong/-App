<template>
    <div class="out">
      <swiper />
      <div class="wrap">
        <router-link to="/HotPlay/nowing" :class="{'router-link-active':ok}">正在热映</router-link>
        <router-link to="/HotPlay/loading">即将上映</router-link>
      </div>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
</template>

<script>
import swiper from "./swiper";
export default {
  name: "now",
  data() {
    return {
      ok: true,
      isLogin: false
    };
  },
  components: {
    swiper
  },
  watch: {

  },
  methods: {
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
    clearCookie() {
      var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
      if (keys) {
        for (var i = keys.length; i--; )
          document.cookie = keys[i] + "=0;expires=" + new Date(0).toUTCString();
      }
    }
  },
  created() {

    if (this.$route.path != "/HotPlay/nowing") {
      this.ok = false;
    } else {
      this.ok = true;
    }

    this.JSONP(
      "http://192.168.43.134:8888/login?user=" +
        this.getCookie("user") +
        "&pwd=" +
        this.getCookie("pwd"),
      { name: "callback" },
      (err, data) => {
        data = JSON.parse(data);
        if (data.status == 1) {
          this.$store.commit("inLogin", true);
          return true;
        } else {
          this.clearCookie();
          this.$store.commit("inLogin", false);
        }
      }
    );
  }
};
</script>

<style scoped>
.out {
  margin-top: 1rem;
}
.wrap {
  width: 100%;
  height: 1rem;
  /*position:fixed;
  background: white;
  z-index:2;*/
}
.wrap a {
  float: left;
  width: 50%;
  font-size: 0.3rem;
  color: #4c4c4c;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
.router-link-active {
  border-bottom: 0.02rem solid #123;
  color: #123;
}
</style>
