<template>
  <h3>Servicos</h3>
  <hr />
  <div class="d-flex justify-content-between mb-3">
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
              class="btn btn-primary btn-sm w-100"
              style="text-decoration: none"
              :to="{ name: 'ServicoDetails', params: { id: servico.id } }"
            >
              <p class="card-text m-0">{{ servico.servico }}</p></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view class="mt-3"></router-view>
  <div class="row">
    <router-view name="opcoes" class="m-3"></router-view>
    <router-view name="indicadores" class="m-3"></router-view>
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
