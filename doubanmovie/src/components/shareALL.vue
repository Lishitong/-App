<template lang="html">
  <div class="shareAll" v-if="shareA" >
    <div class="shareApp">
      <div class="">
        <img src="../../static/sharedbFM.png" alt="">
        <p>豆瓣</p>
      </div>
      <div class="">
          <img src="../../static/shareWeixin.png" alt="">
        <p>微信</p>
      </div>
      <div class="">
        <img src="../../static/shareFriends.png" alt="">
        <p>朋友圈</p>
      </div>
      <div class="">
            <img src="../../static/shareQQ.png" alt="">
        <p>QQ</p>
      </div>
      <div class="">
          <img src="../../static/shareQQKong.png" alt="">
        <p>QQ空间</p>
      </div>
      <div class="">
              <img src="../../static/shareWeiBo.png" alt="">
        <p>微博</p>
      </div>

      <div class="">
        <img src="../../static/shareTaobao.png" alt="">
        <p>淘宝</p>
      </div>
      <div class="">
        <img src="../../static/shareQQClient.png" alt="">
        <p>浏览器</p>
      </div>








    </div>
    <div class="shareBrowser">

      <img src="../../static/copy.png" alt="">
      <p>复制链接</p>
    </div>
    <p class="close" @click="closeShare()"><span>取消</span></p>
  </div>
</template>

<script>
export default {
  props: ["share"],
  data() {
    return {
      shareA: true
    };
  },
  methods: {
    closeShare() {
      this.shareA = false;
      this.share(this.shareA);
    }
  }
};
</script>

<style lang="css" scoped>
.shareAll {
  border-top: 1px solid #eeeeee;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2313213;
  background-color: #fff;
}
.shareApp {
  overflow: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shareApp div {
  width: 0.8rem;
  text-align: center;

  margin: 0.2rem 0;
}
.shareApp div img {
  width: 0.8rem;
  height: 0.8rem;
  border: 1px solid #eeeeee;
  border-radius: 0.1rem;
}
.shareBrowser div {
  margin: 0.2rem;
  width: 0.8rem;
}
.shareBrowser img {
  width: 0.8rem;
  height: 0.8rem;

  /*border: 1px solid #eeeeee;*/
  /*border-radius: .1rem;*/
}
.close {
  width: 100%;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
  border-top: 0.01rem solid #eeeeee;
  padding: 0;
  margin: 0;
  /*margin-bottom: 1rem;*/
}
</style>
