<template>
  <transition appear name="fade" mode="out-in">
    <div class="content">
      <div class="title">
        Waiting
      </div>
      <router-link to="/room">
        <div class="button submit-button">Start</div>
      </router-link>

    </div>
  </transition>
</template>

<script>
export default {
  name: 'Wait',
  data(){
    return{
    }
  }
}

</script>
<style scoped>
.title{
  font-size: 50px;
  font-weight: bold;
  color: #fffffff0;
}
.player-list-box{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 80%;
  height: 30%;
  font-size: 4vw;
  font-weight: bold;
}
</style>

