<template>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">ID</label>
    <div class="col-sm-10">
      <input
        type="text"
        readonly
        class="form-control-plaintext"
        :value="leads.id"
      />
    </div>
  </div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">NOME</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control" :value="leads.nome" />
    </div>
  </div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label">TELEFONE</label>
    <div class="col-sm-10">
      <input
        type="text"
        readonly
        class="form-control"
        :value="leads.telefone"
      />
    </div>
  </div>
  <div class="col-auto d-flex justify-content-between">
    <button
      type="button"
      class="btn btn-warning me-4"
      @click="$router.replace({ name: 'LeadsRoute', params: {} })"
    >
      Voltar
    </button>
    <button class="btn btn-primary">Editar</button>
  </div>
</template>

<script>
import apiMixins from '@/mixins/apiMixins'
export default {
  name: 'LeadComponent',
  mixins: [apiMixins],
  created() {
    this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`)
  },
}
</script>

<style></style>
