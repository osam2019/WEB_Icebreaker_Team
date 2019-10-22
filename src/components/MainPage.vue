<template>
<div class="content">
  <transition name="fade" mode="out-in">
    <div class="center-box button" v-if="!joinClicked" @click="hideJoin()">Create Room</div>
  </transition>
  <transition name="fade" mode="out-in">
    <div class="center-box button" v-if="!createClicked" @click="hideCreate()">Join Room</div>
  </transition>
  <transition name="fade" mode="out-in">
  <div class="center-box form" v-if="createClicked">
    <div>Your Room ID is <b>ABC1234</b></div>
    <div>Your name: <input type="text"/></div>
    <router-link to="/room">
      <div class="button submit-button">Create!</div>
    </router-link>
  </div>
  </transition>
  <transition name="fade" mode="out-in">
  <div class="center-box form" v-if="joinClicked">
    <div>Room ID: <input type="text"/></div>
    <div>Your name: <input type="text"/></div>
    <router-link to="/room">
      <div class="button submit-button">Join!</div>
    </router-link>
  </div>
  </transition>
</div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      createClicked: false,
      joinClicked: false
    }
  },
  methods: {
    hideCreate() {
      this.joinClicked = !this.joinClicked;  
    },
    hideJoin() {
      this.createClicked = !this.createClicked;
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.form{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items:center;
  background-color: rgba(255,255,255,0.5);
  height:20%;
}
.center{
  align-self:center;      
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

