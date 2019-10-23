<template>
<transition appear name = "fade" mode="out-in">
<div class="content">
  <div class="center-box button" style="width:80%; height:30%" @click="topClick()">
    <transition name="fade" mode="out-in">
      <component v-bind:is ="top_box"></component>
    </transition>
  </div>
  <div class="center-box" style="width:80%; height:30%" v-bind:class="{button:!buttonClicked}" @click="bottomClick()">
    <transition name="fade">
      <component v-bind:is ="bottom_box"></component>
    </transition>
  </div>
</div>
</transition>
</template>

<script>
function validateUsername(event, username) {
  if (username.length < 1) {
    confirm('Invalid username!');
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}

export default {
  name: 'MainPage',
  data() {
    return {
      top_box: 'create_box',
      bottom_box: 'join_box',
      createClicked: false,
      joinClicked: false,
      buttonClicked:false
    }
  },
  components : {
    'create_box' : {
      template: '<span>Create Room</span>'
    },
    'join_box' : {
      template: '<span>Join Room</span>'
    },
    'create_follow_box' : {
      template: `<span class="form"><div><span class="descriptive-text"> Your Room ID is </span><b>{{makeid()}}</b></div>
      <div><span class="descriptive-text">Your name: </span><input type="text" id="create-user-input" class="line-input"/></div>
          <router-link to="/wait">
            <div class="button submit-button" @click="setUsername($event)">Create!</div>
          </router-link></span>`,
      methods: {
        makeid: function() {
          var result = '';
          var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;
          for ( var i = 0; i < 7; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
        },
        setUsername: function(event) {
          var user = document.getElementById('create-user-input').value;
          if (validateUsername(event, user)) {
            this.$store.commit('setUsername', user);
          }
        }
      }
    },
    'join_follow_box' : {
      template:`<span class="form">
      <div><span class="descriptive-text">Room ID: </span><input type="text" class="line-input"/></div>
      <div><span class="descriptive-text">Your name:</span> <input type="text" id="join-user-input" class="line-input" /></div>
          <router-link to="/wait">
            <div class="button submit-button" @click="setUsername($event)">Join!</div>
          </router-link></span>`,
      methods: {
        setUsername: function(event) {
          var user = document.getElementById('join-user-input').value;
          if (validateUsername(event, user)) {
            this.$store.commit('setUsername', user);
          }
        }
      }
    }
  },
  methods: {
    topClick() {
      if(!this.buttonClicked){
        this.bottom_box = 'create_follow_box';
      }
      else{
        this.top_box = 'create_box';
        this.bottom_box ='join_box';
      }
      this.buttonClicked = !(this.buttonClicked);
    },
    bottomClick() {
      if(!this.buttonClicked){
        this.buttonClicked = true;
        this.top_box = 'join_box';
        this.bottom_box ='join_follow_box'
      }
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
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items:center;
}
.center{
  align-self:center;
}
</style>

