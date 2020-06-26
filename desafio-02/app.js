new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
      eventClick() {
        alert('O botão foi clicado!')
      },
      saveData( event ) {
        this.valor = event.target.value
      }
    }
})