<template>
  <div class="home">
    <div class="container">
      <TickerAcoes class="grid-item-stocks-bar grid-item" />
      <Grafico class="grid-item-graph grid-item" />
      <TabelaAcoes
        :connection="connection"
        :Stocks="Stocks"
        class="grid-item-list grid-item"
      />
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
      stocks: [
        "IET",
        "N",
        "ZHT",
        "V",
        "ELY",
        "TZW",
        "FIK",
        "T",
        "ZQ",
        "NP",
        "MJ",
        "KG",
        "OY",
        "ITN",
        "OB",
        "ACM",
        "QQ",
        "X",
        "XLC",
        "S",
      ],
      acao: {},
      Stocks: {},
      serverURL: "ws://localhost:8080",
    };
  },
  methods: {
    subscribe(message) {
      console.log(this.connection);
      message = message = JSON.stringify(message);
      this.connection.send(message);
    },
    unsubscribe(message) {
      console.log(this.connection);
      message = message = JSON.stringify(message);
      console.log(message);
      this.connection.send(message);
    },
    wsConnect(url) {
      console.log("Começando conexão com servidor...");
      this.connection = new WebSocket(url);
      this.connection.onopen = (e) => {
        console.log(e);
        console.log("Conectador ao servidor com sucesso!");
      };
    },
    wsOnMessage() {
      this.connection.onmessage = (e) => {
        this.acao = JSON.parse(e.data);
        let key = Object.keys(this.acao.stocks);
        this.Stocks[key] = this.acao.stocks[key[0]];
      };
    },
    wsClose() {
      this.connection.onclose = (e) => {
        console.log(
          "Socket closed. Reconnection will be attempted in 1 second, ",
          e.reason
        );
        setTimeout(() => {
          this.wsConnect(this.serverURL);
        }, 1000);
      };
    },
    wsError() {
      this.connection.onerror = (e) => {
        console.error('Socket found an error: ', err.messsage, 'Closing socket')
        this.wsClose();
      }
    },
  },
  mounted() {
    this.wsConnect(this.serverURL);
    setTimeout(() => {
      this.subscribe({
        event: "subscribe",
        stocks: this.stocks,
      });
    }, 3000);
    this.wsOnMessage();
    this.wsError();
    this.wsClose();
  },
};
</script>

<style>
.home {
  height: 500px;
  margin: 1rem;
  padding: 5px;
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
}
.grid-item-stocks-bar {
  grid-column: 2;
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
