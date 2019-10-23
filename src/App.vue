<template>
  <div id="app">
    <router-link to="/">
      <div class="home-button el-icon-s-home" @click="to_home($event)"></div>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    to_home: function(event) {
      if (!confirm('Going home!')) {
        event.preventDefault();
      }
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
  background: linear-gradient(rgba(204,153,255,0.5) 0%, rgba(253,29,29,0.5) 25%, rgba(252,176,69,0.5) 50%, rgba(253,29,29,0.5) 75%,rgba(204,153,255,0.5) 100%);
  background-repeat:repeat-y;
  background-size: 300% 300%;
  -webkit-animation: AnimationName 3000s ease infinite;
  animation: AnimationName 3000s ease infinite;
  height:100vh;
}
@-webkit-keyframes AnimationName {
    0%{background-position:50% 0%}
    50%{background-position:50% 10000%}
    100%{background-position:50% 0%}
}
@keyframes AnimationName {
    0%{background-position:50% 0%}
    50%{background-position:50% 10000%}
    100%{background-position:50% 0%}
}

body {
  height: 100vh;
}
* {
  font-family: 'Lato';
  box-sizing: border-box;
  user-select: none;
}

html, body {
  height: 100%;
  margin: 0;
}

a {
  text-decoration: none;
  color: initial;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.home-button {
  font-size: 40px;
  color: #fffffff0;
  position: absolute;
  left: 3vw;
  top: 3vw;
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
  min-height: 130px;
  word-break: break-word;
}
.descriptive-text{
  font-size: 5vw;
  color: #111111;
}
.line-input{
  height: 5vw;
  width: 25vw;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
  vertical-align: 0.5vw;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6vw;
  width:80%;
  height: 20%;
  background-color: white;
  font-weight: bold;
}
.submit-button {
  width: 20vw;
  height: 4vh; 
  border-radius:10px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  color: #000000a0;
  font-size: 120%;
}
.fade-enter-active{
  transition: opacity 1.3s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
