<template>
  <div class="flex-stock-tickers hideScrollbar">
    <div
      v-for="(value, key, index) in acoes"
      :key="index"
      @click="alterarAcoes(key)"
      class="flex-ticker"
    >
      <div class="ticker-name">{{ key }}</div>
      <div class="ticker-value">
        {{ value.preco.toFixed(2) }}
        <span
          :class="[
            value.isArrowUp
              ? 'material-symbols-outlined arrow arrow-up'
              : 'material-symbols-outlined arrow arrow-down',
          ]"
        >
          arrow_upward
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["acoes"],
  data() {
    return {
      acoes_Escolhidas: {},
      showModal: false,
      Timers: {
        emit: null,
      },
      keyAcao: null,
      modalText: null,
      valoresAntigos: {},
    };
  },
  methods: {
    alterarAcoes(key) {
      if (this.Timers[key] && this.acoes_Escolhidas[key]) {
        clearInterval(this.Timers[key]);
        delete this.Timers[key];
        delete this.acoes_Escolhidas[key];
        return true;
      }
      this.Timers[key] = setInterval(() => {
        this.acoes_Escolhidas[key] = this.acoes[key];
      }, 50);
    },
    emitirAcoes() {
      this.$emit("emitirAcao", this.acoes_Escolhidas);
    },
  },
  mounted() {
    setInterval(() => {
      this.emitirAcoes();
    }, 3000);
  },
};
</script>

<style>
.flex-stock-tickers {
  background: white;
  display: flex;
  height: 80px;
  overflow-x: scroll;
}
.flex-ticker {
  margin: 6px;
  padding: 5px;
  background: #eee;
  height: 50px;
  min-width: 100px;
  border-radius: 5px;
}
.flex-ticker:hover {
  background: rgba(255, 228, 196, 1);
  cursor: pointer;
}
.flex-ticker:active {
  background: rgba(255, 180, 136, 0.719);
  cursor: pointer;
}
.ticker-name {
  margin-bottom: 10px;
}
.ticker-value {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>