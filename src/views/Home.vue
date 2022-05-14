<template>
  <div class="home">
    <div class="container">
      <TickerAcoes class="grid-item-stocks-bar grid-item" />
      <Grafico class="grid-item-graph grid-item" />
      <TabelaAcoes :connection="connection" class="grid-item-list grid-item" />
    </div>
  </div>
</template>

<script>
import Grafico from "../components/Grafico.vue";
import TickerAcoes from "../components/TickerAcoes.vue";
import TabelaAcoes from "../components/TabelaAcoes.vue";
export default {
  name: "Home",
  components: {
    Grafico,
    TickerAcoes,
    TabelaAcoes,
  },
  data() {
    return {
      connection: null,
      acao: {},
    };
  },
  created() {
    console.log("Começando conexão com servidor...");
    this.connection = new WebSocket("ws://localhost:8080");

    this.connection.onopen = (e) => {
      console.log(e);
      console.log("Conectador ao servidor com sucesso!");
    };

    this.connection.onmessage = (e) => {
      console.log(e);
      this.acao = JSON.parse(e.data);
      console.log(this.acao);
    };

    setTimeout(() => {
      console.log(this.connection);
    }, 5000);
  },
};
</script>

<style>
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
}
.grid-item-stocks-bar {
  grid-column: 1 / span 3;
  margin-bottom: 40px;
}
.grid-item-graph {
  background: rgb(197, 197, 197);
  color: black;
  grid-row: 2 / span 3;
  grid-column: 1 / span 2;
  border-radius: 10px;
}
.grid-item-list {
  grid-row: 2 / span 3;
  padding: 0;
}
</style>
