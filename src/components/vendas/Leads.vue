<template>
  <div>
    <h3 style="text-align: center">Leads</h3>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Telefone</th>
          <th scope="col">Visualizar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="lead in leads" :key="lead.id">
          <td>{{ lead.nome }}</td>
          <td>{{ lead.telefone }}</td>
          <td>
            <router-link
              :to="{ path: `/home/vendas/leads/${lead.id}` }"
              class="btn btn-primary"
            >
              <i class="bi bi-pencil-square" style="cursor: pointer"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import apiMixins from '@/mixins/apiMixins'
export default {
  name: 'LeadsComponent',
  mixins: [apiMixins],
  created() {
    this.getDadosApi('http://localhost:3000/leads')
  },
}
</script>

<style></style>
