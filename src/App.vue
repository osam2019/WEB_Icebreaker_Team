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
@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
*{
  font-family: 'Lato';
  margin:0;
  padding:0;
}
html{
  background: -webkit-linear-gradient(rgba(109,58,180,0.5) 0%, rgba(253,29,29,0.5) 50%, rgba(252,176,69,0.5) 100%);      
  height:100vh;
}
body {
  height: 100vh;
}
* {
  font-family: 'Lato';
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
}

a {
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.home-button {
  font-size: 40px;
  position: absolute;
}

.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.center-box{
  border-radius:40px;
  border:none;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  width:80%;
  height: 20%;
  background-color: white;
  font-weight: bold;
}

.submit-button {
  width: 100px;
  height: 25px;
  font-size: 16px;
}
</style>
