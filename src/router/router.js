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
import Lead from '@/components/vendas/Lead.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'
import Servico from '@/components/servicos/Servico.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'
import Indicadores from '@/components/servicos/Indicadores.vue'
import DashboardRodape from '@/components/dashboard/DashboardRodape.vue'
import NotFound from '../components/notfound/NotFound.vue'

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
          { path: '', component: VendasPadrao },
          {
            path: 'leads',
            component: Leads,
            name: 'LeadsRoute',
          },
          {
            path: 'leads/:id',
            component: Lead,
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
        name: 'RouteServicos',
        children: [
          {
            path: ':id',
            name: 'ServicoDetails',
            components: {
              default: Servico,
              opcoes: Opcoes,
              indicadores: Indicadores,
            },
            props: {
              default: true,
              opcoes: true,
              indicadores: true,
            },
          },
        ],
      },
      {
        path: 'dashboard',
        components: {
          default: Dashboard,
          rodape: DashboardRodape,
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/:catchAll(.*)*',
    component: NotFound,
  },
]

// metodo de criacao via hash
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
