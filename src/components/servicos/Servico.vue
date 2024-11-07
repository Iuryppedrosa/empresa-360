<template>
  <div class="card">
    <div class="card-header bg-primary text-white">{{ servicos.servico }}</div>
    <div class="card-body">
      <p class="card-text">{{ servicos.detalhes }}</p>
    </div>
  </div>
</template>

<script>
import apiMixins from '@/mixins/apiMixins'
export default {
  name: 'ServicoComponent',
  mixins: [apiMixins],
  created() {
    this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`)
  },

  /*beforeRouteUpdate(to, from, next) {
    // to = rota que está indo
    // from = rota que está saindo
    // next = função que chama a próxima rota
    this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
    next()
  },*/
  watch: {
    $route(to) {
      if (to.params.id != undefined) {
        this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
      }
    },
  },
}
</script>
<style></style>
