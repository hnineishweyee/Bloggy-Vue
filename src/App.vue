<template>
  
  <NavbarHome />
  <router-view>
  </router-view>
</template>

<script>
import NavbarHome from "./components/NavbarHome.vue"
export default {
  components:{ NavbarHome }
}
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #00aeff;
}

</style>
