const questions = require('../model/question');

exports.getQuestion = (req, res, next) => {
    const questionsObj = questions.getQuestionsObj();
    questionsObj.getNextQuestion()
        .then(question => {
            res.render('question', {
                questionNum: 1,
                question: question.question,
                answer: question.answer, 
             });
        })
        .catch(err => {
            console.log(err);
        });
};