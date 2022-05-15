<template>
  <footer class="footerApp">
    Contato
    <address>{{ infoContato }}</address>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      infoContato: "+xx (xx) xxxxx-xxxx",
    };
  },
};
</script>

<style>
footer.footerApp {
  padding: 10px;
  background: #1c1c1c;
  text-align: left;
  bottom: 0%;
}
</style>