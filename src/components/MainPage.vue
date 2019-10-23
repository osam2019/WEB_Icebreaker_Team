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
      template: `<span class="form"><div>Your Room ID is <b>{{makeid()}}</b></div>
          <div>Your name: <input type="text"/></div>
          <router-link to="/room">
            <div class="button submit-button">Create!</div>
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
        }
      }
    },
    'join_follow_box' : {
      template:`<span class="form">
          <div>Room ID: <input type="text"/></div>
          <div>Your name: <input type="text"/></div>
          <router-link to="/room">
            <div class="button submit-button">Join!</div>
          </router-link></span>
        `
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

