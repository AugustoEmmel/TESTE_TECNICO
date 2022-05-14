<template>
  <div class="flex-container-stocks">
    <div
      class="flex-container-item-1 flex-container-item flex-search-container"
    >
      <label for="flex-search-item flex-search-item-1"></label>
      <input class="flex-search-item flex-search-item-2" />
      <button class="flex-search-item flex-search-item-3"></button>
    </div>
    <div class="flex-container-item-2 flex-container-item"></div>
  </div>
</template>

<script>
export default {
  props: ["connection"],
  methods: {
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
  display: flex;
  flex-flow: column;
  gap: 5px;
}
.flex-container-item {
  border: 1px solid black;
}
.flex-container-item-1 {
  flex-grow: 1;
}
.flex-container-item-2 {
  flex-grow: 2;
}
</style>