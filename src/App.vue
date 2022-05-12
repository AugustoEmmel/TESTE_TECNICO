<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div class="grid-item-stocks-bar grid-item">Barra Ações</div>
      <div class="grid-item-graph grid-item">Gráfico</div>
      <div class="grid-item-search grid-item">Procura de Ações</div>
      <div class="grid-item-list grid-item">Lista de ações</div>
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
      <address>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      </address>
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
body,
div {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
div.container {
  padding: 50px;
  display: grid;
  grid-template: repeat(4, 100px) / repeat(3, 350px);
  justify-content: space-evenly;
  grid-auto-flow: column;
}
.grid-item {
  color: white;
  font-size: 1rem;
  padding: 1rem;
  text-align: center;
  border: 6px solid black;
}
.grid-item-stocks-bar{
  grid-column: 1 / span 3;
  margin-bottom: 40px;
}
.grid-item-graph{
  background-color:#eee;
  color: black;
  grid-row: 2 / span 3;
  grid-column: 1 / span 2;
}
.grid-item-list{
  grid-row: 3 / span 2;
}
footer.footerApp {
  padding: 20px;
  background: #1c1c1c;
  text-align: left;
}
</style>
