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
  watch: {
    $route(to) {
      this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
    },
  },
}
</script>

<style></style>
