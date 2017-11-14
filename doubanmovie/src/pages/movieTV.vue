<template lang="html">
  <div class="movieTV">
    <div class="left lis">
      <img src="./../../static/list.png" alt="">
      <div class="">
        <h2>找电影</h2>
        <p>剧情/韩国/动作</p>
      </div>
    </div>
    <div @click="login('login')" class="right lis">
      <img src="./../../static/heart.png" alt="">
      <div class="">
        <h2>我的影视</h2>
        <p>{{user}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user:'未登录',
    }
  },
  methods:{
    login(login){
      if (this.user == '未登录') {
        this.$router.push({path:'/'+login})
      }
    },
    getCookie(c_name){
    if (document.cookie.length>0)
      {
      var c_start=document.cookie.indexOf(c_name + "=")
      if (c_start!=-1)
      {
      c_start=c_start + c_name.length+1
      var c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
      return unescape(document.cookie.substring(c_start,c_end))
      }
      }
    return ""
    }
  },
  created(){
    if (this.getCookie('user')) {
      this.user = this.getCookie('user')
    }
  }
}
</script>

<style lang="less" >
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
