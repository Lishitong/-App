<template>
  <div class="check-city">
    <h1>
      <span @click="back">&lt;</span>
      <label>选择城市</label>
    </h1>
    <ol>
      <li v-for="(city, index) in cities" :key= "index">
        <h3>{{ index }}</h3>
        <p v-for="cit of city" @click="inde(cit)" > {{ cit }}</p>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    data(){
      return {
          cities : {},
          city:''
      }
    },
    methods:{
      
      inde(cit){
        console.log(cit)
       this.$router.push({
          path:'index',
          query:{
            'city':cit,
          }
        })
      },
      back(){
        this.$router.back();
      }
    },
    created(){
      this.axios.get('../../static/Chian_city.json').then(data=>{
        for(let city of data.data.provinces){
          if (this.$route.params.id == city.id) {
            console.log(city.citys); 
            this.cities = city.citys;    
            if (!city.citys) {
              this.$router.push({
                path:'index',
                query:{
                  'city':city.name
                }
              })
            }       
          }
        }
      })
    },
  }
</script>

<style lang="less" scoped>
h1 {
    padding: 0 0 0 .3rem;
    height: 1rem;
    line-height: 1rem;
    border-bottom: .045rem solid #e4e4e4;
    span {
      font-size: .8rem;
      color: #42bd56;
      margin-right: 1rem;
    }
    label {
      position: relative;
      top: -.15rem;
      color: #494949;
      font-size: .4rem;
    }
  }
.check-city {

    h3 {
      background-color: #f4f4f4;
      padding-left: .42rem;
      color : #9b9b9b;
      font-size: .25rem;
      height: .5rem;
      line-height: .5rem;
    }
    p {
      padding-left: .42rem;
      height: .7rem;
      line-height: .7rem;
      border-bottom: .01rem solid #f4f4f4;
    }
  }
</style>

