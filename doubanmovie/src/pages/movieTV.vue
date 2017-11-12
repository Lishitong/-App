<template lang="html">
  <div class="movieTV">
    <div class="left lis">
      <img src="./../../static/list.png" alt="">
      <div class="">
        <h2>找电影</h2>
        <p>剧情/韩国/动作</p>
      </div>
    </div>
    <div class="right lis">
      <img src="./../../static/heart.png" alt="">
      <div class="">
        <h2>我的影视</h2>
        <p>未登录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.movieTV{
  width: 100%;
  overflow:hidden;
  padding: .3rem 0;
  display:flex;
  justify-content: space-around;
  border-bottom:1px solid #eee;
  h2{
    font-size: .3rem;
    font-weight: 700;
    padding:.05rem;
  }
  p{
    padding:.05rem;
    color:#ccc;
  }
  img{
    float: left;
    width: .7rem;
    height: .7rem;
    margin-left: .2rem
  }
  div{
    float: left;
    overflow:hidden;
    padding:0 .2rem;
  }
  .right{
    border-left:1px solid #eee;
  }
  .lis{
    z-index:0;
    position: relative;
    &:after{
      content:">";
      position: absolute;
      right:.1rem;
      top:.2rem;
      color:#ccc;
    }
  }
}
</style>
