<template lang="html">
  <div id="xiang3">
    <div class="xq-top">
      <h1 class="lastpage" @click="back"></h1>
      <h1 class="zhuanfa">确定</h1>
    </div>
    <div class="tit">
      <p @click="left">想看</p>
      <p @click="right">看过</p>
    </div>
    <div class="kanm" v-if="flag">
      <h1>为电影打标签</h1>
      <p>
        <span>美国</span>
        <span>DCEU</span>
        <span>2017</span>
        <span>DC</span>
      </p>
      <p>
        <span>奇幻</span>
        <span>科技</span>
        <span>科幻</span>
        <span>动作</span>
      </p>
      <p>
        <span>系列</span>
        <span>魔幻</span>
        <span>看电影</span>
        <span>+新标签</span>
      </p>
      <p>
        <span>超级英雄</span>
        <span>漫画改编</span>
        <span>科幻</span>
        <span>动作</span>
      </p>
    </div>
    <div class="kanm" v-else>
       <h1>点击星星评分</h1>
        <div class="s">
          <div id="s1" class="stars">
             <img src="../../static/img/gray.png" alt=""  @touchend="down($event)">
              <div class="starsbox" :style="{width:num*0.2+'rem'}">
                  <img src="../../static/img/huang.png" alt="" >
               </div>
          </div>
        </div>
    </div>
    <div class="tex">
      <textarea id="tex2" name="name" rows="8" cols="80">
        记录一下想看的理由
      </textarea>
      <p>❤发布后分享到微信、微博</p>
    </div>
    <div id="bott1">
      <h1><label></label><span>同步到</span><label></label></h1>
      <p>☀豆瓣广播</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
       flag:false,
       num:10
    }
  },
  methods:{
    back() {
     history.back()
   },
   left() {
     this.flag=true
   },
   right() {
    this.flag=false
  }
  }
}
</script>

<style lang="css">
#xiang3{
  width: 100%;
}
#xiang3 .xq-top{
  background: #fff;
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
#xiang3 .lastpage,#xiang3 .zhuanfa {
  width: .3rem;
  height: .3rem;
  background: url(../../static/del.png) no-repeat top/100% 100%;
  margin-left: .1rem;
}
#xiang3 .zhuanfa {
  width: 1rem;
  height: .6rem;
  text-align: center;
  line-height: .6rem;
  background: orange;
  margin-right: .2rem;
  color: #fff;
  font-size: .25rem;
  font-weight: 900;
}
#xiang3 .tit {
  margin-top: .8rem;
  width: 100%;
  height: 1rem;
  border-bottom: .01rem solid lightgray;
  font-size: .3rem;
  font-weight: 900;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#xiang3 .kanm {
  width: 100%;
}
#xiang3 .kanm h1 {
  width: 100%;
  height: .8rem;
  line-height: .8rem;
  text-align: center;
  color: gray;
}
#xiang3 .kanm p {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
#xiang3 .kanm p span {
  display: inline-block;
  width: 1.2rem;
  height: .6rem;
  line-height: .6rem;
  border: .01rem solid lightgray;
  border-radius: 1rem;
  margin-right: .2rem;
}
#xiang3 .tex {
  margin: 0 auto;
  margin-top: .5rem;
  width: 90%;
  height: 2rem;
}
#xiang3 #tex2 {
  width: 100%;
  height: 2rem;
  line-height: .8rem;
  color: gray;
}
#xiang3 .tex p {
  width: 100%;
  height: .8rem;
  line-height: .8rem;
  text-align: center;
}
#xiang3  #bott1 {
  width: 100%;
  height: 1.5rem;
  position: fixed;
  bottom: 0;
}
#bott1 h1 {
  width: 100%;
  height: .8rem;
  line-height: .8rem;
  text-align: center;
}
#bott1 h1 label {
  display: inline-block;
  width: 40%;
  height: .1rem;
  border-top: .01rem solid lightgray;
}
#bott1 h1 span {
  margin-left: .1rem;
  margin-right: .1rem;
}
#bott1 p {
  width: 100%;
  height: .7rem;
  line-height: .7rem;
  text-align: center;
}
#xiang3 .stars {
  height: .4rem;
  line-height: .4rem;
  width:2rem;
  position: relative;
  display: inline-block;
}
#xiang3 .starsbox{
  overflow: hidden;
  position:absolute;
  height: .35rem;
}
#xiang3 .stars img{
  width: 2rem;
  position:absolute;
  height: .4rem;
}
#xiang3 .s {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
}
</style>
