<template>
  <div class="home">
    <div class="container">
      <TickerAcoes :Acoes="Acoes" @emitirAcao="atualizarAcoesPessoais" class="grid-item-stocks-bar grid-item" />
      <Grafico class="grid-item-graph grid-item" />
      <TabelaAcoes
        :Acoes_Pessoais="Acoes_Pessoais"
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
      Acoes: {},
      Acoes_Pessoais: {},
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
        this.Acoes[key] = this.acao.stocks[key[0]];
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
      this.connection.onerror = (err) => {
        console.error(
          "Socket found an error: ",
          err.messsage,
          "Closing socket"
        );
        this.wsClose();
      };
    },
    atualizarAcoesPessoais(e){
      console.log('oi' + e)
      this.Acoes_Pessoais = e;
    }
  },
  created() {
    this.wsConnect(this.serverURL);
    setTimeout(() => {
      this.subscribe({
        event: "subscribe",
        stocks: this.stocks,
      });
    }, 2000);
  },
  mounted() {
    this.wsOnMessage();
    this.wsError();
    this.wsClose();
  },
};
</script>

<style>
.home {
  height: 100%;
  margin: 5px;
  padding: 5px;
}
div.container {
  padding: 15px;
  margin: 16px;
  display: grid;
  grid-template: repeat(4, 100px) / repeat(3, 350px);
  justify-content: space-between;
  grid-auto-flow: column;
  gap: 16px;
}
.grid-item {
  font-size: 1rem;
  text-align: center;
  border: 2px solid #eee;
}
.grid-item-stocks-bar {
  grid-column: 1 / span 3;
  width: auto;
  border-radius: 10px;
}
.grid-item-graph {
  background: white;
  color: black;
  grid-row: 2 / span 3;
  grid-column: 1 / span 2;
  border-radius: 10px;
}
.grid-item-list {
  grid-row: 2 / span 3;
}
</style>
