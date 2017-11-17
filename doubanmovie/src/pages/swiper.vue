<template>
<div id="swiper">
<swiper :options="swiperOption" ref="mySwiperA">
  <swiper-slide class="slide0"></swiper-slide>
  <swiper-slide class="slide1"></swiper-slide>
  <swiper-slide class="slide2"></swiper-slide>
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</div>
</template>
<script>
require("swiper/dist/css/swiper.css");
export default {
  data() {
    return {
      swiperOption: {
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        direction: "horizontal",
        pagination: ".swiper-pagination",
        loop: true,
        paginationClickable: true
      }
    };
  }
};
</script>
<style media="screen" scoped>
.swiper-container {
  height: 2rem;
}
.swiper-slide {
  width: 100%;
  height: 2rem;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  text-align: right;
  bottom: 0.01rem;
}
.swiper-pagination-bullet {
  width: 0.1rem;
  height: 0.1rem;
}
.swiper-pagination-bullet-active{
  background: lightgray
}
/*轮播图片*/
.slide0 {
  background: url(../../static/img/lunbo0.jpg) no-repeat top/100% 100%;
}
.slide1 {
  background: url(../../static/img/lunbo1.jpg) no-repeat top/100% 100%;
}
.slide2 {
  background: url(../../static/img/lunbo2.jpg) no-repeat top/100% 100%;
}
</style>
