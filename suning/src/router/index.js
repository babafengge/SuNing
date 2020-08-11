import Vue from 'vue'
import VueRouter from 'vue-router'
import Classify from '../views/Classify.vue'
import Detail from '../views/Detail.vue'
import Home from '../views/Home.vue'
import My from '../views/My.vue'
import Search from '../views/Search.vue'
import ShopCar from '../views/ShopCar.vue'

import enroll from '../components/my/enroll.vue'
import regist from '../components/my/regist.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/shopCar',
    component: ShopCar
  }
]

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router