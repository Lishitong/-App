<template>
  <p class="dangqian" @click="inde(localCity)">
    <label class="icon-location2"></label>
    <span>{{ localCity }}</span>
  </p>
</template>

<script>
export default {
  data() {
    return {
      localCity: ""
    };
  },
  methods: {
    inde(cit) {
      this.$router.push({
        path: "/HotPlay",
        query: {
          city: cit
        }
      });
    }
  },
  created() {
    this.axios
      .get("http://restapi.amap.com/v3/ip?key=148a6ac1aab164f21da77728fc893368")
      .then(data => {
        let city = data.data.city;
        let cityRex = /['省'|'市']$/;
        if (cityRex.test(city)) {
          let inde = city.match(cityRex).index;
          let newCity = city.substr(0, inde);
          this.localCity = newCity;
        }
      });
  }
};
</script>

<style lang="less" scoped>
.icon-location2 {
  font-size: 0.25rem;
  color: #42bd56;
}
</style>

