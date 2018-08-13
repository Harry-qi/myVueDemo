import Vue from 'vue'
import App from './App.vue'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
new Vue({
  render: h => h(App)
}).$mount('#app')
