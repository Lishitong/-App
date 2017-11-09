<template lang="html">
  <div>
    <div class="tabtop">
      <div class="city">
        <p>北京</p>
        <span></span>
      </div>

      <input class="tabtop-search" type="text" placeholder="电影 / 电视剧 / 影人">
    </div>
    <div class="tabbar">
      <router-link to="/HotPlay" :class="{'click' : hot}" @click.native="click(true, false, false)">
        <p class="icon-i_pishafahuli" ></p>
        热映
      </router-link>
      <router-link to="/FindMovie" :class="{'click' : find}" @click.native="click(false, true, false)">
        <p class="icon-eye"></p>     
        找片
      </router-link>
      <router-link to="/Mine" :class="{'click' : my}" @click.native="click(false, false, true)">
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
        hot : true,
        find : false,
        my : false
      }
    },
    methods : {
      click(tag1, tag2, tag3){
        this.hot = tag1;
        this.find = tag2;
        this.my = tag3;
      }
    } 
  }
</script>

<style lang="less" scoped>
@fixed :  fixed ;
@ab : #ababab;
@h08: .8rem;

.fixed-bottom(){
  position : @fixed;
  bottom: 0;
  left : 0;
}
.fixed-top(){
  position: @fixed;
  top: 0;
  left: 0;
}

.flex-config(){
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
}

.tabtop {
  .fixed-top();
  .flex-config();
  .city {
    width: .8rem;
    height: @h08;
    display: flex;
    align-items: center;
    font-size: .3rem;
  }
  .city>span:after {
    content: '';
    border: .01rem solid #000;
    display: inline-block;
    width:.15rem;
    height: .15rem;
    transform:rotate(45deg);  
  }
  .tabtop-search {
    background: url(../../static/search.png) no-repeat 1.3rem center;
    background-size: .3rem;
    background-color: #f5f5f5;
    width: 6rem;
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
  a  {
    width:2rem;
    font-size: .2rem;
    text-align: center;
    color: @ab;
    }
  }
.click {
    color : #494949 !important;   
  }
</style>

