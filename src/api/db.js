import question from '../public/question.json';
import data from '../public/data.json';

export default {
  getQuestions(callback) {
    setTimeout(() => callback(question), 100);
  },
  getData(callback) {
    setTimeout(() => callback(data), 100);
  }
}
