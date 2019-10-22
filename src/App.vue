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
@import url('https://fonts.googleapis.com/css?family=Lato:700&display=swap');
*{
  font-family: 'Lato';
}
html{
  background: -webkit-linear-gradient(rgba(109,58,180,0.5) 0%, rgba(253,29,29,0.5) 50%, rgba(252,176,69,0.5) 100%);      
  height:110vh;
}
body {
  height: 100vh;
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
  justify-content: space-evenly;
  align-items: center;
  font-size: 24px;
  width: 80%;
  height: 20%;
  border: 1px solid #333333;
}
</style>
