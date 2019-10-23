import question from '../public/question.json';
import data from '../public/data.json';

export default {
  getQuestions(callback) {
    // setTimeout(() => callback(question), 100);
    callback(question);
  },
  getData(callback) {
    // setTimeout(() => callback(data), 100);
    callback(data);
  }
}
