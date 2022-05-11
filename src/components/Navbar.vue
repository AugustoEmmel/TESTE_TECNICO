<template>
  <div>
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
nav.navbar {
  padding: 30px;
  background: #1C1C1C;
  text-align: left;
}

nav.navbar  a{
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