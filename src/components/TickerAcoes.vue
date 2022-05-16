<template>
  <div class="flex-stock-tickers hideScrollbar">
    <div
      v-for="(value, key, index) in Acoes"
      :key="index"
      @click="alterarAcoes(key)"
      class="flex-ticker"
    >
      <div class="ticker-name">{{ key }}</div>
      <div class="ticker-value">
        {{ value.toFixed(2) }}
        <span
          :class="[
            isArrowUp
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
import Modal from "./Modal.vue";
export default {
  props: ["Acoes"],
  components: {
    Modal,
  },
  data() {
    return {
      isArrowUp: false,
      Acoes_Escolhidas: {},
      showModal: false,
      Timers: {
        emit: null,
      },
      keyAcao: null,
      modalText: null,
    };
  },
  methods: {
    alterarAcoes(key) {
      console.log(key);
      if (this.Timers[key] && this.Acoes_Escolhidas[key]) {
        clearInterval(this.Timers[key]);
        delete this.Timers[key];
        delete this.Acoes_Escolhidas[key];
        console.log("limpo");
        return true;
      }
      this.Timers[key] = setInterval(() => {
        this.Acoes_Escolhidas[key] = this.Acoes[key];
        console.log(this.Acoes_Escolhidas);
      }, 1000);
    },
    emitirAcoes() {
      this.$emit("emitirAcao", this.Acoes_Escolhidas);
      console.log('emitiu')
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