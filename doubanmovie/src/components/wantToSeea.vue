<template>
       <div class="btn" @click.stop="isClick && change()" :class="{'haveLook' : wantToSee}">
         {{ wantToSee ? "已想看" : "想看" }}
       </div>
</template>

<script>
  export default {
    props:['dataLi'],
    name:"wantToSeea",
    data(){
      return {
        wantToSee:false,
        dataList: {},
        isClick:true
      }
    },
    methods: {
      getImage(url) {
        if (url !== undefined) {
          return url.replace("https://", "https://images.weserv.nl/?url=");
        }
      },
      change(){
        if (!this.$store.getters.IS_LOGIN) {
          this.$router.push({
          path:'/login'
          })
        }else{
          this.isClick = false;
          // console.log('已登录')
          let id = this.dataLi.id;
          let title = this.dataLi.title;
          let date = this.dataLi.mainland_pubdate;
          let directors = [];
          let casts = [];
          let imgUrl = this.getImage(this.dataLi.images.small);
          let stars = this.dataLi.rating.stars;
          let average = this.dataLi.rating.average;
          for(let director of this.dataLi.directors){
            directors.push(director.name);
          }
          for(let cast of this.dataLi.casts){
            casts.push(cast.name);
          }
          this.dataList = {
            id : id,
            title : title,
            date : date,
            directors : directors,
            casts : casts,
            imgUrl : imgUrl,
            stars : stars,
            average :average
          }
          this.wantToSee = true;
          this.$store.commit('isWantToSee', this.dataList);
        }
      }
    },
    created () {
      for(let index of this.$store.getters.IS_LOOK){
        if (index == this.dataLi.id) {
          this.wantToSee = true;
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
