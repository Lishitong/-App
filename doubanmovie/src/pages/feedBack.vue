<template lang="html">
  <div class="bg">
    <div class="bgTop">
      <img src="../../static/howSeeback.png" @click="shezhiback()" alt="">
      <span>如何查看电影榜单？</span>

    </div>
    <main>
      <p>问题类型:帮助与反馈</p>
      <div class="button">
        <div v-for="(list,index) in navLists" :key="index" @click="reds(index)" :class="{ red:changeRed == index}" > {{list.img}}{{list.text}}</div>
      </div>
      <textarea @click="textareaClick()" ref="textC" class="textarea"  name="name" rows="8" cols="80">输入您的反馈详情</textarea>

    </main>
    <footer>
      <p>添加图片(选填,最多三张)</p>
      <img src="../../static/wilPut.png" alt="">
      <div class="call">
        <span>联系方式</span>
        <input type="text" name="" ref="textCT"  placeHolder="手机或者邮箱都可以哦">
      </div>
      <button type="button" name="button" @click="gologin()">提交</button>

    </footer>
      <p class="unlogin" v-if="unlogin">提交成功</p>
  </div>

</template>

<script>
export default {
  data() {
    return {
      navLists: [
        {
          text: "提建议",
          img: "√"
        },
        {
          text: "想咨询",
          img: "√"
        },
        {
          text: "要投诉",
          img: "√"
        }
      ],
      changeRed: 0,
      tshow: false,
      unlogin: false
    };
  },
  methods: {
    shezhiback() {
      history.back();
    },
    textareaClick() {
      // console.log(this.$refs.textC.value)
      this.$refs.textC.value = "";
      this.$refs.textC.style.color = "black";
    },

    change() {
      this.shows = false;
    },
    reds: function(index, img) {
      this.changeRed = index;
    },
    gologin() {
      this.unlogin = true;
      this.$refs.textC.value = "";
      this.$refs.textCT.value = "";
      setTimeout(() => {
        this.unlogin = false;
      }, 1500);
    }
  }
};
</script>

<style lang="css" scoped="scoped">
.bg {
  background-color: #f8f8f8;
  height: 11rem;
}
textarea {
  outline: none;
  overflow: hidden !important;
  resize: none !important;
  border: none !important;
  padding: 0 !important;
  color: #cec6cf;
  font-size: 0.2rem;
  font-weight: 600;
  padding: 0.2rem 0 0 0.2rem;
}
.bgTop {
  background-color: white;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;

  font-size: 0.3rem;
  font-weight: 700;
  border-bottom: 0.01rem solid #c6c7c7;
  margin-bottom: 0.2rem;
  text-align: center;
  overflow: hidden;
}
.bgTop img {
  width: 0.3rem;
  height: 0.3rem;
  float: left;
  margin: 0.25rem 0 0 0.25rem;
}
main p {
  color: #cec6cf;
  font-size: 0.3rem;
  font-weight: normal;
}
.button {
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.4rem;
}

.button > div {
  border: 0.01rem solid #c6c7c7;
  width: 24%;
  height: 0.5rem;
  text-align: center;
  font-size: 0.26rem;
  line-height: 0.5rem;
  color: #c6c7c7;
}
.iptbg {
  background-color: white;
  width: 100%;
  height: 2rem;
}
.red {
  color: white !important;
  display: block;
  background-color: #48b622;
  border-radius: 0.04rem;
  font-size: 0.3rem;
}
textarea {
  width: 100%;
  border: none;
}
p {
  font-size: 0.3rem;
  margin-left: 5%;
  line-height: 0.6rem;
  margin-bottom: 0.2rem;
}
p:nth-of-type(1) {
  font-weight: 800;
}
p:nth-of-type(3) {
  font-weight: 800;
  font-size: 0.26rem;
}
.howSee {
  width: 90%;
  margin: 5%;
}
footer p {
  color: #cec6cf;
  font-size: 0.3rem;
  /*font-weight:300;*/
}
footer img {
  width: 30%;
  margin-left: 5%;
}
footer .call {
  width: 100%;
  background-color: white;
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 0.2rem;
  font-size: 0.3rem;
  margin-bottom: 0.8rem;
  padding: 0;
}
footer .call input {
  float: right;
  margin-top: 0.25rem;
}
footer button {
  color: white !important;
  height: 0.6rem;
  background-color: #48b622;
  border-radius: 0.04rem;
  font-size: 0.3rem;
  width: 60%;
  margin-left: 20%;
}
.unlogin {
  position: absolute;
  left: 50%;
  margin-left: -2.5rem;
  top: 50%;
  margin-top: -3rem;
  width: 3rem;
  height: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 0.4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 0.26rem;
}
</style>
