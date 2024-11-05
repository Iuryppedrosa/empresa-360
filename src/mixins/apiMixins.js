export default {
  data() {
    return {
      leads: {},
      servicos: {},
    }
  },
  methods: {
    getDadosApi(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.leads = data
          this.servicos = data
        })
    },
  },
}
