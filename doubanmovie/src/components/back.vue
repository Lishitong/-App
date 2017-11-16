<template lang="html">
  <div class="back">
    <div>
      <img @click="back" src="./../../static/arrow.png" alt="">
      <span>{{title}}</span>
    </div>
    <img src="./../../static/share.png" alt="">
  </div>
</template>

<script>
export default {
  name:'back',
  props:['title'],
  methods:{
    back(){
      history.back();
    },
  },
}
</script>

<style lang="less">
.back{
  background-color:#fff;
  width: 100%;
  position: fixed;
  z-index:2;
  top: 0;
  height: .8rem;
  border-bottom:1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div{
    display: flex;
    align-items: center;
  }
  span{
    font-size: .25rem;
  }
  img{
    width: .3rem;
    height: .3rem;
    margin: 0 .2rem;
  }
}
</style>
