<template lang="html">
  <div id="top250">
    <h2>{{data1.title}}</h2>
    <div id="box">
      <div class="box">
        <div class="top250">
          <ul>
            <li><span>1</span></li>
            <li><span>2</span></li>
            <li><span>3</span></li>
            <li><span>4</span></li>
          </ul>
        </div>
        <div class="top250">
          <ul>
            <li><span>1</span></li>
            <li><span>2</span></li>
            <li><span>3</span></li>
            <li><span>4</span></li>
          </ul>
        </div>
        <div class="top250">
          <ul>
            <li><span>1</span></li>
            <li><span>2</span></li>
            <li><span>3</span></li>
            <li><span>4</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'top250',
  data(){
    return {
      data1 : {},
      data2 : {},
      data3 : {},
      arr1: [],
      arr2: [],
      arr3: [],
    }
  },
  methods:{
    getImage(url){
      if(url !== undefined){
          return url.replace('https://','https://images.weserv.nl/?url=');
      }
    },
  },
  created(){
    this.JSONP('https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b',null,(err,data) => {
      this.data1 = data;
      this.arr1 = this.data1.subjects;
      console.log(this.arr1);
    });
    this.JSONP('https://api.douban.com/v2/movie/weekly?apikey=0b2bdeda43b5688921839c8ecb20399b',null,(err,data) => {
      this.data2 = data;
      this.arr2 = this.data2.subjects;
      console.log(this.arr2);
    });
    this.JSONP('https://api.douban.com/v2/movie/us_box?apikey=0b2bdeda43b5688921839c8ecb20399b',null,(err,data) => {
      this.data3 = data;
      this.arr3 = this.data3.subjects;
      console.log(this.arr3);
    });
  },
  beforeUpdate(){
    var lis = document.querySelectorAll('li');
    var arr = [this.arr1,this.arr2,this.arr3]
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        var img = document.createElement('img');
        var pp = document.createElement('p');
        if (i === 0) {
          img.src = this.getImage(arr[i][j].images.small);
          pp.innerHTML = arr[i][j].title;
        }else {
          img.src = this.getImage(arr[i][j].subject.images.small);
          pp.innerHTML = arr[i][j].subject.title;
        }
        lis[i*4 + j].appendChild(img);
        lis[i*4 + j].appendChild(pp);

      }
    }
  },
}
</script>

<style lang="less">
  #top250{
    h2{
      font-size:.43rem;
      text-align:left;
    }
    width: 7.2rem;
  }
  #box{
    width: 7.2rem;
    overflow-x:auto;
  }
  .box{
    width: 18rem;
  }
  .top250{
    width: 6rem;
    height: 6rem;
    font-size: .32rem;
    float: left;
    li{
      margin-top:.26rem;
      text-align: center;
      width: 100%;
      overflow:hidden;
      span{
        float: left;
        margin:.1rem .35rem auto .45rem;
      }
      p{
        float: left;
        margin: .05rem 0 0 .3rem;
      }
    }
    img{
      width: .85rem;
      float: left;
      height: 1.15rem;
    }
  }
</style>
