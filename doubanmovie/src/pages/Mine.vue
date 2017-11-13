<template lang="html">

  <div class="">
    <div class="top">
      <img class="shezhi" @click="shezhi('shezhi')" src="../../static/shezhi.png" alt="">
      <div class="login">
        <img class="loginImg" @click="login('login')" src="../../static/login.png" alt="">
        <span id="loginSpan"  @click="login('login')">未登录</span>
      </div>
    </div>


      <div class="Sees">
        <router-link :class="{'router-link-active':ok}"   class="  See" to='/Mine/wantSee'>想看</router-link>
        <router-link class="See" to="/Mine/nowSee">在看</router-link>
        <router-link class="See" to="/Mine/sew">看过</router-link>
        <router-link class="See" to="/Mine/seeSpeak">影评</router-link>
        <router-link class="See" to="/Mine/movieMen">影人</router-link>
      </div>
      <router-view></router-view>



</div>
</template>

<script>
  export default {
    props: ['show'],
    data(){
      return {
        ok:true
      }
  },
  methods:{
    shezhi(shezhi){
      this.$router.push({path:'/'+shezhi})
    },
    login(login){
      this.$router.push({path:'/'+login})
    }
  },
  watch:{
    '$route'(newValue,oldValue){
          this.ok=false;
    }
  },
  // created () {
  //   if (this.$route.path != '/Mine/wantSee'&&  this.ok==true ) {
  //     this.ok = false;
  //   }
  // }
    created(){
      if(  document.cookie.u==8){
        console.log('aa')
      }
    }

  // props: ['show']
  }
</script>


<style lang="less" scoped>
.shezhi{
      width:.4rem;
      height:.4rem;
      float:right;
      padding:.4rem;
    }
  .top{
    width: 100%;
    height:3rem;
    background:url('../../static/dbminebg.png')  no-repeat;
    background-size: 100% 3rem;
  }
  .login{
    padding:.8rem;
  }
  .loginImg{
    width:.8rem;
    height:.8rem;
    vertical-align:middle;
  }
  #loginSpan {
    font-size:.3rem;
    color:white;
    font-wight:800;
    padding:.1rem;
    vertical-align:middle;
  }
  .Sees{
    display: flex;
    width:100%;
    justify-content: space-around;
    font-size:.3rem;
    color:#432443;
  }
  .Sees .See{
      margin-top:.2rem;
      color:gray;
      display:inline-block;
      padding-bottom:.2rem;

  }
  .Seemoren{
    // border-bottom:.02rem solid #666;
  }
  .router-link-active{
      color:black!important;
      border-bottom:.02rem solid black!important;
  }
</style>
