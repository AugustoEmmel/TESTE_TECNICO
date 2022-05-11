<template>
  <div>
    <nav class="navbar">
      <router-link to="/">Home</router-link> |
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
  background: #eee;
}

nav.navbar  a{
  font-weight: bold;
  color: #2c3e50;
}

nav.navbar a.router-link-exact-active {
  color: #42b983;
}
</style>