<template>
  <div class="grid-item-search grid-item">
        <button
          @click="
            subscribe({
              event: 'subscribe',
              stocks: ['V'],
            })
          "
        >
          Inscrever
        </button>
        <button
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

}
</script>

<style>

</style>