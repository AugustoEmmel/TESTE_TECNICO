<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <slot>default content</slot>
      <div class="actions">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal {
  background: white;
  border-radius: 10px;
  width: 400px;
  padding: 20px;
  margin: 200px auto;
  background: white;
}
.backdrop {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal h1 {
  color: black;
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
  color: black;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
</style>