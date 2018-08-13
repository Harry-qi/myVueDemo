<template>
  <div id="app">
    <Header></Header>
    <Swiper></Swiper>  
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Swiper from './components/Swiper'
import Header from './components/Haeder'
export default {
  name: 'app',
  components: {
    HelloWorld,
    Swiper,
    Header
  },
  data(){
    return {
    
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0
}
li{
  list-style: none;
}
</style>
