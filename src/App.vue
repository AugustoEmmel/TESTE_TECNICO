<template>
  <div id="app">
    <Navbar />
    <button>Inscrever Ação V</button>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components:{
    Navbar
  },
  data() {
    return {
      connection: null,
    };
  },
  methods:{
    sendMessage: function(message){
      console.log(this.connection)
      this.connection.send(message)
    }
  },
  created() {
    console.log("Começando conexão com servidor...");
    this.connection = new WebSocket("ws://localhost:8080");

    this.connection.onopen = function (event) {
      console.log(event);
      console.log("Conectador ao servidor com sucesso!");
    };

    this.connection.onmessage = function (event) {
      console.log(event);
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
div #app{
  background: #eee
}
</style>
