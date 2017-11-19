<template>
  <!-- 给路由组件添加动画效果 -->
  <!-- 单个路由的过渡 -->
  <transition :name="opacityShow">
    <div class="check-city">
      <h1>
        <span @click="back">&lt;</span>
        <label>选择城市</label>
      </h1>
      <ol>
        <!-- 遍历城市对象，并根据索引分类显示 -->
        <li v-for="(city, index) in cities" :key= "index">
          <h3>{{ index }}</h3>
          <!-- 绑定事件，重定向至首页，并将当前城市传为路由查询参数 -->
          <p v-for="cit of city" @click="inde(cit)" > {{ cit }}</p>
        </li>
      </ol>
    </div>
  </transition>

</template>

<script>
export default {
  data() {
    return {
      // 获取的城市列表
      cities: {},
      // 本想做多个路由的翻页效果。结果只做了个单路由透明度效果
      opacityShow: "opacityShow"
    };
  },
  methods: {
    // 重定向至首页，并将当前城市做为查询参数传入路由，由首页根据查询参数修改当前城市名
    inde(cit) {
      this.$router.push({
        path: "index",
        query: {
          city: cit
        }
      });
    },
    back() {
      this.$router.back();
    }
  },
  // 组件挂载结束
  created() {
    // 获取城市列表对象
    this.axios.get("../../static/Chian_city.json").then(data => {
      // 根据json格式，进行数据剥取。取得自己需求
      for (let city of data.data.provinces) {
        // 判断一级城市组件传入的 路径参数 来展示对应的 二级城市
        if (this.$route.params.id == city.id) {
          // 将对应的二级城市 赋予 即将进行遍历的 城市列表对象
          this.cities = city.citys;
          console.log(city.citys)
          // 如果当前传入的路径参数，所代表的一级城市下的二级城市内容为空
          // 则取消路由动画，并直接跳转至首页，将其一级城市作为查询参数传入。由首页接收并改变当前城市值
          if (!city.citys) {
            this.opacityShow = "";
            this.$router.push({
              path: "index",
              query: {
                city: city.name
              }
            });
          }
        }
      }
    });
  }
};
</script>

<style lang="less" scoped>
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

// 动画进入时，需要触发的动画效果配置
.opacityShow-enter-active {
  transition: all 1s;
}

// 动画离开时，需要触发的动画效果配置
.opacityShow-leave-active {
  transition: none;
}

// 动画开始进入
.opacityShow-enter {
  opacity: 0;
}
</style>

