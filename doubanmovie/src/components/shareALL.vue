<template lang="html">
  <div class="shareAll" v-if="shareA" >
    <div class="shareApp">
      <img src="../../static/sharedbFM.png" alt="">
      <img src="../../static/shareWeixin.png" alt="">
      <img src="../../static/shareFriends.png" alt="">
      <img src="../../static/shareQQ.png" alt="">
      <img src="../../static/shareQQKong.png" alt="">
      <img src="../../static/shareWeiBo.png" alt="">
    </div>
    <div class="shareBrowser">
      <img src="../../static/shareSafari.png" alt="">
      <img src="../../static/copy.png" alt="">
    </div>
    <p class="close" @click="closeShare()"><span>取消</span></p>
  </div>
</template>

<script>
export default {
  props:["share"],
  data(){
    return{
      shareA:true
    }
  },
  methods:{

    closeShare(){
      this.shareA=false;
      this.share(this.shareA);
    }
  }
}
</script>

<style lang="css">
.shareApp{
  overflow:auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shareApp img{
  width: 1.05rem;
  height: 1.65rem;
}
.shareBrowser img{
  width: 1.05rem;
  height: 1.65rem;
}
.close{
  width: 100%;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
  border-top: .01rem solid #C6C7C7;
  padding: 0;
  margin:0;
  margin-bottom: 1rem;
}
</style>
