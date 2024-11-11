<template>
  <div class="container text-center mt-5">
    <div class="alert alert-danger" role="alert">
      <h1 class="display-4">404</h1>
      <p class="lead">Página não encontrada</p>
      <hr class="my-4" />
      <p>{{ msg }}</p>
      <p>{{ tempo }}</p>
      <router-link :to="{ path: '/home' }" class="btn btn-primary">
        Voltar para a Página Inicial
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundComponent',
  data() {
    return {
      msg: 'A página que você está procurando não existe.',
      tempo: 40,
    }
  },
  methods: {
    redirecionando() {
      setInterval(() => {
        this.tempo--
        if (this.tempo === 0) {
          console.log('Redirecionando...' + this.tempo)
          this.$router.replace({ path: '/home' })
        }
      }, 1000)
    },
  },
  computed: {},
  created() {
    this.redirecionando()
  },
}
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
