<template>
  <div class="content">
    <transition appear name="fade" mode="out-in">
    <div class="phase-container" v-if="selectPhase">
      <div class="title">Choose a Question</div>
      <div class="question-container">
      <div class="arrow el-icon-arrow-left" @click="decreaseIndex(0)"></div>
      <transition name="fade" mode="out-in">
        <div class="center-box question-box" v-bind:key="selectedQuestion" style="height:100%">
           {{ selectedQuestion }} 
        </div>
      </transition>
      <div class="arrow el-icon-arrow-right" @click="increaseIndex(0)"></div>
      </div>
      <div class="button submit-button" @click="questionSelected()">Select</div>
    </div>
    </transition>
    <transition name="fade" mode="out-in">
    <div class="phase-container" v-if="answerPhase">
      <div class="center-box question-box" style="height:40%">
        {{ selectedQuestion }}
      </div>
      <input type="text" class="center-box answer-text-field" placeholder="Type your answer" v-model="submittedAnswer"/>
      <div class="button submit-button" @click="questionAnswered()">Submit</div>
    </div>
    </transition>
    <transition name="fade" mode="out-in">
    <div class="phase-container" v-if="guessPhase">
      <div class="center-box question-box" style="height:40%">
        {{ selectedQuestion }}
      </div>
      <div class="matching-container">
        <div class="matching-controller">
          <div class="arrow el-icon-arrow-left up-arrow" @click="increaseIndex(1)"></div>
          <div class="center-box matching-select" v-bind:style="{ backgroundColor: answerCSSColor }">{{ selectedAnswer }}</div>
          <div class="arrow el-icon-arrow-right down-arrow" @click="decreaseIndex(1)"></div>
        </div>
        <div class="matching-controller">
          <div class="arrow el-icon-arrow-left up-arrow" @click="increaseIndex(2)"></div>
          <div class="center-box matching-select" v-bind:style="{ backgroundColor: answerCSSColor }">{{ selectedUser }}</div>
          <div class="arrow el-icon-arrow-right down-arrow" @click="decreaseIndex(2)"></div>
        </div>
      </div>
      <div class="button submit-button" @click="checkPair()">Correct?</div>
    </div>
    </transition>
  </div>

</template>
<script>
var Color = net.brehaut.Color;
export default {
  name: 'Room',
  data() {
    return {
      submittedAnswer: '',
      questionIndex: 0,
      questions: [],
      answerIndex: 0,
      userIndex: 0,
      answers: [],
      users: [],
      guessPair: {},
      selectPhase: true,
      answerPhase: false,
      guessPhase: false,
      correctGuess: null,
      tempColor:{
        red: 0,
        green: 0,
        blue:0,
        alpha:0
      },  
      answerColor: {
        red: 1,
        green: 1,
        blue: 1,
        alpha:1
      }
    }
  },
  watch: {
    tempColor: function(){
      function animate(){
        if (TWEEN.update()){
          requestAnimationFrame(animate)
        }
      }

      new TWEEN.Tween(this.answerColor)
        .to(this.tempColor, 200)
        .start()
      
      animate()
    }
  },
  beforeMount() {
    this.$store.dispatch('loadQuestions');
    this.loadQuestions();
  },
  computed: {
    selectedQuestion() {
      return this.questions[this.questionIndex];
    },
    selectedAnswer() {
      return this.answers[this.answerIndex];
    },
    selectedUser() {
      return this.users[this.userIndex];
    },
    answerCSSColor: function(){
      return new Color({
        red: this.answerColor.red,
        blue: this.answerColor.blue,
        green: this.answerColor.green,
        alpha: this.answerColor.alpha,
      }).toCSS()
    }
  },
  methods: {
    loadQuestions() {
      this.questions = this.$store.getters.getQuestions;
    },
    loadData() {
      this.$store.dispatch('loadRoomData');
      this.answers = this.$store.getters.getAnswers;
      this.users = this.$store.getters.getUsers;
      this.guessPair = this.$store.getters.getPairs;
    },
    addData(ans, user) {
      this.answers.push(ans);
      this.users.push(user);
      // Assume that all answers are unique
      this.guessPair[ans] = [user];
    },
    increaseIndex(type) {
      if (type === 0) {
        this.questionIndex = (this.questionIndex + 1) % this.questions.length;
      } else if (type === 1) {
        this.answerIndex = (this.answerIndex + 1) % this.answers.length;
        this.correctGuess = null;
      } else if (type === 2) {
        this.userIndex = (this.userIndex + 1) % this.users.length;
        this.correctGuess = null;
      }
    },
    decreaseIndex(type) {
      if (type === 0) {
        this.questionIndex = this.questionIndex > 0 ? this.questionIndex - 1 : this.questions.length - 1;
      } else if (type === 1) {
        this.answerIndex = this.answerIndex > 0 ? this.answerIndex - 1 : this.answers.length - 1;
        this.correctGuess = null;
      } else if (type === 2) {
        this.userIndex = this.userIndex > 0 ? this.userIndex - 1 : this.users.length - 1;
        this.correctGuess = null;
      }
    },
    questionSelected() {
      this.selectPhase = false;
      this.answerPhase = true;
    },
    questionAnswered() {
      this.answerPhase = false;
      this.guessPhase = true;
      this.loadData();
      this.addData(this.submittedAnswer, this.$store.getters.getUsername);
      this.submittedAnswer = '';
    },
    checkPair() {
      var ans = this.selectedAnswer;
      var user = this.selectedUser;

      var idx = this.guessPair[ans].indexOf(user);

      if (idx > -1) {
        this.correctGuess = true;
        // Assume that all answers are unique
        this.users.splice(this.userIndex, 1);
        this.answers.splice(this.answerIndex, 1);
        delete this.guessPair[ans];

        // If done, go to question select phase
        if (this.answers.length == 0) {
          confirm('Congratulations!');
          this.guessPhase = false;
          this.selectPhase = true;
        } else{
          this.tempColor = new Color('#00ff78').toRGB();
        }


        if (this.userIndex >= this.users.length) {
          this.userIndex = 0;
        }
        if (this.answerIndex >= this.answers.length) {
          this.answerIndex = 0;
        }
      } else {
        this.correctGuess = false;
        this.tempColor = new Color('#e35151').toRGB();
      }
      setTimeout(()=>{
        this.tempColor = new Color('white').toRGB();
      },200);
    }
  }
}
</script>

<style scoped>
.title{
  font-size: 9.5vw;
  font-weight: bold;
  color: #222222;
}
.phase-container{
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width:100%;
  height: 80%;
}
.question-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 30%;
}

.question-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 80%;
  padding: 5%;
  text-align: left;
  line-height:1.5;
  font-size: 4.2vw;
  font-weight:bold;
}

.answer-text-field{
  width: 80%;
  height:30%;
  background-color:rgba(255,255,255,0.5);
  text-align: center;
  color: rgba(0,0,0,0.8);
  font-size: 32px;
  
}

.matching-container {
  display: flex;
  justify-content: space-between;
  height: 50%;
  width:100%;
}

.matching-controller {
  display: flex;
  flex-direction: column;
  align-items: center;
  width:50%;
}

.arrow {
  font-size: 36px;
  color: #ffffff70;
  margin: 5px;
  
}

.up-arrow, .down-arrow {
  transform: rotate(90deg);
}

.matching-select{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  background-color: white;
  font-size: 4.5vw;
  font-weight: bold;
  padding: 5px;
  text-align: center;
}

.matching-controller .box.incorrect {
  background-color: red;
}

.matching-controller .box.correct {
  background-color: darkturquoise;
}
</style>

