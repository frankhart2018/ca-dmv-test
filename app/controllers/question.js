exports.getQuestion = (req, res, next) => {
    res.render('question', {
       questionNum: 1,
       question: 'Some question',
       answer: 'Some answer' 
    });
};