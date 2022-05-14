<template>
  <div class="flex-container-stocks">
    <div
      class="flex-container-item-1 flex-container-item grid-search-container"
    >
      <label
        for="grid-search-item-2"
        class="grid-search-item grid-search-item-1"
      >
        Ticker de Ação
      </label>
      <input
        type="text"
        list="acoes"
        class="grid-search-item grid-search-item-2"
      />
      <datalist id="acoes">
        <option v-for="acao in acoes" :key="acao">{{ acao }}</option>
      </datalist>
      <span
        class="material-symbols-outlined grid-search-item grid-search-item-3"
        @click="toggleModal"
      >
        add_circle
      </span>
    </div>
    <div class="flex-container-item-2 flex-container-item"></div>
    <Modal v-if="showModal" @close="toggleModal">
      <h1>Confirma adicionar a ação a seus Tickers pessoais?</h1>
      <div class="flex-button-acao-container">
        <button class="bt-confirmar flex-button-acao">Confirmar</button>
        <button class="bt-cancelar flex-button-acao" @click="toggleModal">
          Cancelar
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  props: ["connection"],
  components: {
    Modal,
  },
  data() {
    return {
      acoes: ["1","2"],
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
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
  },
  computed() {
    return this.$props.propsData.connection;
  },
  mounted() {
    setTimeout(() => {
      console.log(this.connection);
    }, 5000);
  },
};
</script>

<style>
.flex-container-stocks {
  background: rgb(197, 197, 197);
  display: flex;
  flex-flow: column;
  gap: 5px;
  border-radius: 10px;
}
.flex-container-item {
  flex-grow: 1;
}
.flex-container-item-2 {
  flex-grow: 6;
}
.grid-search-container {
  display: grid;
  grid-auto-flow: column;
  grid-template: repeat(2, 100%) / (2, 100%);
  justify-content: space-evenly;
}
.grid-search-item {
  border: 1px black;
}
.grid-search-item-1 {
  text-align: left;
  color: black;
  padding-top: 1rem;
}
.grid-search-item-2 {
  grid-row: 2;
  width: 300px;
  border-radius: 10px;
}
.grid-search-item-3 {
  align-content: center;
  padding: 2px;
  grid-row: 2;
  color: black;
}
.flex-button-acao-container {
  flex-flow: row;
  height: 50px;
}
.flex-button-acao {
  height: 100%;
  width: 50%;
}
</style>