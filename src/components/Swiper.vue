<template>
  <div class="swiper">
        <swiper :options="swiperOption">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide>  
                  <img src="../assets/swiper1.png" alt="">
                  <div class="titleandmore">
                        <h2 class="bannerTitle">titletitle</h2>
                        <a href="javascript:;" class="bannerMore">查看更多<span>&gt;</span></a>
                  </div>
            </swiper-slide> 
            <swiper-slide> 
                  <img src="../assets/swiper2.png" alt="">
                  <div class="titleandmore">
                        <h2 class="bannerTitle">titletitle</h2>
                        <a href="javascript:;" class="bannerMore">查看更多<span>&gt;</span></a>
                  </div>
            </swiper-slide>  
            <swiper-slide> 
                  <img src="../assets/swiper3.png" alt="">
                  <div class="titleandmore">
                        <h2 class="bannerTitle">titletitle</h2>
                        <a href="javascript:;" class="bannerMore">查看更多<span>&gt;</span></a>
                  </div>
            </swiper-slide>  
             <!-- <swiper-slide v-for="item in items"> 
                  <img v-bind:src="item" alt="">
            </swiper-slide>  -->
        </swiper> 
  </div>
</template>

<script>
// import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  components:{
      swiper,  
      swiperSlide  
  },
  data(){
    return {  
        swiperOption: {   
        autoplay: false,
        speed: 1000,
        },
        items:["../../assets/swiper1.png","../src/assets/swiper1.png","../assets/swiper3.png"],
    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titleandmore{
      position: absolute;
      top: 300px;
      left: 120px;
}
.bannerTitle{
      font-weight: bold;
      font-size: 30px;
      line-height: 48px;
}
.bannerMore{
      display: inline-block;
      width: 135px;
      height: 40px;
      background-color: #ffffff;
      color: #1e1e1e;
      font-size: 14px;
      line-height: 40px;
      padding-left: 10px;
      margin-top: 30px;
}
.bannerMore:hover{
      background-color: #1e1e1e;
      color: #ffffff
}
.bannerMore span{
      padding-left: 20px;
      font-size: 15px;
      font-weight: bold;
      padding-left: 50px;
}
</style>
