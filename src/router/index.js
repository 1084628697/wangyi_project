import Vue from 'vue'
import Router from 'vue-router'

import HeaderPage from '../pages/HeaderPage/HeaderPage.vue'
import ShopMain from '../pages/ShopMain/ShopMain.vue'
import ShopLooks from '../pages/ShopLooks/ShopLooks.vue'
import ShopLists from '../pages/ShopLists/ShopLists.vue'
import ShopChart from '../pages/ShopChart/ShopChart.vue'
import PersonCenter from '../pages/PersonCenter/PersonCenter.vue'

Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/headerPage',
      component: HeaderPage
    },
    {
      path: '/shopMain',
      component: ShopMain
    },
    {
      path:'/shopLooks',
      component: ShopLooks
    },
    {
      path: '/shopLists',
      component: ShopLists
    },
    {
      path: '/shopChart',
      component: ShopChart
    },
    {
      path: '/personCenter',
      component: PersonCenter
    }
  ]
})
