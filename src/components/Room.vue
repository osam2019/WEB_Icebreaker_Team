<template>
  <div class="content">
    <div class="title">{{ title }}</div>
    <div class="question-container">
      <div class="arrow left-arrow" v-if="selectPhase" @click="decreaseIndex(0)">&#171;</div>
      <div class="box question-box">
        {{ selectedQuestion }}
      </div>
      <div class="arrow right-arrow" v-if="selectPhase" @click="increaseIndex(0)">&#187;</div>
    </div>
    <div class="subcontent" v-if="selectPhase">
      <div>Select a question!</div>
      <div class="button submit-button" @click="questionSelected()">Select</div>
    </div>
    <div class="subcontent" v-if="answerPhase">
     <input type="text" placeholder="Type your answer"/>
      <div class="button submit-button" @click="questionAnswered()">Submit</div>
    </div>
    <div class="subcontent" v-if="guessPhase">
      <div class="matching-container">
        <div class="matching-controller">
          <div class="arrow up-arrow" @click="increaseIndex(1)">&#171;</div>
          <div class="box matching-answer">{{ selectedAnswer }}</div>
          <div class="arrow down-arrow" @click="decreaseIndex(1)">&#187;</div>
        </div>
        <div class="matching-controller">
          <div class="arrow up-arrow" @click="increaseIndex(2)">&#171;</div>
          <div class="box matching-user">{{ selectedUser }}</div>
          <div class="arrow down-arrow" @click="decreaseIndex(2)">&#187;</div>
        </div>
      </div>
      <div class="button submit-button" @click="checkPair()">correct?</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Room',
  data() {
    return {
      questionIndex: 0,
      questions: [
        'Question1 Question1 Question1 Question1 Question1 Question1',
        'Question2',
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
      selectPhase: true,
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
        return '';
      }
    }
  },
  methods: {
    increaseIndex(type) {
      if (type === 0) {
        this.questionIndex = (this.questionIndex + 1) % this.questions.length;
      } else if (type === 1) {
        this.answerIndex = (this.answerIndex + 1) % this.answers.length;
      } else if (type === 2) {
        this.userIndex = (this.userIndex + 1) % this.users.length;
      }
    },
    decreaseIndex(type) {
      if (type === 0) {
        this.questionIndex = this.questionIndex > 0 ? this.questionIndex - 1 : this.questions.length - 1;
      } else if (type === 1) {
        this.answerIndex = this.answerIndex > 0 ? this.answerIndex - 1 : this.answers.length - 1;
      } else if (type === 2) {
        this.userIndex = this.userIndex > 0 ? this.userIndex - 1 : this.users.length - 1;
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
.box {
  border: 1px solid #333333;
  display: flex;
  justify-content: center;
  align-items: center; 
}

.question-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 30%
}

.arrow {
  font-size: 60px;
}

.question-box {
  width: 80%;
  height: 90%;
  padding: 10%;
  margin: 5%;
  text-align: center;
}

.subcontent {
  display: flex;
  flex-direction: column;
  width: 90%;
}

.matching-container {
  display: flex;
  justify-content: space-between;
}

.matching-controller {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.up-arrow, .down-arrow {
  transform: rotate(90deg);
}

.matching-controller .box {
  font-size: 24px;
  padding: 5px;
  text-align: center;
}
</style>

