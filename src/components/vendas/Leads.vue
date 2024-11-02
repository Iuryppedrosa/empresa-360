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
              :to="{ path: '/home/vendas/leads' }"
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
export default {
  name: 'LeadsComponent',
  data() {
    return {
      leads: [],
    }
  },
  methods: {
    getLeads() {
      fetch('http://localhost:3000/leads')
        .then(response => response.json())
        .then(data => {
          this.leads = data
        })
    },
  },
  created() {
    this.getLeads()
  },
}
</script>

<style></style>
