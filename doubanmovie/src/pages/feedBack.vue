<template lang="html">
  <div class="bg">
    <div class="bgTop">
      <img src="../../static/howSeeback.png" @click="shezhiback()" alt="">
      <span>如何查看电影榜单？</span>

    </div>
    <main>
      <p>问题类型:帮助与反馈</p>
      <div class="button">
        <div v-for="(list,index) in navLists"  :class="{ red:changeRed == index}" @click="reds(index)"> {{list.img}}{{list.text}}</div>
      </div>
      <textarea @click="textareaClick()" ref="textC" class="textarea"  name="name" rows="8" cols="80">输入您的反馈详情</textarea>

    </main>
    <footer>
      <p>添加图片(选填,最多三张)</p>
      <img src="../../static/wilPut.png" alt="">
      <div class="call">
        <span>联系方式</span>
        <input type="text" name="" placeHolder="手机或者邮箱都可以哦">
      </div>
      <button type="button" name="button">提交</button>

    </footer>
  </div>
</template>

<script>
export default {
  data(){
    return{
      navLists:[
                         {
                             "text":"提建议",
                             "img":"√"
                         },
                         {
                             "text":"想咨询",
                             "img":"√"

                         },
                         {
                             "text":"要投诉",
                             "img":"√"
                         },

                     ],
                     changeRed:0,
                     tshow:false

    }
  },
  methods:{
    shezhiback(){
      history.back();
    },
    textareaClick(){
      // console.log(this.$refs.textC.value)
      this.$refs.textC.value="";
      this.$refs.textC.style.color="black";

    },

    change(){
      this.shows=false
    },
    reds:function(index,img){
                   this.changeRed = index;
               }

  }
}
</script>

<style lang="css" scoped="scoped">

.bg{
    background-color: #F8F8F8;
    height: 11rem;
}
textarea{
  outline: none;
  overflow: hidden!important;
  resize: none!important;
  border: none!important;
  padding: 0!important;
  color:#CEC6CF;
  font-size: .2rem;
  font-weight: 600;
  padding: .2rem 0 0 .2rem;
}
.bgTop{
  background-color:white;
  width: 100%;
  height:.8rem;
  line-height: .8rem;

  font-size: .3rem;
  font-weight:700;
  border-bottom: .01rem solid #C6C7C7;
  margin-bottom: .2rem;
  text-align: center;
overflow: hidden;
}
.bgTop img{
  width: .3rem;
  height: .3rem;
  float: left;
  margin: .25rem 0 0 .25rem;
}
main p{
  color:#CEC6CF;
  font-size: .3rem;
  font-weight: normal;
}
.button {
  display: flex;
  justify-content: space-around;
  margin-bottom: .4rem;
}

.button>div{
  border: .01rem solid #C6C7C7;
  width: 24%;
  height: .5rem;
  text-align: center;
  font-size: .26rem;
  line-height: .5rem;
  color: #C6C7C7;
}
.iptbg{
  background-color: white;
  width: 100%;
  height: 2rem;
}
.red{
                color:white!important;
                display: block;
                background-color: #48B622;
                border-radius: .04rem;
                font-size: .3rem;

            }
            textarea{
              width: 100%;
              border: none;
            }
p{
    font-size: .3rem;
    margin-left: 5%;
    line-height: .6rem;
    margin-bottom: .2rem;
}
p:nth-of-type(1){
  font-weight:800;
}
p:nth-of-type(3){
  font-weight:800;
  font-size: .26rem;
}
.howSee{
  width: 90%;
  margin: 5%
}
footer p{
  color:#CEC6CF;
  font-size: .3rem;
  /*font-weight:300;*/
}
footer img{
  width: 30%;
  margin-left: 5%;
}
footer .call{
  width: 100%;
  background-color: white;
  height: .8rem;
  line-height: .8rem;
  padding: 0 .2rem;
  font-size: .3rem;
  margin-bottom: .8rem;
  padding: 0;
}
footer .call  input{
  float: right;
  margin-top: .25rem;
}
footer button{
  color:white!important;
  height: .6rem;
  background-color: #48B622;
  border-radius: .04rem;
  font-size: .3rem;
  width: 60%;
  margin-left: 20%;
}
</style>
