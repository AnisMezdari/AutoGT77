import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import IndexCars from '@/components/carList/IndexCars'
import IndexCarDetail from '@/components/carDetail/IndexCarDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/cars',
      name: 'IndexCars',
      component: IndexCars,
    },
    {
      path: '/car',
      name: 'IndexCarDetail',
      component: IndexCarDetail,
    },
  ]
})
