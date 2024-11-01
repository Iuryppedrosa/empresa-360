//import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Site from '../views/Site.vue'
import Vendas from '../components/vendas/Vendas.vue'
import Servicos from '../components/servicos/Servicos.vue'

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
      },
      {
        path: 'servicos',
        component: Servicos,
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
