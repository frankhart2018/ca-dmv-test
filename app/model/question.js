const mongoConnect = require('../utils/dbcon');
const constants = require('../utils/constants');

let _questions;

class Questions {
    constructor() {
        this.db = mongoConnect.getDb();
        this.currentIdx = 0;
    }

    getNextQuestion() {
        const question = this.db.collection(constants.COLLECTION).findOne({idx: this.currentIdx});
        this.currentIdx++;
        return question;
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