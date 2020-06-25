new Vue({
  el: '#desafio',
  data: {
    nome: 'Giovanni',
    idade: 23,
    netflixLogo: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
  },
  methods: {
    aleatorio: () => {
      return Math.random().toFixed(2)
    }
  }
})