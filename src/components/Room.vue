<template>
  <div class="content">
    <div class="question-container">
      <div class="arrow" id="left-arrow" @click="decreaseIndex()">&#171;</div>
      <div class="box question-box">
        {{ selectedQuestion }}
      </div>
      <div class="arrow" id="right-arrow" @click="increaseIndex()">&#187;</div>
    </div>
    <div>Select a question!</div>
    <div class="button submit-button">Select</div>
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
      ]
    }
  },
  computed: {
    selectedQuestion() {
      return this.questions[this.questionIndex];
    }
  },
  methods: {
    increaseIndex() {
      this.questionIndex = (this.questionIndex + 1) % this.questions.length;
    },
    decreaseIndex() {
      this.questionIndex = this.questionIndex > 0 ? this.questionIndex - 1 : this.questions.length - 1;
    }
  }
}
</script>

<style scoped>
.box {
  border: 1px solid #333333;
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
  margin: 5%;
  text-align: center;
}
</style>
