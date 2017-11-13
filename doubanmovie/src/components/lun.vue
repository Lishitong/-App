<template lang="html">
  <div class="lun">
    ooooooooooo
  </div>
</template>

<script>
let jsonp = require('jsonp')
export default {
  name: 'ping',
  data() {
    return { // 在数据中接收
      id: this.$route.params.id,
      msg: {}
    }
  },
  methods: {
    getImage(url) {
      if (url !== undefined) {
        return url.replace('http://', 'https://images.weserv.nl/?url=');
      }
    }
  },
  created() {
    if (this.id) {
      //  console.log(this.id);
    }
  },
  updated() {

  },
  watch: {
    '$route'(newdata,olddata) {
        this.id = newdata.params.id;
    }
  }
}
</script>
<style lang="css">
.lun {
  height: 9rem;
}
</style>
