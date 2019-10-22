<template>
<div class="content">
  <div class="button" v-if="!joinClicked" @click="hideJoin()">Create Room</div>
  <div class="button" v-if="!createClicked" @click="hideCreate()">Join Room</div>
  <div class="form" v-if="createClicked">
    <div>Your Room ID is ABC1234</div>
    <div>Your name: <input type="text"/></div>
    <router-link to="/room">
      <div class="button submit-button">Create!</div>
    </router-link>
  </div>
  <div class="form" v-if="joinClicked">
    <div>Room ID: <input type="text"/></div>
    <div>Your name: <input type="text"/></div>
    <router-link to="/room">
      <div class="button submit-button">Join!</div>
    </router-link>
  </div>
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
.button{
  font-weight: 400;    
}
</style>

