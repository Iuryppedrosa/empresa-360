<template>
  <div class="card mt-3">
    <div class="card-header bg-primary text-white">Opções</div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li
          v-for="opcao in servicos.opcoes"
          :key="opcao"
          class="list-group-item"
        >
          {{ opcao }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import apiMixins from '@/mixins/apiMixins'

export default {
  name: 'OpcoesComponent',
  mixins: [apiMixins],
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
