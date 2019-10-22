<template>
  <div id="app">
    <router-link to="/">
      <button class="home-button" v-on:click="to_home"> &#127968; </button>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    to_home: function(event) {
      confirm('Going home!')
    }
  }
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

.home-button {
  font-size: 40px;
}

.content {
  height: 100%;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  width: 80%;
  height: 20%;
  border: 1px solid #333333;
}

.submit-button {
  width: 100px;
  height: 25px;
  font-size: 16px;
}
</style>
