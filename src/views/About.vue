<template>
  <div class="about">
    <h1>Sobre Nós</h1>
    <p>
      {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Esse site foi feito para o teste técnico da Byne",
    };
  },
};
</script>

<style>
.about{
  height: 510px;
}
</style>
