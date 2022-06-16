import { createRouter, createWebHistory } from 'vue-router'

import Contracts from '@/components/sales/Contracts.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import HomeView from '../views/Home.vue'
import Lead from '@/components/sales/Lead.vue'
import Leads from '@/components/sales/Leads.vue'
import Login from '../views/Login.vue'
import Sales from '@/components/sales/Sales.vue'
import StandardSales from '@/components/sales/StandardSales.vue'
import Services from '@/components/services/Services.vue'
import Site from '../views/Site.vue'

const routes = [
  {
    path: '/',
    component: Site
  },
  {
    path: '/home',
    component: HomeView,
    children: [
      { path: 'sales', component: Sales, children: [
        { path: '', component: StandardSales },
        { path: 'leads', component: Leads , name: 'leads'},
        { path: 'leads/:id', component: Lead , name: 'lead'},
        { path: 'contracts', component: Contracts , name: 'contracts'}
      ] },
      { path: 'services', component: Services , name: 'services'},
      { path: 'dashboard', component: Dashboard }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
