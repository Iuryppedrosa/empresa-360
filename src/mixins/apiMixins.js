export default {
  data() {
    return {
      leads: {},
    }
  },
  methods: {
    getDadosApi(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.leads = data
        })
    },
  },
}
