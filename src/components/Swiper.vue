<template>
  <div class="swiper">
        <swiper :options="swiperOption">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide>  
                  <img src="../assets/swiper1.png" alt="">
            </swiper-slide> 
            <swiper-slide> 
                  <img src="../assets/swiper2.png" alt="">
            </swiper-slide>  
            <swiper-slide> 
                  <img src="../assets/swiper3.png" alt="">
            </swiper-slide>  
             <!-- <swiper-slide v-for="item in items"> 
                  <img v-bind:src="item" alt="">
            </swiper-slide>  -->
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
             <div class="swiper-scrollbar"></div>
        </swiper> 
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
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
        autoplay: true,
        speed: 1000
        },
        items:["../../assets/swiper1.png","../src/assets/swiper1.png","../assets/swiper3.png"],
    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper{
    
}
</style>
