<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <div class="grid-item-graph grid-item"></div>
      <div class="grid-item-search grid-item"></div>
      <div class="grid-item-list grid-item"></div>
    </div>
    <!-- <button
      @click="
        subscribe({
          event: 'subscribe',
          stocks: ['V'],
        })
      "
    >
      Inscrever
    </button>
    <button
      @click="
        unsubscribe({
          event: 'unsubscribe',
          stocks: ['V'],
        })
      "
    >
      desinscrever
    </button> -->
    <footer class="footerApp">
      Contato
      <address>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque esse quod aut quidem magni, eos exercitationem qui inventore odio tenetur incidunt similique repudiandae tempora quo porro dolorum voluptatem consectetur nisi.</address>
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      connection: null,
      acao: {},
    };
  },
  // methods: {
  //   subscribe: function (message) {
  //     console.log(this.connection);
  //     message = message = JSON.stringify(message);
  //     console.log(message);
  //     this.connection.send(message);
  //   },
  //   unsubscribe: function (message) {
  //     console.log(this.connection);
  //     message = message = JSON.stringify(message);
  //     console.log(message);
  //     this.connection.send(message);
  //   },
  // },
  // created() {
  //   console.log("Começando conexão com servidor...");
  //   this.connection = new WebSocket("ws://localhost:8080");

  //   this.connection.onopen = function (event) {
  //     console.log(event);
  //     console.log("Conectador ao servidor com sucesso!");
  //   };

  //   this.connection.onmessage = function (event) {
  //     console.log(event);
  //     this.acao = JSON.parse(event.data);
  //     console.log(this.acao.stocks.V);
  //   };
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
  background: #6d6d6d;
  height: auto;
  width: auto;
  margin: 0;
 
}
div.container {
  border: 6px solid black;
    display: grid;
    grid-template: repeat(3, 165px) / repeat(3, 165px);
}
.grid-item{
    color: white;
    font-size: 1.5rem;
    padding: 1rem;
    text-align: center;
    border: 6px solid black;
}
body,
div {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

</style>
