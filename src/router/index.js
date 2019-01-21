import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import IndexCars from '@/components/carList/IndexCars'

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
  ]
})
