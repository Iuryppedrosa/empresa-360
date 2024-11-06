<template>
  <h3>Servicos</h3>
  <hr />
  <div class="row">
    <div class="col mb-2" v-for="servico in servicos" :key="servico.id">
      <div class="card" style="width: 11rem">
        <img
          class="card-img-top"
          :src="`/img/${servico.icone}`"
          alt="Card image cap"
        />
        <div class="card-body text-center">
          <router-link
            :to="{ name: 'ServicoDetails', params: { id: servico.id } }"
          >
            <p class="card-text">{{ servico.servico }}</p></router-link
          >
        </div>
      </div>
    </div>
    <router-view class="mt-3"></router-view>
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
