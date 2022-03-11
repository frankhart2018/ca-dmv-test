const questions = require('../model/question');

exports.getQuestion = (req, res, next) => {
    const questionsObj = questions.getQuestionsObj();
    questionsObj.getNextQuestion()
        .then(question => {
            res.render('question', {
                questionNum: question.idx + 1,
                question: question.question,
                answer: question.answer,
                jsFile: 'question.js'
             });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postCorrectQuestion = (req, res, next) => {
    const data = req.body.data;

    const questionsObj = questions.getQuestionsObj();

    if (data.status === "correct") {
        questionsObj.correctQuestion(data.idx);
    } else {
        console.log("Incorrect question");
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        "icon": "success",
        "title": "Success",
        "text": "Result updated successfully!",
    }));
};