<template>
  <div class="grid-container">
    <label class="sub-grid-items" id="label-procurar">Procurar Ações</label>
    <button class="sub-grid-items"
      @click="
        subscribe({
          event: 'subscribe',
          stocks: ['V'],
        })
      "
    >
      Inscrever
    </button>
    <button class="sub-grid-items"
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
export default {
  props:['connection'],
  data() {
    return {

    };
  },
  methods: {
    // Teste pegando ações
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
  mounted(){
    console.log(this.connection)
  }
};
</script>

<style>
div .grid-container {
  display: grid;
  grid-template: repeat(3, 30) / repeat repeat(3, 30);
  grid-auto-flow: column;
}

.sub-grid-items {
  color: white;
  font-size: 1rem;  
  border: 2px solid black;
}

</style>