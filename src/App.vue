<template>
  <div id="app">
    <router-link to="/" class="home">&#127968;</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  height: 100%;
}

a {
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 10px;
  height: 100%;
}

.home {
  font-size: 48px;
}

.content {
  height: 100%;
}

.button {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 24px;
  width: 80%;
  height: 20%;
  border: 1px solid #333333;
}
</style>
