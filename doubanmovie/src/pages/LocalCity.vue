<template lang="html">
    <div class="local-city" >
    <div class="inOrout">
      <div id="chengshi">
         <!-- 搜索动画特效，上拉效果 -->
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
           <!-- 通过 input 事件 ， 获取输入的值发送请求获取匹配内容。 -->
           <!-- 绑定 focus 事件 ， 激活输入框，弹出遮罩层，并取消 Body 的 scroll 事件 -->
          <input type="text" ref="inputSearch" id="input-search" @focus="activ()"  @input="searchData(searchCitys)" v-model="changeCity"  placeholder="输入城市名称查询" />
          <div class="cBox">
             <!-- 用来存放匹配到的城市列表 -->
            <div id="checkCity" ref="checkCity">
               <!-- 遍历匹配到的城市列表 -->
              <div class="check-city z" v-for="(city, index) in cityObj" :key="index" v-if="searchCity">
                 <!-- 按需求 提出 A~Z 的索引属性 -->
                <h3>{{ index }}</h3>
                 <!-- 遍历 A~Z 里面存的值，并展示。 且给每个值绑定点击事件 进行路由 重定向 至首页 -->
                <p id="p" v-for="c in city" @click="inde(c)">
                  {{ c }}
                </p>
              </div>
            </div>
             <!-- 判断输入的城市是否在列表中存在，如果无，即显示该信息 -->
            <h3 v-show="noneNull" class="none"> {{ msg }} </h3>
          </div>
           <!-- 遮罩层 ， 并绑定点击事件 取消搜索框 -->
          <div ref="zhezhaoc" :class="{'fadeOn': zhezhao}"  @click="acti"></div>
        </div>
      </div>
       <!-- v-if 判断当前是否处于动画效果状态。此处感觉更偏向于使用 v-show -->
      <div class="local-weizhi" v-if="active">
        <h3>GPS定位城市</h3>
         <!-- 定位组件 -->
        <Localtion />
        <h3 class="remen">热门城市</h3>
         <!-- 遍历热门城市列表，并给其添加点击事件。点击路由重定向至首页 -->
        <ul class="remen-city">
          <li v-for="(city, index) in remen" :key="index" @click="inde(city)" > {{ city }} </li>
        </ul>
      </div>
      <div class="local-weizhi" :style="{ marginTop: '1rem' }" v-else>
        <h3>GPS定位城市</h3>
        <Localtion />
        <h3 class="remen">热门城市</h3>
        <ul class="remen-city">
          <li v-for="(city, index) in remen" :key="index" @click="inde(city)" > {{ city }} </li>
        </ul>
      </div>
      <div class="check-city">
         <ol>
          <!-- 遍历显示一级城市列表 -->
          <li v-for="(city, index) in cities" :key= "index">
             <!-- 显示一级城市列表中的下标 A~Z -->
            <h3>{{ index }}</h3>
             <!-- 遍历显示一级城市列表中存放的内容 （一级城市名）， 并绑定点击事件，根据一级城市名id 进入对应的二级城市列表 -->
            <p v-for="cit of city" @click="sonCity(cit.id)"> {{ cit.name }} </p>
          </li>
        </ol>
      </div>
    </div>

  </div>
</template>

<script>
import Localtion from "../components/Location.vue";

export default {
  data() {
    return {
      // 存放一级城市列表名
      cities: {},
      // citys: [],
      // 控制国内或海外样式，待续
      open: true,
      // 同上
      close: false,
      //
      // mr: true,
      // 判断是否处于搜索城市状态 true = 关闭
      active: true,
      // 判断是否需要遮罩
      zhezhao: false,
      // 写死的热门城市列表
      remen: [
        "北京",
        "上海",
        "广州",
        "深圳",
        "成都",
        "武汉",
        "杭州",
        "重庆",
        "郑州",
        "南京",
        "西安",
        "苏州",
        "天津",
        "长沙",
        "福州"
      ],
      // 输入框内容
      changeCity: "",
      // 所有二级城市数据
      searchCitys: {},
      // 匹配整理后的城市列表对象
      cityObj: {},
      // 判断是否需要开启  显示搜索结果 默认关闭
      searchCity: false,
      // 当前屏幕高度，用来判断遮罩层的高度
      wheight: 0,
      // 展示搜索不到内容时的数据
      msg: "没有这个地方哟，或者没有收录哟",
      // 判断是否需要展示 以上数据
      noneNull: false,
      // 标识位，是否动态添加遮罩高度
      count: true
    };
  },
  components: {
    Localtion
  },
  methods: {
    back() {
      history.back();
    },
    // 输入框激活事件
    activ() {
      // 修改 active 的值，将动画造成的空白 替换
      this.active = false;
      // 开启遮罩层
      this.zhezhao = true;
      // 将当前的屏幕高度赋给遮罩层
      if (this.count) {
        this.$refs.zhezhaoc.style.height = window.innerHeight + "px";
        this.count = false;
      }
      // 禁止body的 滚动条
      document.body.style.overflow = "hidden";
    },
    // 遮罩层事件。点击取消搜索
    acti() {
      // 关闭遮罩层
      this.zhezhao = false;
      // 将动画产生空白时的替代品关掉
      this.active = true;
      // 开启Body的滚动条
      document.body.style.overflow = "auto";
    },
    // 一级城市动态传参（路径参数），跳转二级城市组件。
    // 二级城市组件根据动态路径参数渲染对应城市
    sonCity(city) {
      this.$router.push({
        path: "Citys/" + city
      });
    },
    // 首页重定向，并将选择的城市作为 查询参数 传入首页。
    inde(cit) {
      this.$router.push({
        path: "/HotPlay",
        query: {
          city: cit
        }
      });
    },
    // 对象去空。
    isEmpty(obj) {
      // 遍历对象里的城市列表。
      for (var key in obj.citys) {
        // 根据当前城市列表是否有值，决定删除或保留
        if (!obj.citys[key].length) {
          delete obj.citys[key];
        }
      }
      // 返回去空后的对象
      return obj;
    },
    // 对搜索数据进行 格式化处理 并返回
    searchData(data) {
      // 固定搜索内容，方便。减少代码
      const search = this.changeCity;
      // 需要遍历的数据
      const d_citys = data.citys;
      // 固定个对象，来保留处理的数据
      const obj = {
        // 城市，按需求排列。对搜索数据模糊查询后返回的新数据  进行按需添加
        citys: {
          A: [],
          B: [],
          C: [],
          D: [],
          E: [],
          F: [],
          G: [],
          H: [],
          I: [],
          J: [],
          K: [],
          L: [],
          M: [],
          N: [],
          O: [],
          P: [],
          Q: [],
          R: [],
          S: [],
          T: [],
          U: [],
          V: [],
          W: [],
          X: [],
          Y: [],
          Z: []
        }
      };
      // search = this.changeCity 搜索内容
      // 如果有搜索内容，则进行匹配
      if (search) {
        // 根据自己的json数据 来进行深层遍历。 （可用递归）
        // 目的就是为了拿到所有的二级城市
        for (var keys in d_citys) {
          const ks_citys = d_citys[keys];
          for (var key in ks_citys) {
            const k_citys = ks_citys[key];
            for (var keya in k_citys) {
              // 最终拿到二级城市， 然后将 搜索内容 与其匹配
              // 如果存在 则按找原先JSON格式下的 key 值 进行分配添加
              if (k_citys[keya].indexOf(search) !== -1) {
                if (key == "A") {
                  obj.citys.A.push(k_citys[keya]);
                } else if (key == "B") {
                  obj.citys.B.push(k_citys[keya]);
                } else if (key == "C") {
                  obj.citys.C.push(k_citys[keya]);
                } else if (key == "D") {
                  obj.citys.D.push(k_citys[keya]);
                } else if (key == "E") {
                  obj.citys.E.push(k_citys[keya]);
                } else if (key == "F") {
                  obj.citys.F.push(k_citys[keya]);
                } else if (key == "G") {
                  obj.citys.G.push(k_citys[keya]);
                } else if (key == "H") {
                  obj.citys.H.push(k_citys[keya]);
                } else if (key == "I") {
                  obj.citys.I.push(k_citys[keya]);
                } else if (key == "J") {
                  obj.citys.J.push(k_citys[keya]);
                } else if (key == "K") {
                  obj.citys.K.push(k_citys[keya]);
                } else if (key == "L") {
                  obj.citys.L.push(k_citys[keya]);
                } else if (key == "M") {
                  obj.citys.M.push(k_citys[keya]);
                } else if (key == "N") {
                  obj.citys.N.push(k_citys[keya]);
                } else if (key == "O") {
                  obj.citys.O.push(k_citys[keya]);
                } else if (key == "P") {
                  obj.citys.P.push(k_citys[keya]);
                } else if (key == "Q") {
                  obj.citys.Q.push(k_citys[keya]);
                } else if (key == "R") {
                  obj.citys.R.push(k_citys[keya]);
                } else if (key == "S") {
                  obj.citys.S.push(k_citys[keya]);
                } else if (key == "T") {
                  obj.citys.T.push(k_citys[keya]);
                } else if (key == "U") {
                  obj.citys.U.push(k_citys[keya]);
                } else if (key == "V") {
                  obj.citys.V.push(k_citys[keya]);
                } else if (key == "W") {
                  obj.citys.W.push(k_citys[keya]);
                } else if (key == "X") {
                  obj.citys.X.push(k_citys[keya]);
                } else if (key == "Y") {
                  obj.citys.Y.push(k_citys[keya]);
                } else if (key == "Z") {
                  obj.citys.Z.push(k_citys[keya]);
                }
              }
            }
          }
        }
      }

      // 将处理后的对象进行去空
      this.isEmpty(obj);
      // 将去空后的对象赋给将要进行展示的城市列表
      this.cityObj = obj.citys;
    }
  },
  // 组件挂载结束
  created() {
    // 请求一级城市
    this.axios.get("../../static/China_Province.json").then(data => {
      this.cities = data.data;
    });
    // 请求所有的二级城市
    this.axios.get("../../static/China_citys.json").then(data => {
      this.searchCitys = data.data;
    });
    // 获取当前的屏幕高度
    this.wheight = window.innerHeight;
  },
  // 数据更新后
  updated() {
    // 判断输入框是否有内容，如果有。则进行处理
    if (this.changeCity.length) {
      // 开启 搜索内容 显示
      this.searchCity = true;
      // 声明变量保存 搜索内容
      let checkCity = this.$refs.checkCity;
      // 赋予搜索内容框的 高
      checkCity.style.height = this.wheight + "px";
      // 如果匹配内容 高于 屏幕高时自动开启滚动
      checkCity.style.overflow = "auto";
      // 如果显示框里的内容不为空 则表示，匹配成功，关闭提示信息
      if (!checkCity.innerHTML) {
        this.noneNull = true;
      } else {
       // 如果显示框里的内容为空 则表示，匹配失败，开启提示信息
        this.noneNull = false;
      }
    }
    // 如果内容为空，则关闭提示信息，关闭搜索结果框，将其高度设为 0 ;
    else {
      this.searchCity = false;
      this.noneNull = false;
      this.$refs.checkCity.style.height = 0;
    }
  }
};
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

.slider-enter-active,
.slider-leave-active,
.weizhiw-enter-active,
.weizhiw-leave-active {
  transition: all 0.5s;
}

.slider-enter,
.slider-leave-to,
.weizhiw-enter,
.weizhiw-leave-to {
  height: 0;
  overflow: hidden;
}

.cBox {
  position: relative;
  width: 100%;
}

.none {
  position: absolute;
  top: calc(50% - 33rem);
  left: calc(50% - 24rem);
}

.fadeOn {
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 9;
}

.remen() {
  width: 1.8rem;
  height: 0.66rem;
  line-height: 0.66rem;
  text-align: center;
  background-color: #fff;
  font-size: 0.25rem;
}

.mr-none {
  margin-right: 0;
}

h1 {
  padding: 0 0 0 0.3rem;
  height: 1rem;
  line-height: 1rem;
  border-bottom: 0.045rem solid #e4e4e4;
  span {
    font-size: 0.8rem;
    color: #42bd56;
    margin-right: 1rem;
  }
  label {
    position: relative;
    top: -0.15rem;
    color: #494949;
    font-size: 0.4rem;
  }
}
.inCityOroutCity {
  height: 0.8rem;
  display: flex;
  line-height: 0.8rem;
  p {
    width: 50%;
    height: 100%;
    text-align: center;
    font-size: 0.3rem;
    color: #9b9b9b;
  }
}
.line {
  display: flex;
  height: 0.03rem;
  align-items: center;
  background-color: #dfdfdf;
  margin-bottom: 0.2rem;
  span {
    width: 50%;
    height: 0.1rem;
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
    top: -0.04rem;
    margin-left: 1rem;
    margin-right: 0.3rem;
  }

  .icon-search:before {
    font-size: 0.3rem;
    color: #9b9b9b;
  }
  input {
    height: 100%;
    width: 75%;
    vertical-align: bottom;
    font-size: 0.3rem;
  }
}
.local-weizhi {
  width: 100%;
  margin-top: 3rem;
  box-sizing: border-box;
  height: 100%;
  background-color: #f4f4f4;
  padding: 0.31rem 0.42rem;
  .dangqian {
    margin-bottom: 0.26rem;
    .remen();
  }
  .icon-location2 {
    font-size: 0.25rem;
    color: #42bd56;
  }
  h3 {
    font-size: 0.3rem;
    color: #9b9b9b;
    margin-bottom: 0.26rem;
  }

  .remen-city {
    margin-left: -0.15rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      .remen();
      margin-top: 0.26rem;
    }
  }
}
.check-city {
  h3 {
    background-color: #f4f4f4;
    padding-left: 0.42rem;
    color: #9b9b9b;
    font-size: 0.25rem;
    height: 0.5rem;
    line-height: 0.5rem;
  }
  p {
    padding-left: 0.42rem;
    height: 0.7rem;
    line-height: 0.7rem;
    border-bottom: 0.01rem solid #f4f4f4;
  }
}
.z,
#checkCity {
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
