import { createRouter, createWebHistory } from 'vue-router'

/* imports
import Contracts from '@/components/sales/Contracts.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import DashboardFooter from '@/components/dashboard/DashboardFooter.vue'
import HomeView from '../views/Home.vue'
import Lead from '@/components/sales/Lead.vue'
import Leads from '@/components/sales/Leads.vue'
import Login from '../views/Login.vue'
import Sales from '@/components/sales/Sales.vue'
import StandardSales from '@/components/sales/StandardSales.vue'
import Service from '@/components/services/Service.vue'
import Services from '@/components/services/Services.vue'
import Site from '../views/Site.vue' */

//lazy loading ( import dinâmico)
const Contracts = () => import(/* webpackChunkName: sales */ '@/components/sales/Contracts.vue')
const Dashboard = () => import('@/components/dashboard/Dashboard.vue')
const DashboardFooter = () => import('@/components/dashboard/DashboardFooter.vue')
const HomeView = () => import('../views/Home.vue')
const Lead = () => import(/* webpackChunkName: sales */ '@/components/sales/Lead.vue')
const Leads = () => import(/* webpackChunkName: sales */ '@/components/sales/Leads.vue')
const Login = () => import('../views/Login.vue')
const Sales = () => import(/* webpackChunkName: sales */ '@/components/sales/Sales.vue')
const StandardSales = () => import(/* webpackChunkName: sales */ '@/components/sales/StandardSales.vue')
const Service = () => import(/* webpackChunkName: services */ '@/components/services/Service.vue')
const Services = () => import(/* webpackChunkName: services */ '@/components/services/Services.vue')
const Site = () => import('../views/Site.vue')

const routes = [
  {
    path: '/',
    component: Site,
    meta: { reqAuthorization : false}
  },
  {
    path: '/home',
    component: HomeView,
    beforeEnter() {
      console.log('Guarda de rota beforeEnter')
    },
    children: [
      { path: 'sales', 
        component: Sales, 
        children: [
          { path: '', 
            component: StandardSales, 
            name: 'sales' },
          { path: 'leads', 
            component: Leads, 
            name: 'leads',
          },
          { path: 'leads/:id', 
            props: true, 
            component: Lead, 
            alias: '/l/:id', 
            name: 'lead'},
          { path: 'contracts', 
            component: Contracts, 
            name: 'contracts'}
        ]
      },
      { path: 'services', 
        component: Services, 
        name: 'services', 
        children: [
          { path: ':id', 
            props: true, 
            component: Service, 
            alias: '/s/:id',  
            name: 'service'}
        ]
      },
      { path: 'dashboard', 
        components: {
          default: Dashboard,
          footer: DashboardFooter
        }
      } 
    ]
  },
  {
    path: '/login',
    component: Login,
    meta: { reqAuthorization : false}
  },
  { path: '/redirection-1', redirect: '/home/services' },
  { path: '/redirection-2', redirect: { name: 'leads'} },
  { path: '/redirection-3', redirect: { name: 'sales'} },
  { path: '/:catchAll(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition 
    }

    if(to.hash) {
      return {el: to.hash}
    }

    return { left: 0, top: 0}
  },
  routes
})

/*router.beforeEach( () => {
  console.log('Guarda global beforeEach')
})

router.afterEach( () => {
  console.log('Guarda global afterEach')
})

router.beforeResolve( () => {
  console.log('Guarda de rota beforeResolve')
})*/

export default router