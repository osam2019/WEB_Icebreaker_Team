<template>
  <div class="content">
    <transition name="fade" mode="out-in">
    <div class="phase-container" v-if="selectPhase">
      <div class="title">Select</div>
      <div class="question-container">
      <div class="arrow el-icon-d-arrow-left" @click="decreaseIndex(0)"></div>
      <div class="center-box question-box" style="height:100%">
        {{ selectedQuestion }}
      </div>
      <div class="arrow el-icon-d-arrow-right" @click="increaseIndex(0)"></div>
      </div>
      <div class="button submit-button" @click="questionSelected()">Select</div>
    </div>
    </transition>
    <transition name="fade" mode="out-in">
    <div class="phase-container" v-if="answerPhase">
      <div class="center-box question-box" style="height:40%">
        {{ selectedQuestion }}
      </div>
      <input type="text" class="center-box answer-text-field" placeholder="Type your answer"/>
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
          <div class="arrow el-icon-d-arrow-left up-arrow" @click="increaseIndex(1)"></div>
          <div class="center-box matching-select">{{ selectedAnswer }}</div>
          <div class="arrow el-icon-d-arrow-right down-arrow" @click="decreaseIndex(1)"></div>
        </div>
        <div class="matching-controller">
          <div class="arrow el-icon-d-arrow-left up-arrow" @click="increaseIndex(2)"></div>
          <div class="center-box matching-select">{{ selectedUser }}</div>
          <div class="arrow el-icon-d-arrow-right down-arrow" @click="decreaseIndex(2)"></div>
        </div>
      </div>
      <div class="button submit-button" @click="checkPair()">Correct?</div>
    </div>
    </transition>
  </div>

</template>

<script>
export default {
  name: 'Room',
  data() {
    return {
      questionIndex: 0,
      questions: [
        'If you were an animal, what animal would you be?',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum scelerisque justo et lobortis. Pellentesque sed erat iaculis?',
        'Question3',
        'Question4'
      ],
      answerIndex: 0,
      userIndex: 0,
      answers: ['fox', 'tiger', 'dragon', 'fly'],
      users: ['Jake', 'John', 'Alice', 'Bob'],
      guessPair: {
        fox: ['John'],
        tiger: ['Alice'],
        dragon: ['Jake'],
        fly: ['Bob']
      },
      selectPhase: true, /*DEBUG*/
      answerPhase: false,
      guessPhase: false,
      correctGuess: null
    }
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
    title() {
      if (this.answerPhase) {
        return 'Question';
      } else if (this.guessPhase) {
        if (this.correctGuess === null) {
          return 'Guess!';
        } else if (this.correctGuess) {
          return 'Correct!';
        } else {
          return '땡!';
        }
      } else {
        return 'Choose';
      }
    }
  },
  methods: {
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
    },
    checkPair() {
      var ans = this.selectedAnswer;
      var user = this.selectedUser;

      if (this.guessPair[ans].indexOf(user) > -1) {
        this.correctGuess = true;
      } else {
        this.correctGuess = false;
      }
    }
  }
}
</script>

<style scoped>
  .title{
    font-size: 50px;
    font-weight: bold;
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
  font-size: 16px;
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
  margin: 10px;
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
  font-size: 20px;
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

