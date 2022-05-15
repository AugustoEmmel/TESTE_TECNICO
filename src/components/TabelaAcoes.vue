<template>
  <div class="flex-container-stocks">
    <div class="flex-table flex-container-item">
      <table id="table-stock">
        <thead>
          <tr>
            <th>Ação</th>
            <th>Preço</th>
            <th>Variação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key, index) in Stocks" :key="index">
            <td>{{ key }}</td>
            <td>$ {{ value.toFixed(2) }}</td>
            <td>
              xx.xx%
              <span :class="[isArrowUp ? 'material-symbols-outlined arrow arrow-up' : 'material-symbols-outlined arrow arrow-down']"> arrow_upward </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
  props: ["connection", "Stocks"],
  components: {
    Modal,
  },
  data() {
    return {
      Acoes: {},
      showModal: false,
      stocks: {},
      isArrowUp: true,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    nextPage() {
      if (this.currentPage * this.pageSize < Object.keys(this.Stocks).length)
        this.currentPage++;
    },
  },
  computed() {
    return this.$props.propsData.connection;
  }
};
</script>

<style>
.flex-container-stocks {
  background: rgb(197, 197, 197);
  display: flex;
  flex-flow: column;
  border-radius: 10px;
}
.flex-container-item {
  border-radius: 10px;
}
.flex-table {
  flex-grow: 6;
  background: white;
  color: black;
  overflow-y: scroll;
  border: 3px solid #eee;
}
.flex-table::-webkit-scrollbar {
  display: none;
}
.flex-table {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#table-stock {
  width: 100%;
  text-align: left;
}
#table-stock th {
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  z-index: 2;
  background: white;
  cursor: default;
}
#table-stock tr {
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  cursor: pointer;
}
#table-stock tr:nth-child(odd) {
  background-color: #f2f2f2;
}
#table-stock tr:hover {
  background-color: bisque;
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
  margin-left: 3px;
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