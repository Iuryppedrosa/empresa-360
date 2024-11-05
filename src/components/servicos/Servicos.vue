<template>
  <h3>Servicos</h3>
  <hr />
  <div class="row">
    <div class="col" v-for="servico in servicos" :key="servico.id">
      <div class="card" style="width: 11rem">
        <img
          class="card-img-top"
          :src="`/img/${servico.icone}`"
          alt="Card image cap"
        />
        <div class="card-body text-center">
          <p class="card-text">{{ servico.servico }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apiMixins from '@/mixins/apiMixins'
export default {
  name: 'ServicosComponent',
  mixins: [apiMixins],
  data() {},
  created() {
    this.getDadosApi('http://localhost:3000/servicos')
  },
}
</script>
