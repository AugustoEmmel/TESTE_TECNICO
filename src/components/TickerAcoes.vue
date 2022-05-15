<template>
    <div class="flex-stock-tickers">
      <div class="flex-ticker flex-ticker-1"></div>
      <div class="flex-ticker flex-ticker-2"></div>
      <div class="flex-ticker flex-ticker-3"></div>
      <div class="flex-ticker flex-ticker-4"></div>
    </div>
</template>

<script>
export default {
  props:['Stocks'],
  data(){
    return {
    }
  },
};
</script>

<style>
.flex-stock-tickers{
  background: white;
  height: 100%;
  width: 100%;
  top: 0%;
}
</style>