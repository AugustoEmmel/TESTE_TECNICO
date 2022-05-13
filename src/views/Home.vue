<template>
  <div class="home">
    <div class="container">
      <TickerAcoes class="grid-item-stocks-bar grid-item" :connection="connection"/>
      <Grafico class="grid-item-graph grid-item"/>
      <PesquisaAcoes class="grid-item-search grid-item"/>
      <TabelaTicker class="grid-item-list grid-item"/>
    </div>
  </div>
</template>

<script>
import Grafico from "../components/Grafico.vue";
import TickerAcoes from "../components/TickerAcoes.vue";
import TabelaTicker from "../components/TabelaTicker.vue";
import PesquisaAcoes from "../components/PesquisaAcoes.vue";
export default {
  name: "Home",
  components: {
    Grafico,
    TickerAcoes,
    TabelaTicker,
    PesquisaAcoes,
  },
  data() {
    return {
      connection: null,
      acao:{}
    };
  },mounted() {
    console.log("Começando conexão com servidor...");
    this.connection = new WebSocket("ws://localhost:8080");

    this.connection.onopen = function (event) {
      console.log(event);
      console.log("Conectador ao servidor com sucesso!");
    };

    this.connection.onmessage = function (event) {
      console.log(event);
      this.acao = JSON.parse(event.data);
      console.log(this.acao);
    };
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
  border: 2px solid black;
}
.grid-item-stocks-bar {
  grid-column: 1 / span 3;
  margin-bottom: 40px;
}
.grid-item-graph {
  background-color: #eee;
  color: black;
  grid-row: 2 / span 3;
  grid-column: 1 / span 2;
}
.grid-item-list {
  grid-row: 3 / span 2;
  padding: 0;
}
</style>
