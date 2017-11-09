<template lang="html">
  <div id="remen">
    <div id="top">
      <h2>豆瓣热门</h2>
      <span>全部99+ ></span>
    </div>
    <div id="bottom">
      <div class="wrap" :style="{width:wrapwidth}">
        <div v-for="(x,index1) in sub" class="movies">
          <img class="smallImg" :src="getImage(x.images.small)" alt="">
          <p class="title">{{x.title}}</p>
          <p>
            <star :index1="index1"></star>
            <!-- <span class="star" v-for="(y,index2) in 5">
              <img :src="reStar(index1,index2)" alt="">
            </span> -->
            {{x.rating.average}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from './../components/star.vue'
export default {
  name:'remen',
  data(){
    return {
      sub:[]
    }
  },
  components:{
    star
  },
  methods:{
    getImage(url){
      if(url !== undefined){
          return url.replace('https://','https://images.weserv.nl/?url=');
      }
    },
  },
  computed:{
    wrapwidth(){
      return (this.sub.length/2 * 311 + 34)/100 + 'rem';
    }
  },
  created(){
    this.JSONP('https://api.douban.com/v2/movie/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b',null,(err,data) => {
      this.sub = data.subjects
    })
  }
}
</script>

<style lang="less">
  #remen{
    width: 7.2rem;
    font-size: .36rem;
    p{
      width: 100%;
      overflow:hidden;
      height: .50rem;
    }
    #top{
      width: 7.2rem;
      height: 1.5rem;
      text-align:right;
      line-height:1.5rem;
    }
    #bottom{
      width: 7.2rem;
      overflow:auto;
    }
    .wrap{
      display: flex;
      flex-wrap: wrap;
      align-content: center;
    }
    h2{
      font-size: .46rem;
      margin-left:.34rem;
      float: left;
    }
    .title{
      text-align:left;
      font-size:.32rem;
      font-weight: 500;
    }
    .smallImg{
      width: 2.77rem;
      height: 3.86rem;
    }
    .movies{
      width:2.77rem;
      margin-left:.34rem;
    }

  }
</style>
