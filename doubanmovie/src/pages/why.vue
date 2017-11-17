<template lang="html">
  <div class="">
    <div class="bgTop">
      <img src="../../static/howSeeback.png" @click="shezhiback()" alt="">
      <span>影评/短评为什么会被折叠?</span>
      <img src="../../static/share.png"  @click="s()" alt="">
    </div>
    <p>影评/短评为什么会被折叠?</p>
    <p>如果发布者的帐号有异常操作，会对排序和展示有一些影响。但评论仍可以被展开阅读，对发布人的帐号不造成其他影响。这种影响会随着帐号行为的正常或异常而变化。这是一个相对长期的调整，对判断的准确性我们也会不断的进行校准。</p>
    <p>异常状态通常是暂时性的，你的下一次电影收藏动作(包含评分、短评、长评等) 均会更新帐号状态，重新判断。</p>
    <p>
      <p>同时提醒你: 如果你并没有过异常操作，那么可能需要你注意一下下列情况:</p>
      <p>1) 修改你的帐号密码，情况;防止帐号已经外泄的</p>
    </p>
    <p>2) 慎用第三方插件，使用插件要明确它获得你的哪些权限，防止在不觉中就“被代表”。</p>


    <div id="sharesALLS" v-if="Share">
      <shareALLS :share="Shares"></shareALLS>
    </div>
  </div>
</template>

<script>
import shareALLS from "../components/shareALL";
export default {
  name: "sharesALLS",
  components: {
    shareALLS
  },
  data() {
    return {
      Share: false
    };
  },
  methods: {
    shezhiback() {
      history.back();
    },
    s() {
      this.Share = true;
    },
    Shares(a) {
      this.Share = a;
    }
  }
};
</script>

<style lang="css" scoped="scoped">
.bgTop {
  background-color: white;
  /*width: 100%;*/
  height: 0.8rem;
  line-height: 0.8rem;
  /*text-align: center;*/
  font-size: 0.3rem;
  font-weight: 700;
  border-bottom: 0.01rem solid #c6c7c7;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: space-around;
}
.bgTop img {
  width: 0.3rem;
  height: 0.3rem;
  margin-top: 0.25rem;
}
p {
  font-size: 0.3rem;
  margin-left: 5%;
  margin-right: 5%;
  line-height: 0.5rem;
  margin-bottom: 0.1rem;
  font-weight: 500;
  text-indent: 0.6rem;
}
p:nth-of-type(1) {
  font-weight: 800;
  font-size: 0.36rem;
}

.howSee {
  width: 90%;
  margin: 5%;
}
</style>
