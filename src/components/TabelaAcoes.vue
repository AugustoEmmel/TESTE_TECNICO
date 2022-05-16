<template>
  <div class="flex-container-stocks">
    <div class="flex-table flex-container-item hideScrollbar">
      <table id="table-stock">
        <thead>
          <tr>
            <th>Ação</th>
            <th>Preço</th>
            <th>Variação</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(value, key, index) in acoes_Pessoais"
            :key="index"
            @click="selecionarAcao(key, value)"
          >
            <td>{{ key }}</td>
            <td>$ {{ value.toFixed(2) }}</td>
            <td>
              xx.xx%
              <span
                :class="[
                  isArrowUp
                    ? 'material-symbols-outlined arrow arrow-up'
                    : 'material-symbols-outlined arrow arrow-down',
                ]"
              >
                arrow_upward
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["acoes_Pessoais"],
  data() {
    return {
      isArrowUp: true,
    };
  },
  methods: {
    selecionarAcao(key){
      this.$emit('escolherAcao',key)
    },
  },
};
</script>

<style>
.flex-container-stocks {
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
}
#table-stock {
  width: 100%;
  text-align: left;
}
#table-stock th {
  position: sticky;
  background-color: white;
  position: -webkit-sticky;
  top: 0px;
  z-index: 3;
  cursor: default;
}
#table-stock tr {
  border-radius: 5px;
  cursor: pointer;
}
#table-stock tr:nth-child(odd) {
  background-color: #f2f2f2;
}
#table-stock tr:hover {
  background-color: rgba(255, 228, 196, 0.966);
}
</style>