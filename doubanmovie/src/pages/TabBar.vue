<template lang="html">
  <div class="tabBar">
      <div class="tabtop"  v-if="this.$route.meta.showTop">
        <div class="city" v-if="showIn" :class="{'a' : a}" @click="local('Local')">
          <p>{{ city }}</p>
          <span></span>
        </div>
        <div v-if="showOn" class="tabtop-search tabtop-search-inputX"  @click="push()">
          电影 / 电视剧 / 影人
          <router-link to="/Search" >

          </router-link>
        </div>
        <div v-else class="tabtop-search tabtop-search-inputY" :class="{'b': a}" @click="push()">
          电影 / 电视剧 / 影人
          <router-link to="/Search" >

          </router-link>
        </div>
      </div>

    <div class="tabbar" v-if="this.$route.meta.showBar" >
      <router-link to="/HotPlay"  @click.native="click(true)" :class="{'router-link-active' : ok }">
        <p class="icon-i_pishafahuli" ></p>
        热映
      </router-link>
      <router-link to="/FindMovie" @click.native="click(false)">
        <p class="icon-eye"></p>
        找片
      </router-link>
      <router-link to="/Mine"  @click.native="click(false)">
        <p class="icon-wode"></p>
        我的
      </router-link>
    </div>
       <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      showIn: true,
      showOn: false,
      ok: false,
      tabbarShow: true,
      city: "",
      a: false
    };
  },
  methods: {
    click(showIn) {
      this.showIn = showIn;
    },
    local(tag) {
      this.$router.push({
        path: "/" + tag
      });
    },
    push() {
      this.$router.push({
        path: "/Search"
      });
    },
    getlocalcity() {
      this.axios
        .get(
          "http://restapi.amap.com/v3/ip?key=148a6ac1aab164f21da77728fc893368"
        )
        .then(data => {
          let city = data.data.city;
          let cityRex = /['省'|'市']$/;
          if (cityRex.test(city)) {
            let inde = city.match(cityRex).index;
            let newCity = city.substr(0, inde);
            this.city = newCity;
          } else {
            console.log(false);
          }
        });
    }
  },
  watch: {
    $route(newValue, oldValue) {
      if (newValue.path == "/HotPlay") {
        this.showOn = false;
      } else if (newValue.path == "/FindMovie") {
        this.showOn = true;
        this.showIn = false;
      }

      if (newValue.path != "/") {
        this.ok = false;
      }

      // let rex = /\/Mine/;
      // if (rex.test(this.$route.path)) {
      //   this.show = false;
      //   this.showIn = false;
      // }

      let city = /\/Citys/;
      let local = /\/Local/;
      if (city.test(oldValue.path) || local.test(oldValue.path)) {
        if (newValue.query.city) {
          this.city = newValue.query.city;
          if (this.city.length > 2) {
            this.a = true;
          } else {
            this.a = false;
          }
        }
      }

      if (newValue.query.city) {
        this.city = newValue.query.city;
      } else {
        if (!this.city) {
          this.getlocalcity();
        }
      }
    }
  },
  components: {},
  created() {
    let rex = /\/Mine/;
    if (rex.test(this.$route.path)) {
      this.show = false;
      this.showIn = false;
    }

    if (this.$route.path == "/FindMovie") {
      this.showOn = true;
      this.showIn = false;
    }

    if (this.$route.path == "/") {
      this.ok = true;
    }
  }
};
</script>

<style lang="less" scoped>
@fixed : fixed;
@ab : #ababab;
@h08: 0.8rem;

.show {
  width: 100%;
  height: 100%;
}

.fixed-bottom() {
  position: @fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 2;
}
.fixed-top() {
  position: @fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 2;
}

.flex-config() {
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.show {
  margin-bottom: 1rem;
}

.tabtop {
  .fixed-top();
  .flex-config();
  .city {
    width: 1.1rem;
    height: @h08;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.3rem;
  }
  .city > p {
    margin-right: 0.03rem;
  }
  .city > span {
    position: relative;
    width: 0.4rem;
    height: 0.2rem;
    overflow: hidden;
    line-height: 0;
    top: 0.05rem;
  }
  .city > span:after {
    content: "◇";
    font-size: 0.4rem;
    position: absolute;
    top: 0;
  }
  .tabtop-search {
    background: url(../../static/search.png) no-repeat 0.8rem center;
    background-size: 0.3rem;
    background-color: #f5f5f5;
    width: 5.6rem;
    height: @h08;
    font-size: 0.3rem;
    border-radius: 0.2rem;
    text-align: center;
    line-height: @h08;
    color: #ccc;
  }
}

.a {
  width: 1.7rem !important;
}

.tabtop-search-inputX {
  width: 7rem !important;
  background-position-x: 1.8rem !important;
}

.tabtop-search-inputY {
  width: 5.6rem !important;
  background-position-x: 0.8rem !important;
}

.b {
  width: 5.2rem !important;
}

.tabbar {
  .fixed-bottom();
  .flex-config();
  border-top: 1px solid #f0f0f0;
  a {
    width: 2rem;
    font-size: 0.2rem;
    text-align: center;
    color: @ab;
  }
}
.router-link-active {
  color: #494949 !important;
}
</style>
