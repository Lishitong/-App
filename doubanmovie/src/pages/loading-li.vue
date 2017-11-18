<template lang="html">
  <div class="">
    <div v-for="(item,del) in objdate"    class="li"  @click="push(item.id)">
      <div class="div">
        <div class="img-box">
          <img v-lazy="getImage(item.images.large)" alt="">
        </div>

        <div class="interested-info">
          <h1>{{item.title}}</h1>

          <div class="director">
            <p>

              <span v-if="flagAver">{{item.rating.average}}</span>
            </p>
            <p>
              <span v-for="itemArr of item.directors ">导演：{{ itemArr.name }}</span>
            </p>
            <p>
              <span>演员：</span>
              <span v-for="items of item.casts ">{{items.name}}/</span>
            </p>
          </div>
        </div>
        <div class="text-right" >
          <p>{{ item.collect_count }}人看过</p>
          <LOOK :data-li = "item"></LOOK>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LOOK from '../components/wantToSeea'
export default {
  props:['objdate'],
  data() {
    return {
      obj: {},
      objStr:[],
      objDate:[],
      flagLi: true,
      flagAver: true,
      director: [],
      flagClass1:false,
      flagClass2:false,
      flagClass3:false,
      flagClass4:false,

    }
  },
  components:{
    LOOK
  },
  methods:{
    getImage(url) {
      // console.log(url);
      // 把现在的图片连接传进来，返回一个不受限制的路径
      if (url !== undefined) {
        return url.replace('https://', 'https://images.weserv.nl/?url=');
      }      
    },
    push(item) {
      this.$router.push({
        path:'/movxiangqing/' + item
      })
    }
  },
  components:{
    LOOK
  }


}
</script>

<style lang="css" scoped>
.li{
  position: relative;
}
.div{
  height:3.8rem;
  padding:0.3rem 0 0rem 0.3rem;
  border-bottom: 1px solid #e9e9e9;
}
.img-box{
  width:2.3rem;
  height:3.3rem;
  display: inline-block;
  float: left;
}

.img-box img{
  width:2.3rem;
  height:3.3rem;
}
.interested-info{
  width:31%;
  display: inline-block;
  margin-left:0.4rem;
}
.interested-info h1{
  font-size: 0.4rem;
  margin:0rem 0 0.2rem 0;
  line-height: 0.45rem;
}
.interested-info .director{
  font-size: 0.2rem;
  color:gray;
}
.interested-info span{
  font-weight:10;
}
.interested-info h6{
  padding-top: 0.3rem;
  font-size: 0.25rem;
  color:gray;
  font-weight: 100;
}
.text-right {
  width:1.5rem;
  font-size: .25rem;
  color: #F6B529;
  font-weight: 900;
  text-align: center;
  float: right;
  margin: 0.4rem 0.3rem 0 0;
}
.text-right p {
  font-size: .2rem;
  height: .4rem;
  line-height: .4rem;
}
.text-right .btn {
  width: 1.5rem;
  height: .5rem;
  line-height: .5rem;
  border: 0.02rem solid #F6B529;
  border-radius: .04rem;
  text-align: center;
}

.text-right .haveLook {
  color : #ccc;
  border-color: #ccc;
}

</style>
