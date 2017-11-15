<template lang="html">
  <div class="local-city" >
    <div class="inOrout">
      <div id="chengshi">
        <transition name="slider">
          <div class="is-actived"  v-if="active">
            <h1>
              <span @click="back">&lt;</span>
              <label>选择城市</label>
            </h1>
            <div class="inCityOroutCity">
              <p class="c68cb78">国内</p>
              <p>海外</p>
            </div>
            <div class="line">
              <span :class="{'left-line' : open}"></span>
              <span :class="{'right-line' : close}"></span>
            </div>
          </div>
        </transition>
        <div class="local-search">
          <p class="icon-search"></p>
          <input type="text" ref="inputSearch" id="input-search" @focus="activ()"  @input="searchData(searchCitys)" v-model="changeCity"  placeholder="输入城市名称查询" />
          <div class="cBox">
            <div id="checkCity" ref="checkCity">
              <div class="check-city z" v-for="(city, index) in cityObj" :key="index" v-if="searchCity">
              <h3>{{ index }}</h3>
              <p id="p" v-for="c in city" @click="inde(c)">
                {{ c }}
              </p>
              </div>
            </div>
            <h3 v-if="noneNull" class="none"> {{ msg }} </h3>
          </div>

          <div ref="zhezhaoc" :class="{'fadeOn': zhezhao}"  @click="acti"></div>
        </div>
      </div>
        <div class="local-weizhi" v-if="active">
          <h3>GPS定位城市</h3>
          <Localtion />
          <h3 class="remen">热门城市</h3>
          <ul class="remen-city">
            <li v-for="city in remen" @click="inde(city)" > {{ city }} </li>
          </ul>
        </div>
      <div class="local-weizhi" :style="{ marginTop: '1rem' }" v-else>
          <h3>GPS定位城市</h3>
          <Localtion />
          <h3 class="remen">热门城市</h3>
          <ul class="remen-city">
            <li v-for="city in remen" @click="inde(city)" > {{ city }} </li>
          </ul>
        </div>
      <div class="check-city">
         <ol>
          <li v-for="(city, index) in cities" :key= "index">
            <h3>{{ index }}</h3>
            <p v-for="cit of city" @click="sonCity(cit.id)"> {{ cit.name }} </p>
          </li>
        </ol>
      </div>
    </div>

  </div>
</template>

<script>
  import Localtion from '../components/Location.vue'

  export default {
    data(){
      return {
        cities : {},
        citys : [],
        open : true,
        close : false,
        mr : true,
        active: true,
        zhezhao: false,
        remen: ['北京', '上海', '广州', '深圳', '成都', '武汉', '杭州', '重庆', '郑州', '南京', '西安', '苏州', '天津', '长沙', '福州'],
        changeCity:'',
        searchCitys:{},
        cityObj:{},
        searchCity: false,
        wheight:0,
        msg:'没有这个地方哟，或者没有收录哟',
        noneNull : false
      }
    },
    components:{
      Localtion
    },
    methods : {
      back(){
        history.back();
      },
      activ(){
          this.active=false;
          this.zhezhao = true;
          this.$refs.zhezhaoc.style.height = window.innerHeight + 'px';
          document.body.style.overflow = 'hidden';
      },
      acti(){
        this.zhezhao = false;
        this.active=true;
        document.body.style.overflow = 'auto';
      },
      sonCity(city){
        this.$router.push({
          path:"Citys/" + city
        })
      },
      inde(cit){
       this.$router.push({
          path:'/HotPlay',
          query:{
            'city':cit,
          }
        })
      },
      isEmpty(obj){
          for (var key in obj.citys) {
            if (!obj.citys[key].length) {
              delete obj.citys[key];
            }
          }
          return obj;
      },

      searchData(data) {
        const search = this.changeCity;
        const d_citys = data.citys;
        let ret = [];
        const obj = {
                    "citys" : {
                      "A":[],
                      "B":[],
                      "C":[],
                      "D":[],
                      "E":[],
                      "F":[],
                      "G":[],
                      "H":[],
                      "I":[],
                      "J":[],
                      "K":[],
                      "L":[],
                      "M":[],
                      "N":[],
                      "O":[],
                      "P":[],
                      "Q":[],
                      "R":[],
                      "S":[],
                      "T":[],
                      "U":[],
                      "V":[],
                      "W":[],
                      "X":[],
                      "Y":[],
                      "Z":[],
                    }
                  }
        if (search) {
          for (var keys in d_citys) {
            const ks_citys = d_citys[keys];
            for (var key in ks_citys) {
              const k_citys = ks_citys[key];
              for (var keya in k_citys) {
                if (k_citys[keya].indexOf(search) !== -1) {
                  if (key == "A") {
                    obj.citys.A.push(k_citys[keya]);
                  }else if (key == 'B') {
                    obj.citys.B.push(k_citys[keya]);
                  }else if (key == 'C') {
                    obj.citys.C.push(k_citys[keya]);
                  }else if (key == 'D') {
                    obj.citys.D.push(k_citys[keya]);
                  }else if (key == 'E') {
                    obj.citys.E.push(k_citys[keya]);
                  }else if (key == 'F') {
                    obj.citys.F.push(k_citys[keya]);
                  }else if (key == 'G') {
                    obj.citys.G.push(k_citys[keya]);
                  }else if (key == 'H') {
                    obj.citys.H.push(k_citys[keya]);
                  }else if (key == 'I') {
                    obj.citys.I.push(k_citys[keya]);
                  }else if (key == 'J') {
                    obj.citys.J.push(k_citys[keya]);
                  }else if (key == 'K') {
                    obj.citys.K.push(k_citys[keya]);
                  }else if (key == 'L') {
                    obj.citys.L.push(k_citys[keya]);
                  }else if (key == 'M') {
                    obj.citys.M.push(k_citys[keya]);
                  }else if (key == 'N') {
                    obj.citys.N.push(k_citys[keya]);
                  }else if (key == 'O') {
                    obj.citys.O.push(k_citys[keya]);
                  }else if (key == 'P') {
                    obj.citys.P.push(k_citys[keya]);
                  }else if (key == 'Q') {
                    obj.citys.Q.push(k_citys[keya]);
                  }else if (key == 'R') {
                    obj.citys.R.push(k_citys[keya]);
                  }else if (key == 'S') {
                    obj.citys.S.push(k_citys[keya]);
                  }else if (key == 'T') {
                    obj.citys.T.push(k_citys[keya]);
                  }else if (key == 'U') {
                    obj.citys.U.push(k_citys[keya]);
                  }else if (key == 'V') {
                    obj.citys.V.push(k_citys[keya]);
                  }else if (key == 'W') {
                    obj.citys.W.push(k_citys[keya]);
                  }else if (key == 'X') {
                    obj.citys.X.push(k_citys[keya]);
                  }else if (key == 'Y') {
                    obj.citys.Y.push(k_citys[keya]);
                  }else if (key == 'Z') {
                    obj.citys.Z.push(k_citys[keya]);
                  }
                }
              }
            }
          }
        }
        this.cityObj = obj.citys;
        this.isEmpty(obj);
      }
    },

    watch:{
      '$route'(newValue, oldValue){
        console.log(newValue)
        console.log(oldValue)}
    },
    created(){
      this.axios.get('../../static/China_Province.json').then(data=>{
        this.cities = data.data
      })
      this.axios.get('../../static/China_citys.json').then(data=>{
        this.searchCitys = data.data;
      })
      this.wheight = window.innerHeight;
      console.log(this.wheight)
      },
    updated () {
     if (this.$refs.inputSearch.value.length) {
          this.searchCity = true;
          var checkCity = this.$refs.checkCity;
          checkCity.style.height = this.wheight + 'px';
          checkCity.style.overflow = 'auto';
          if (!checkCity.innerHTML) {
            this.noneNull = true;
          }else{
            this.noneNull = false;
          }
        }else {
          this.searchCity = false;
          this.noneNull = false;
          this.$refs.checkCity.style.height = 0;
        }
    }
  }
</script>

<style lang="less" scoped >
  .local-city {
    width: 100%;
    height: 100%;
  }

  .c68cb78 {
    color: #68cb78 !important;
  }

  .is-actived {
    height: 2.06rem;
    overflow: hidden;
  }

  .slider-enter-active, .slider-leave-active, .weizhiw-enter-active, .weizhiw-leave-active {
    transition: all .5s;
  }

  .slider-enter, .slider-leave-to,.weizhiw-enter, .weizhiw-leave-to {
    height: 0;
    overflow: hidden;
  }

  .cBox {
    position: relative;
    width: 100%;
  }

  .none {
    position: absolute;
    top:calc(50% - 33rem);
    left: calc(50% - 24rem);

  }

  .fadeOn {
    background: rgba(0, 0, 0, .1);
    width: 100%;
    z-index: 9;
    }

  .remen(){
    width: 1.8rem;
    height: .66rem;
    line-height: .66rem;
    text-align: center;
    background-color: #fff;
    font-size: .25rem;
  }

  .mr-none {
    margin-right: 0;
  }

  h1 {
    padding: 0 0 0 .3rem;
    height: 1rem;
    line-height: 1rem;
    border-bottom: .045rem solid #e4e4e4;
    span {
      font-size: .8rem;
      color: #42bd56;
      margin-right: 1rem;
    }
    label {
      position: relative;
      top: -.15rem;
      color: #494949;
      font-size: .4rem;
    }
  }
  .inCityOroutCity {
    height: .8rem;
    display: flex;
    line-height: .8rem;
    p {
      width: 50%;
      height: 100%;
      text-align: center;
      font-size: .3rem;
      color:#9b9b9b;
    }
  }
  .line {
    display: flex;
    height: .03rem;
    align-items: center;
    background-color: #dfdfdf;
    margin-bottom: .2rem;
    span {
      width: 50%;
      height: .1rem;
    }
    .left-line {
      background-color: #42bd56;
    }
    .right-line {
      background-color: #42bd56;
    }
  }

  .local-search {
    height: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    p {
      position: relative;
      top: -.04rem;
      margin-left: 1rem;
      margin-right: .3rem;
    }

    .icon-search:before {
      font-size: .3rem;
      color: #9b9b9b;
    }
    input {
      height: 100%;
      width:75%;
      vertical-align: bottom;
      font-size: .3rem;
    }
  }
  .local-weizhi {
    width: 100%;
    margin-top: 3rem;
    box-sizing: border-box;
    height: 100%;
    background-color: #f4f4f4;
    padding: .31rem  .42rem;
    .dangqian {
       margin-bottom: .26rem;
      .remen();
    }
    .icon-location2 {
      font-size: .25rem;
      color:#42bd56;
    }
    h3 {
      font-size: .3rem;
      color: #9b9b9b;
      margin-bottom: .26rem;
    }

    .remen-city {
      margin-left: -.15rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        .remen();
        margin-top: .26rem;
      }
    }
  }
  .check-city {
    h3 {
      background-color: #f4f4f4;
      padding-left: .42rem;
      color : #9b9b9b;
      font-size: .25rem;
      height: .5rem;
      line-height: .5rem;
    }
    p {
      padding-left: .42rem;
      height: .7rem;
      line-height: .7rem;
      border-bottom: .01rem solid #f4f4f4;
    }
  }
  .z , #checkCity{
    background: #fff;
    z-index: 10;
    width: 100%;
  }

  #p {
    margin-left: 0 !important;
  }

  #chengshi {
    position: fixed;
    background: #fff;
    width: 100%;
    top: 0;
  }
</style>
