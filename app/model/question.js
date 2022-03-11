const mongoConnect = require('../utils/dbcon');
const constants = require('../utils/constants');

let _questions;

class Questions {
    constructor() {
        this.db = mongoConnect.getDb();
        this.currentIdx = 0;
    }

    getQuestionByIdx(idx) {
        return this.db.collection(constants.COLLECTION).findOne({idx: idx});
    }

    async getNextQuestion() {
        const question = await this.getQuestionByIdx(this.currentIdx);
        this.currentIdx++;
        return question;
    }

    async correctQuestion() {
        const question = await this.getQuestionByIdx(this.currentIdx - 1);
        const currentCorrect = question.correct;

        this.db.collection(constants.COLLECTION).updateOne({idx: this.currentIdx - 1}, {$set: {correct: currentCorrect + 1}});
    }

    async wrongQuestion() {
        const question = await this.getQuestionByIdx(this.currentIdx - 1);
        const currentWrong = question.incorrect;

        this.db.collection(constants.COLLECTION).updateOne({idx: this.currentIdx - 1}, {$set: {incorrect: currentWrong + 1}});
    }
}

const createQuestionObject = callback => {
    console.log("Creating instance of questions!");
    _questions = new Questions();
    callback();
}

const getQuestionsObj = () => {
    if (_questions) {
        return _questions;
    }

    throw "No instance found";
};

exports.getQuestionsObj = getQuestionsObj;
exports.createQuestionObject = createQuestionObject;