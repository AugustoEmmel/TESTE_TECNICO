<template>
  <div id="app">
    <Navbar />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
  background: #6d6d6d;
  height: auto;
  width: auto;
  margin: 0;
}
body,
div {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
.material-symbols-outlined {
  align-self: center;
  font-variation-settings: "FILL" 20, "wght" 500, "GRAD" 0, "opsz" 48;
}
.material-symbols-outlined:hover {
  cursor: pointer;
}
.arrow{
  text-align: center;
}
.arrow-up{
  color: rgb(47, 255, 75);
}
.arrow-down{
  color: rgb(255, 47, 47);
  transform: rotate(180deg);
}
button {
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.bt-confirmar {
  background-color: #4caf50;
}
.bt-confirmar:hover {
  background-color: #45a049;
}
.bt-confirmar:active {
  background-color: #317234;
}
.bt-cancelar {
  background-color: #c52929;
}
.bt-cancelar:hover {
  background-color: #a04545;
}
.bt-cancelar:active {
  background-color: #723131;
}
</style>