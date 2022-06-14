import { createRouter, createWebHistory } from 'vue-router'

import Contracts from '@/components/sales/Contracts.vue'
import HomeView from '../views/Home.vue'
import Leads from '@/components/sales/Leads.vue'
import Login from '../views/Login.vue'
import Sales from '@/components/sales/Sales.vue'
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
        { path: 'leads', component: Leads },
        { path: 'contracts', component: Contracts }
      ] },
      { path: 'services', component: Services }
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
