import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import IndexCars from '@/components/carList/IndexCars'
import IndexCarDetail from '@/components/carDetail/IndexCarDetail'
import IndexContact from '@/components/contact/IndexContact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/cars/:marque',
      name: 'IndexCars',
      component: IndexCars,
    },
    {
      path: '/car/:id',
      name: 'IndexCarDetail',
      component: IndexCarDetail,
    },
    {
      path: '/contact',
      name: 'IndexContact',
      component: IndexContact,
    },
  ]
})
