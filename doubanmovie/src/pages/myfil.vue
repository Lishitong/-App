<template lang="html">
  <div class="bg">
    <div class="bg-ui">
      <div class="bgTop">
        <img src="../../static/shezhiback.png" @click="shezhiback()" alt="">
        <span>我的电影票</span>
      </div>
  </div>
  <main>
    <img src="../../static/Kong.png" alt="">
    <p>你还没有购买过电影票</p>
    <p>在线选座,随时购买，无需排队</p>
    <button type="button" name="button" @click="hotPlay()">查看上映电影</button>
  </main>



  </div>

</template>

<script>
export default {
  data(){
    return {
        bol:false,
        footer:false
    }

  },
  methods:{
    shezhiback() {
      history.back()
  },
  hotPlay(){
    this.$router.push({path:'/HotPlaydss'})
  }

  }
}
</script>

<style lang="css" scoped>
.bg{
  background-color:#FDFDFD;
  width: 100%;
  height: 9rem;
}
.wrap{
  width: 100%;
  height: 100%;
  background-color: rgba(200,200,200,.4);
  position: fixed;
  top: .8rem;
  bottom: 0;
  left: 0;
  right: 0;
}
.alertbox{
  position: absolute;
  left: 50%;
  margin-left: -2.5rem;
  top: 50%;
  margin-top: -3rem;
  width: 3rem;
  height: 2rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: .2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.alertbox>p{
  width: 100%;
  text-align: center;
  font-size: .4rem;
  margin-top: .3rem;
}
.alertbox>button{
  width: .8rem;
  height: .6rem;
  margin-top: .3rem;
  border-radius: .1rem;
}
.bgTop{
  background-color:white;
  width: 100%;
  height:.8rem;
  line-height: .8rem;
  text-align: center;
  font-size: .3rem;
  border-bottom: .01rem solid #C6C7C7;
  margin-bottom: .8rem;
}
.bgTop img{
  width: .4rem;
  height: .4rem;
  float: left;
  margin-top: .2rem;
  margin-left: .2rem;
}
main{
  background-color: #FDFDFD;
  text-align: center;
}
main p:nth-of-type(1){
  color:black;
  font-size: .3rem;
  margin-bottom: .3rem;
}
main p:nth-of-type(2){
  color:#BEBEBE;
  font-size: .2rem;
  margin-bottom: .3rem;
}

main img{
  width: 50%;

}
main button{
  border: .01rem solid #0abe25;
  background-color:#FDFDFD;
  padding: .2rem .4rem;
  color: #0abe25;
  border-radius: .2rem ;
}
</style>
