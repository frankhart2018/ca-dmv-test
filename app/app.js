const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const questionRoutes = require('./routes/question');
const mongoConnect = require('./utils/dbcon');
const questionModel = require('./model/question');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use(questionRoutes);

mongoConnect.mongoConnect(() => {
    questionModel.createQuestionObject(() => {
        app.listen(8080);
    });
});