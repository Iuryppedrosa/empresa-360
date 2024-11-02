//import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Site from '../views/Site.vue'
import Vendas from '../components/vendas/Vendas.vue'
import Servicos from '../components/servicos/Servicos.vue'
import Leads from '../components/vendas/Leads.vue'
import Contratos from '../components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Site',
    component: Site,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'vendas',
        component: Vendas,
        children: [
          {
            path: 'leads',
            component: Leads,
          },
          {
            path: 'contratos',
            component: Contratos,
          },
        ],
      },
      {
        path: 'servicos',
        component: Servicos,
      },
      {
        path: 'dashboard',
        component: Dashboard,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

// metodo de criacao via hash
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
