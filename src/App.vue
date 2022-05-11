<template>
  <div id="app">
    <Navbar />
    <button
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
    </button>
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
  methods: {
    subscribe: function (message) {
      console.log(this.connection);
      message = message = JSON.stringify(message);
      console.log(message);
      this.connection.send(message);
    },
    unsubscribe: function (message) {
      console.log(this.connection);
      message = message = JSON.stringify(message);
      console.log(message);
      this.connection.send(message);
    },
  },
  created() {
    console.log("Começando conexão com servidor...");
    this.connection = new WebSocket("ws://localhost:8080");

    this.connection.onopen = function (event) {
      console.log(event);
      console.log("Conectador ao servidor com sucesso!");
    };

    this.connection.onmessage = function (event) {
      console.log(event);
      this.acao = JSON.parse(event.data);
      console.log(this.acao.stocks.V);
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: #6D6D6D;
  height: 100%;
  width: 100%;
  margin: 0;
}
body, div{
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
</style>
