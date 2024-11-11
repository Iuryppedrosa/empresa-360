<template>
  <div>
    <nav class="navbar navbar-light bg-light menu-superior">
      <div class="container">
        <router-link class="navbar-brand" :to="'/home'"
          >Empresa 360</router-link
        >
        <div class="navbar-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="d-flex">
      <div class="list-group menu-esquerda">
        <router-link
          class="list-group-item list-group-item-action"
          :to="{ path: '/home/dashboard' }"
          ><i class="bi bi-speedometer2"></i> Dashboard</router-link
        >
        <router-link
          class="list-group-item list-group-item-action"
          :to="{ path: '/home/vendas' }"
          @click="toggleVendas"
          ><i class="bi bi-cart"></i> Vendas
          <div v-if="vendasAndLeads">
            <router-link
              class="list-group-item list-group-item-action"
              :to="{ path: '/home/vendas/leads' }"
              @click="stopPropagation"
              ><i class="bi bi-caret-right"></i> Leads</router-link
            >
            <router-link
              class="list-group-item list-group-item-action"
              :to="{ path: '/home/vendas/contratos' }"
              @click="stopPropagation"
              ><i class="bi bi-caret-right"></i> Contratos</router-link
            >
          </div>
        </router-link>

        <router-link
          class="list-group-item list-group-item-action"
          :to="{ name: 'RouteServicos' }"
          ><i class="bi bi-card-checklist"></i> Servicos</router-link
        >
      </div>

      <div class="w-100">
        <nav aria-label="breadcrumb" class="pt-1 ps-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>

        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="rodape">
      <router-view name="rodape"> </router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      vendasAndLeads: false,
    }
  },
  methods: {
    toggleVendas() {
      this.vendasAndLeads = !this.vendasAndLeads
      console.log(this.vendasAndLeads)
    },
    stopPropagation(event) {
      event.stopPropagation()
    },
  },
}
</script>

<style scoped>
.menu-superior {
  border-bottom: solid 1px #ccc;
}

.menu-esquerda {
  border-right: solid 1px #ccc;
  width: 250px;
}

.list-group-item {
  border-top: none;
  border-right: none;
}

/* .router-link-exact-active {
  background-color: #0080ff;
  color: #fff;
  border-color: #0080ff;
} */

.rodape {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: #f5f5f5;
  text-align: center;
  padding: 10px;
  border-top: solid 1px #ccc;
  color: #333;
  font-size: 12px;
  font-weight: bold;
  z-index: 1000;
}
</style>
