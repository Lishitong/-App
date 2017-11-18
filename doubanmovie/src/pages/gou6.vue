<template lang="html">
    <div class="place">
       <ul>
         <li v-for="(item,i) in msg"  @click="zan">
           <h2>{{item.title}}</h2>
           <p>{{item.price}}</p>
           <p>{{item.message}}<span>{{item.direction}}</span></p>
         </li>
       </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg:{
        "c":{
          "title":"北京新华国际影城(宝盛店)",
          "price":"35元起",
          "message":"今日余14场,近期场次15:00",
          "direction":"2.3km"
        },
        "d":{
          "title":"北京中影永旺店",
          "price":"42元起",
          "message":"今日余10场,近期场次16:50",
          "direction":"5.9km"
        },
        "e":{
          "title":"鲁信影城北京立水桥店",
          "price":"26元起",
          "message":"今日余10场,近期场次17:00",
          "direction":"5.9km"
        },
        "f":{
          "title":"北京嘉华国际影城",
          "price":"40元起",
          "message":"今日余23场,近期场次18:00",
          "direction":"6km"
        }
      }
    }
  },
  methods:{
    zan() {
      if(!this.$store.getters.IS_LOGIN) {
        this.$router.push({
          path: "/login"
        });
      }
    }
  }
}
</script>

<style lang="css">
.place {
  width: 100%;
}
.place ul {
  list-style: none;
  width: 90%;
  margin-left: .2rem;
}
.place ul li{
  border-top: .01rem solid lightgray;
}
.place ul li h2 {
  height: .6rem;
  line-height: .6rem;
}
.place ul li p {
  height: .5rem;
  line-height: .5rem;
  color: gray;
}
.place ul li p span {
  float: right;
}
</style>
