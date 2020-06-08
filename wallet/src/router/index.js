import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from '@/components/FrontPage'
import HomePage from '@/components/HomePage'

import Wallet2Page from '@/components/Wallet2Page'
// import WalletListPage from '@/components/WalletListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },

    {
      path: '/FrontPage',
      name: 'FrontPage',
      component: FrontPage
    },

    {
      path: '/Wallet_2',
      name: 'Wallet_2',
      component: Wallet2Page
    }

    // {
    //   path: '/WalletList',
    //   name: 'WalletList',
    //   component: WalletListPage
    // }
  ]
})
