<template lang="html">

  <div class="interested">
    <h5>你可能感兴趣的</h5>
    <ul>
      <li v-for="itemarr in arrbox">
        <interestedcon :message="itemarr"></interestedcon>
      </li>
    </ul>
    <div class="footer">
      <p>(｡◕ˇ∀ˇ◕)翻完了，下次再来吧</p>
    </div>
  </div>

</template>

<script>
import interestedcon from './interested-con'
export default {
  data() {
    return {      
      articles: {} ,
      msg:'最近值得看的热门电影',
      pointUrl:'../../static/point.png',
      arr:[],
      arrbox:[],
      // flag:true,
      a:{}
    }      
  },
  components:{
    interestedcon: resolve => {require(['./interested-con.vue'], resolve)}
  },
  methods: {
    getHero() {
          this.JSONP('https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=100&client=somemessage&udid=dddddddddddddddddddddd', null, (err, data)=>{      
            if (err) {      
              console.error(err.message);      
            } else {
              // console.log(data);
              var a=data.subjects;
              this.a=data.subjects;
              for (var i = 0; i < a.length; i++) {
                this.arr.push(a[i]);

                if (i>0&&i%4==0) {
                  this.arrbox.push(this.arr);
                  this.arr=[]
                }
              }
                 this.arrbox.sort(function(){
                   return Math.random()-0.5
                 })
                console.log(this.arrbox);
                    
            }      
          })
      },
      createImg(el, score) {
      for (var i = 0; i < 5; i++) {
        var p = document.createElement('p');
        p.style.background="url('../../static/star.gif')";
        p.style.backgroundSize='cover';
        p.style.backgroundRepeat='no-repeat';
        p.style.width=.3+'rem';
        p.style.height=0.6+'rem';
        p.style.position='absolute';
        p.style.left = i * 0.3 + 'rem';
        p.style.top=-0.3+'rem';
        p.style.zIndex=0;
        el.appendChild(p);
      }
      el.style.width = score / 2 * 0.3 + 'rem';
    },

  },

  computed:{


  },
  created() {
    this.getHero()
  },
   updated() {
    var stars = document.querySelectorAll('.director .stars');
    console.log(stars);
    for (var i = 0; i < stars.length; i++) {
      var cc=this.arrbox[i];
      this.createImg(stars[i], this.a[i].rating.average);


    }
  }

}
</script>

<style lang="css" scoped>
.interested>h5{
  font-size: 0.3rem;
  padding:0.3rem 0.3rem 0 0.3rem;
  color:gray;
}
.footer{
  height:2rem;
  line-height: 1rem;
  color:gray;
  font-size: 0.25rem;
  text-align: center;
}
</style>
