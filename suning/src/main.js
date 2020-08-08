import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Swiper, { Navigation, Pagination, Autoplay} from "swiper";
import router from './router'
import store from './store'
Swiper.use([Navigation, Pagination,Autoplay]);
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
