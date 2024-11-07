<template>
  <div class="card mt-3">
    <div class="card-header bg-success text-white">Indicadores</div>
    <div class="card-body">
      <p class="card-text">{{ servicos.indicadores }}</p>
    </div>
  </div>
</template>

<script>
import apiMixins from '@/mixins/apiMixins'
export default {
  mixins: [apiMixins],
  name: 'IndicadoresComponent',
  props: ['id'],
  watch: {
    id: {
      immediate: true,
      handler(newId) {
        this.getDadosApi(`http://localhost:3000/servicos/${newId}`)
      },
    },
  },
}
</script>

<style scoped>
.card {
  max-width: 18rem;
}
</style>
