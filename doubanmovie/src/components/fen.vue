<template lang="html">
  <div class="fen">
    <div class="fentop">
      <div class="f">
        <img src="../../static/fen/dou.png" alt="">
        <p>豆瓣</p>
      </div>
      <div class="f">
        <img src="../../static/fen/qq.png" alt="">
        <p>QQ</p>
      </div>
      <div class="f">
        <img src="../../static/fen/kong.png" alt="">
        <p>QQ空间</p>
      </div>
      <div class="f">
        <img src="../../static/fen/wei.png" alt="">
        <p>微信</p>
      </div>
    </div>
    <div class="fentop">
      <div class="f">
        <img src="../../static/fen/fu.png" alt="">
        <p>复制</p>
      </div>
      <div class="f">
        <img src="../../static/fen/bo.png" alt="">
        <p>微博</p>
      </div>
      <div class="f">
        <img src="../../static/fen/liu.png" alt="">
        <p>QQ浏览器</p>
      </div>
      <div class="f">
        <img src="../../static/fen/bai.png" alt="">
        <p>百度云</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css">
.fen {
  width: 100%;
  background: #ffe;
  font-size: 0.2rem;
}
.fentop {
  padding-top: 0.5rem;
  padding-bottom: 0.3rem;
  width: 100%;
  text-align: center;
  border-bottom: 0.01rem solid #ddd;
}
.fentop .f {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  color: gray;
}
.fentop .f p {
  width: 1.5rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
}
.fentop .f img {
  border: 0.01rem solid #ddd;
  border-radius: 0.1rem;
  width: 1rem;
  height: 1rem;
}
</style>
