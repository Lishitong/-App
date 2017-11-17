<template>
   <div class="btn" @click.stop="change()" :class="{'haveLook' : wantToSee }">
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
        dataList: {}
      }
    },
    methods: {
      getImage(url) {
        if (url !== undefined) {
          return url.replace("https://", "https://images.weserv.nl/?url=");
        }
      },
      change(){
      console.log(this.$store.getters.IS_LOGIN)
        if (!this.$store.getters.IS_LOGIN) {
          this.$router.push({
          path:'/login'
          })
        }else{
          console.log('已登录')
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
    }
  }
</script>

<style lang="less" scoped>

</style>
