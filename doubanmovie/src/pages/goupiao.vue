<template lang="html">
  <div id="goupiao">
    <div class="xq-top">
      <h1 class="lastpage" @click="back"></h1>
      <div class="baomihua">选择影院</div>
      <h1 class="zhuanfa"></h1>
    </div>
    <div class="date">
      <div class="date-data">
        <div @click="qie">11.18周六(今天)</div>
        <div @click="qie1">11.19周日(后天)</div>
        <div @click="qie2">11.20周一</div>
        <div @click="qie3">11.21周二</div>
        <div @click="qie4">11.22周三</div>
        <div @click="qie5">11.23周四</div>
        <div @click="qie6">11.24周五</div>
      </div>
    </div>
    <h1>上映此片的全部影院</h1>
    <div class="place">
      <gou1 v-if="flag=='a'"></gou1>
      <gou2 v-else-if="flag=='b'"></gou2>
      <gou3 v-else-if="flag=='c'"></gou3>
      <gou4 v-else-if="flag=='d'"></gou4>
      <gou5 v-else-if="flag=='e'"></gou5>
      <gou6 v-else-if="flag=='f'"></gou6>
      <gou1 v-else></gou1>
    </div>
  </div>
</template>

<script>
import gou1 from './gou1'
import gou2 from './gou2'
import gou3 from './gou3'
import gou4 from './gou4'
import gou5 from './gou5'
import gou6 from './gou6'
export default {
  data() {
    return{
      flag:'a'
    }
  },
  components:{
    gou1,gou2,gou3,gou4,gou5,gou6
  },
  methods:{
    back() {
     history.back()
   },
   qie() {
     this.flag = 'a'
   },
   qie1() {
     this.flag = 'b'
   },
   qie2() {
     this.flag = 'c'
   },
   qie3() {
     this.flag = 'd'
   },
   qie4() {
     this.flag = 'e'
   },
   qie5() {
     this.flag = 'f'
   },
   qie6() {
     this.flag = 'a'
   }
  }
}
</script>

<style lang="css">
#goupiao{
  width: 100%;
}
#goupiao .xq-top{
  background: pink;
  position: fixed !important;
  top: 0 !important;
  z-index: 6 !important;
  width: 100%;
  height: .8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
#goupiao .baomihua {
  font-size: .3rem;
  font-weight: 900;
  color: #fff;
}
#goupiao .lastpage,.zhuanfa {
  width: .5rem;
  height: .4rem;
  background: url(../../static/img/lastpage.png) no-repeat top/100% 100%;
  margin-left: .1rem;
}
#goupiao .zhuanfa {
  width: .4rem;
  background: url(../../static/search.png) no-repeat top/100% 100%;
  margin-right: .2rem;
}
#goupiao .date {
  margin-top: .8rem;
  width: 100%;
  background: #eee;
}
#goupiao .date .date-data {
  margin-right: .2rem;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#goupiao .date .date-data > div {
  width: 10rem;
  height: .8rem;
  line-height: .8rem;
  margin-left: .2rem;
  white-space: nowrap;
  font-size: .25rem;
}
#goupiao>h1 {
  width: 100%;
  height: .8rem;
  line-height: .8rem;
  font-size: .25rem;
  text-indent: .2rem;
}

</style>
