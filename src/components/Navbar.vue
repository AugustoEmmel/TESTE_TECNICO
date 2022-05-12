<template>
  <div>
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Sobre Nós</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
nav.navbar {
  padding: 20px;
  background: #1c1c1c;
  text-align: left;
}

nav.navbar a {
  font-weight: bold;
  color: crimson;
  margin: 10px;
  padding: 10px;
  border: solid;
  text-decoration: none;
}

nav.navbar a.router-link-exact-active {
  color: white;
}
</style>