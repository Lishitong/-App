<template lang="html">
  <div>
    <div v-if="show" class="show">
      <div class="tabtop">
        <div class="city" v-if="showIn">
          <p>北京</p>
          <span></span>
        </div>
        <input class="tabtop-search" type="text" placeholder="电影 / 电视剧 / 影人">
      </div>
    </div>    
    
    <div class="tabbar">
      <router-link to="/HotPlay"  @click.native="click(true, true)">
        <p class="icon-i_pishafahuli" ></p>
        热映
      </router-link>
      <router-link to="/FindMovie" @click.native="click(true, false)">
        <p class="icon-eye"></p>     
        找片
      </router-link>
      <router-link to="/Mine"  @click.native="click(false, false)">
        <p class="icon-wode"></p>
        我的
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name : "tabbar",
    data () {
      return {
        show : true,
        showIn : true
      }
    },
    methods : {
      click(show, showIn){
        this.show = show;
        this.showIn = showIn;
        if (document.querySelector('.tabtop-search')) {
          if (show == true && showIn == false) {
          var inputTag = document.querySelector('.tabtop-search');
          inputTag.style.width = '7rem';
          inputTag.style.backgroundPositionX = '1.8rem';
         }else{
          var inputTag = document.querySelector('.tabtop-search');
          inputTag.style.width = '5.6rem';
          inputTag.style.backgroundPositionX = '.8rem';
         }
        }
      }
    },
    
  }
</script>

<style lang="less" scoped>
@fixed :  fixed ;
@ab : #ababab;
@h08: .8rem;

.show {
  width: 100%;
  height: 100%;
}

.fixed-bottom(){
  position : @fixed;
  bottom: 0;
  left : 0;
  background-color: #fff;
  
}
.fixed-top(){
  position: @fixed;
  top: 0;
  left: 0;
  background-color: #fff;
}

.flex-config(){
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
}

.show {
  margin-bottom: 1rem;
}

.tabtop {
  .fixed-top();
  .flex-config();
  .city {
    width: 1.1rem;
    height: @h08;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .3rem;
  }
  .city>p {
    margin-right: .03rem;
  }
  .city>span {
    position: relative;
    width: .4rem;
    height: .2rem;
    overflow: hidden;
    line-height: 0;
    top: .05rem;
  }
  .city>span:after {
    content: '◇';
    font-size: .4rem;
    position: absolute;
    top: 0;
  }
  .tabtop-search {
    background: url(../../static/search.png) no-repeat .8rem center;
    background-size: .3rem;
    background-color: #f5f5f5;
    width: 5.6rem;
    height: @h08;
    font-size: .3rem;
    border-radius: .2rem;
    text-align: center;
  }
}

.tabbar {
  .fixed-bottom();
  .flex-config();
  border-top: 1px solid #f0f0f0;
  a {
    width:2rem;
    font-size: .2rem;
    text-align: center;
    color: @ab;
  }
}
.router-link-active {
    color : #494949 !important;   
}
</style>

