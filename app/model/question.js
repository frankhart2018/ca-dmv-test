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

    async correctQuestion(idx) {
        const question = await this.getQuestionByIdx(idx);
        const currentCorrect = question.correct;

        this.db.collection(constants.COLLECTION).updateOne({idx: idx}, {$set: {correct: currentCorrect + 1}});
    }
}

const createQuestionObject = callback => {
    console.log("Creating instance of questions!");
    _questions = new Questions();
    callback();
}

const getQuestionsObj = () => {
    if (_questions) {
        console.log("Found instance");
        return _questions;
    }

    throw "No instance found";
};

exports.getQuestionsObj = getQuestionsObj;
exports.createQuestionObject = createQuestionObject;